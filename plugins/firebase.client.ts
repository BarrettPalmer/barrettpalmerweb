import { initializeApp, getApp, getApps, type FirebaseApp } from 'firebase/app'
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics'
import { getFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB7wxYQh9ShIT4GohyYfc7Tw0fCReRemdY',
  authDomain: 'barrettpalmer-website.firebaseapp.com',
  projectId: 'barrettpalmer-website',
  storageBucket: 'barrettpalmer-website.firebasestorage.app',
  messagingSenderId: '1068462819582',
  appId: '1:1068462819582:web:2c898cb5611aca27663daf',
  measurementId: 'G-EVEPT69V55'
}

let app: FirebaseApp
let analytics: Analytics | null = null
let firestore: Firestore | null = null

export default defineNuxtPlugin(async () => {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig)

  if (process.client && (await isSupported().catch(() => false))) {
    analytics = getAnalytics(app)
  }

  firestore = getFirestore(app)

  return {
    provide: {
      firebaseApp: app,
      firebaseAnalytics: analytics,
      firebaseFirestore: firestore
    }
  }
})
