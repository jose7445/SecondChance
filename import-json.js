// IMPORTAR DADES A FIREBASE (mètode casolà)

const firebase = require("firebase/app");
const { getFirestore, addDoc, collection } = require("firebase/firestore");
const petsJson = require("./src/json/pets.json");

// les teves dades de configuració:
firebase.initializeApp({
  apiKey: "AIzaSyConsXDk58Nn5lQFwAGKDq7cGzgS8Zahg8",
  authDomain: "adoptme-a8128.firebaseapp.com",
  projectId: "adoptme-a8128",
  storageBucket: "adoptme-a8128.appspot.com",
  messagingSenderId: "639146606425",
  appId: "1:639146606425:web:af6444798ff6f899d21648",
});

var db = getFirestore();

// per cada element del json, afegeix una nova mascota a la base de dades
petsJson.data.forEach(function (obj) {
  addDoc(collection(db, "pets"), {
    id: obj.id,
    name: obj.name,
    name_lower: obj.name.toLowerCase(),
    image_url: obj.image_url,
    location: obj.location,
    species: obj.species,
    sex: obj.sex,
    size: obj.size,
    birth_date: obj.birth_date,
    handle_status: obj.handle_status,
    bio: obj.bio,
    status: obj.status,
    personality: obj.personality,
    info_notes: obj.info_notes,
    short_description: obj.short_description,
    race: obj.race,
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
