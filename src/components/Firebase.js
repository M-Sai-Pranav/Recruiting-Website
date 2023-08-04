import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBjWPfWDdKOB_4XX9v8wAhbsyyjEt1YtV4",
  authDomain: "coursify-118e0.firebaseapp.com",
  projectId: "coursify-118e0",
  storageBucket: "coursify-118e0.appspot.com",
  messagingSenderId: "93020379134",
  appId: "1:93020379134:web:fdf99a6df3f9888f6152af",
  measurementId: "G-XTL4N5G322"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
