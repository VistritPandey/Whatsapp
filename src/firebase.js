import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC78AYPs8Zt3pQipVeVYmjr1zclzKQ8-6s",
    authDomain: "vistrit-whatsapp.firebaseapp.com",
    databaseURL: "https://vistrit-whatsapp.firebaseio.com",
    projectId: "vistrit-whatsapp",
    storageBucket: "vistrit-whatsapp.appspot.com",
    messagingSenderId: "712361611310",
    appId: "1:712361611310:web:c5e8bafd32d1b1c0dd8fbf",
    measurementId: "G-356D2RRKQN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;