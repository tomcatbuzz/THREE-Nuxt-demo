import * as functions from 'firebase-functions'

import * as sgMail from '@sendgrid/mail'

const SENDGRID_API_KEY = functions.config().sendgrid.key
sgMail.setApiKey(SENDGRID_API_KEY)

export const sendContactMessage = functions.firestore.document('/messages/{pushKey}')
  .onCreate((snap, context) => {
    // const dataAfterChange = change.after.data()
    // // Only send email for new messages.
    // if (change.before.data() || !dataAfterChange.contactName) {
    //   return
    // }

    // const $data = dataAfterChange
    const newValue = snap.data()
    // const name = newValue.contactName

    const msg = {
      to: 'tomcatbuzz@yahoo.com',
      from: 'firebase@tomcatbuzz.com',
      subject: 'You have a new contact request',
      text: `Your message content. \n
          Sender's Name: ${newValue.contactName} \n
          Sender's Email ${newValue.contactEmail} \n
          Subject: ${newValue.contactSubject} \n
          Content: ${newValue.contactMessage}`,
    }
    return sgMail.send(msg)
      .then(() => console.log('email sent!'))
      .catch((error: any) => {
        console.log(error)
      })
  })
