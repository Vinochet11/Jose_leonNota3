import { registrarUsuario } from "./promesas.js";

window.addEventListener("load",() =>{
    document.getElementById("btn_registrarse").addEventListener("click",registrarse);
})
const registrarse= ()=>{
    console.log("Parte1")
    //recuperar elementos
    let eNombre = document.getElementById("nombre")
    let eApellido =document.getElementById("apellido")
    let eRut = document.getElementById("rut")
    let eN_telefonico= document.getElementById("n_telefonico")
    let eEdad= document.getElementById("edad")
    let eC_electronico = document.getElementById("c_electronico")
    let eC_postal = document.getElementById("c_postal")
    //
    console.log("Parte2")
    let Vnombre = eNombre.value;
    let Vapelldio = eApellido.value;
    let VRut = eRut.value;
    let Vn_telefonico=eN_telefonico.value;
    let Vedad =eEdad.value;
    let VC_electronico = eC_electronico.value;
    let VC_postal = eC_postal.value;
    console.log("Parte3")
    //falta crear un objeto persona
    let usuario={Apellido: Vapelldio ,Nombre:Vnombre,c_electronico:VC_electronico,c_postal:VC_postal,edad:Vedad,n_telefonico:Vn_telefonico,rut:VRut}
    console.log("Parte4")
    registrarUsuario(usuario).then(()=>{
        alert("cuenta creada con exito")
    }).catch((error)=>{
        console.log(error);
        console.log("catch: Parte 1")
    });
    
}




//function b_contraste(){
    //let cuer=document.body;//body
    //let expedi = cuer.backgroundcolor;
    //let ih = document.getElementsByTagName("body")
    //for (let index = 0; index < ih.length; index++) {
        //const element = ih[index];
        //if (element=="bisque") {
           // element = "black"
        //}else{
         //   console.log("black")
    //}}

//}