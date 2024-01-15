/*1. despues de crear el proyecto, dentro de la plataforma firebase vamos a crear una webapp y le damos un nombre: "Agua Library".

Añadimos el SDK a nuestro codigo:

2. npm install firebase
3. creamos una folder llamada firebase, dentro de esa un archivo llamado config.js y pegamos esto:*/

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; //base de datos Realtime Database

// TODO: Add SDKs for Firebase products that you want to use

// configuracion del cliente de firebase, config solo para conectarse no administrar

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDatabase = getDatabase(FirebaseApp);
