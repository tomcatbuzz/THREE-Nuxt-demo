import * as functions from 'firebase-functions'
import axios from 'axios'
// import * as express from 'express'
// import * as bodyParser from 'body-parser'
// import * as cors from 'cors'
const USER_ERROR_CODES = ['missing-input-response', 'invalid-input-response']
// const fetch = require('isomorphic-fetch')
// const corsHandler = cors({ origin: true })
// const app = express()
// app.use(bodyParser.json())

export const sendRecaptcha = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  // corsHandler(req, res, async () => {
  const secret = functions.config().secret.key
  const token = req.query.token
  functions.logger.log('Token', token)
  try {
    const response = await axios.get(`https://recaptcha.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`)

    const data = response.data
    console.log('response data: ', data)
    if (data.success) {
      return res.status(200).send({ score: data.score })
    }

    const errorCodes = data['error-codes']
    if (errorCodes.length === 1 && USER_ERROR_CODES.includes(errorCodes[0])) {
      return res.status(400).send('Invalid Input')
    }
    return res.status(500).send('Internal Error')
  } catch (error) {
    console.log('error: ', error)
    return res.status(500).send('Internal Error')
  }
  // })
})
