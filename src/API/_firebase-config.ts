import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// Config for Firebase
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASEURL}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_APPID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENTID}`
}

// App Firebase
const app = initializeApp(firebaseConfig)

// Firebase Storage
export const storage = getStorage(app)
