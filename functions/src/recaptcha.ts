import * as functions from 'firebase-functions'
import axios from 'axios'
const USER_ERROR_CODES = ['missing-input-response', 'invalid-input-response']

export const sendRecaptcha = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', functions.config().site.url)

  const secret = functions.config().secret.key
  const token = req.query.token
  console.log('token', token)

  try {
    const response = await axios.get(`https://recaptcha.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`)

    const data = response.data
    console.log('response data: ', data)
    if (data.success) {
      res.status(200).send({ score: data.score })
    }

    const errorCodes = data['error-codes']
    if (errorCodes.length === 1 && USER_ERROR_CODES.includes(errorCodes[0])) {
      res.status(400).send('Invalid Input')
    }
    res.status(500).send('Internal Error')
  } catch (error) {
    console.log('error: ', error)
    res.status(500).send('Internal Error')
  }
})
