import {addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

//funcion para registrar usuario
export const registrarUsuario = async(usuario)=>{
    const docRef = await addDoc(collection(db,"datos"),usuario);
} 

export const obtenerUsuario = async()=>{
    // recupera la referencia (ruta)
    const ref = collection(db, "persona");
    //Recuperamos una captura de la bd 
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc) => {
        console.log(doc.data());
        listado.push({...doc.data(),id:doc.id})
    });
    
    return listado;
}
export const actualizarUsuario = async(objeto, id)=>{
    const ref = doc(db, "persona", id);
    await updateDoc(ref, objeto)
}
export const eliminarUsuario = async(id)=>{
    const ref = doc(db, "persona", id);
    await deleteDoc (ref);
}