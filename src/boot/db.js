import "./firebase.js";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore();
const petCollection = collection(db, "pets");
export default db;

//Funcion consulta para mostrar los pets por ID a traves del firebase
export async function getPetById(id) {
  const petsCollection = collection(db, "pets");
  const q = query(petsCollection, where("id", "==", id));
  return getDocs(q).then((results) => {
    const pets = [];
    results.forEach((doc) => pets.push(doc.data()));
    return pets[0];
  });
}
//Funcion asincrona para exportar todos los pets de la coleccion a través del id
export async function getAllPets() {
  const petsCollection = collection(db, "pets");
  const q = query(petsCollection, orderBy("id"));
  return getDocs(q).then((results) => {
    const pets = [];
    results.forEach((doc) => pets.push(doc.data()));
    return pets;
  });
}
