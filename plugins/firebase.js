import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection } from 'firebase/firestore'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

const firebaseConfig = {
  apiKey: 'AIzaSyBR523bFu4MiQICSydeFFcb-OSjvRXEbJs',
  authDomain: 'tomcatbuzzweb.firebaseapp.com',
  projectId: 'tomcatbuzzweb',
  storageBucket: 'tomcatbuzzweb.appspot.com',
  messagingSenderId: '1005362535240',
  appId: '1:1005362535240:web:bc50b914cd5106b008717d',
  // measurementId: 'G-3RTWSNN90M'
  measurementId: 'G-HNB0B48DT0'
}

const app = initializeApp(firebaseConfig)

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lcvy4oiAAAAAAKVGQvLQcxjKN-rw4gw094evDgW'),
  isTokenAutoRefreshEnabled: true
})

const db = getFirestore(app)
const analytics = getAnalytics(app)
logEvent(analytics, 'notification_received')
const messageColRef = collection(db, 'messages')
export { messageColRef, appCheck }
