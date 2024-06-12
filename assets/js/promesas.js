import {addDoc,collection,doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

//funcion para registrar usuario
export const registrarUsuario= async(usuario)=>{
    console.log("Promesas: parte 1")
    const docRef = await addDoc(collection(db,"DatosUsuarios"),usuario);
    console.log("sa")
} 