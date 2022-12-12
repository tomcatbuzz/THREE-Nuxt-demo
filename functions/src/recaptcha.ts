import * as functions from 'firebase-functions';
import axios from 'axios';
import * as cors from 'cors';
const corsHandler = cors({origin: true});
const USER_ERROR_CODES = ['missing-input-response', 'invalid-input-response'];
const secretKey = functions.config().recaptcha.key;

export const checkRecaptcha = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Content-Type', 'application/json');
    const token = req.query.token;
    console.log(token, 'what is here');
    try {
      const response = await axios.get(`https://recaptcha.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`);

      const data = response.data;
      console.log('response data: ', data);
      if (data.success) {
        return res.status(200).send({score: data.score});
      }

      const errorCodes = data['error-codes'];
      if (errorCodes.length == 1 && USER_ERROR_CODES.includes(errorCodes[0])) {
        return res.status(400).send('Invalid Input');
      }
      return res.status(500).send('Internal Error');
    } catch (error) {
      console.log('error: ', error);
      return res.status(500).send('Internal Error');
    }
  });
});
