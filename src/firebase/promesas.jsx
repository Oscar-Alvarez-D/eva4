import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config";

export const registrarPersona = async(p)=>{
    const docRef = await addDoc(collection(db, "personas"), p) //variable para agregar documentos//
}

export const obtenerPersonas = async()=>{
    const querySnapshot = await getDocs(collection(db, "personas"));
    let personas = []
    querySnapshot.forEach((d)=>{
        var p = {
            nombre:d.data().nombre,
            apellido:d.data().apellido,
            telefono:d.data().telefono,
            email:d.data().email,
            direccion:d.data().direccion,
            modelo:d.data().modelo,
            ciudad:d.data().ciudad,
            envio:d.data().envio,
            comentarios:d.data().comentarios,
            terminos:d.data().terminos,
            idUsuario:d.id
        } 
        personas.push(p)
    })
    return personas
}

export const obtenerPersona = async(idPersona)=>{
    const docRef = doc(db, "personas", idPersona);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const p= {
            nombre:docSnap.data().nombre,
            apellido:docSnap.data().apellido,
            edad:docSnap.data().edad,
            idPersona:docSnap.id
        }
        return p
    } else {
    // docSnap.data() will be undefined in this case
        return undefined
    }
}

export const eliminarPersona = async(idPersona)=>{
    await deleteDoc(doc(db, "personas", idPersona));
}