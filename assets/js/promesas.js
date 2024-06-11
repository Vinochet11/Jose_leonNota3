import {addDoc,doc,collection} from "firebase/firestore";
const db = getFirestore(app);
const ref = await addDoc(collection(Busuario, ),persona);


//await doc(db(Busuario)persona)