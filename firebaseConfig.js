import { initializeApp, getApp, getApps } from 'firebase/app';

// Optionally import the services that you want to use
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDeVo-i_31gIYvpZrr3ezGKOZZiO0FaiB0",
  authDomain: "testapp-901f0.firebaseapp.com",
  projectId: "testapp-901f0",
  storageBucket: "testapp-901f0.appspot.com",
  messagingSenderId: "13675639136",
  appId: "1:13675639136:web:aa18c54c788664b066ae05",
  measurementId: "G-SS7BB9KNJ6"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);
const storage = getStorage(app);

const isFirebaseInitialized = () => {
    // Check if any Firebase apps are initialized
    const apps = getApps();
    if (apps.length === 0) {
        return false;
    }

    // Retrieve the default app's configuration
    const app = getApp();
    const config = app.options;

    // Check if the projectId is set in the app's configuration
    return !!config.projectId;
};

export { auth, db , storage, isFirebaseInitialized };