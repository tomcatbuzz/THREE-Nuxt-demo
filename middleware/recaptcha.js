import { useBody } from 'h3'
import axios from 'axios'

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  try {
    const { token } = await useBody(req)

    if (!token) {
      res.end(
        JSON.stringify({
          success: false,
          message: 'Invalid token'
        })
      )
      return
    }

    // eslint-disable-next-line quotes
    axios.get(`https://www.google.com/recaptcha/api/siteverify?secretKey=$&response=$`).then((answer) => {
      if (answer.status) {
        res.end(
          JSON.stringify({
            success: true,
            message: 'Token verified'
          })
        )
      } else {
        res.end(
          JSON.stringify({
            success: false,
            message: 'Invalid token'
          })
        )
      }
    })
  } catch (e) {
    console.log('ReCaptcha error:', e)
    res.end(
      JSON.stringify({
        success: false,
        message: 'Internal error'
      })
    )
  }
}
