import { initializeApp, FirebaseApp, getApp } from 'firebase/app';

export let app: FirebaseApp;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STRAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

try {
    app = getApp('app');
} catch (e) {
    app = initializeApp(firebaseConfig, 'app');
}

const firebase = initializeApp(firebaseConfig);

export default firebase;