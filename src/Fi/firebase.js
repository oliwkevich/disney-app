import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAjGWiKSo0fUfGROgIKWgtLxbbrQrJVZjE",
    authDomain: "disney-appp.firebaseapp.com",
    projectId: "disney-appp",
    storageBucket: "disney-appp.appspot.com",
    messagingSenderId: "775987664340",
    appId: "1:775987664340:web:71dc55bcf7420345baf241"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getAuth(app);
  export default app;