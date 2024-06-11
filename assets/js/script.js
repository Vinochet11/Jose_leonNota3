window.addEventListener((load) =>{
    registrarse.addEventListener("click",registrarse())
})
const registrarse= ()=>{
    //recuperar elementos
    let eNombre = document.getElementById("Nombre");
    let eApellido =document.getElementById("Apellido");
    let eRut = document.getElementById("Rut");
    let eN_telefonico= document.getElementById("N_telefonico");
    let eEdad= document.getElementById("edad");
    //
    let Vnombre = eNombre.value;
    let Vapelldio = eApellido.value;
    let VRut = eRut.value;
    let Vn_telefonico=eN_telefonico.value;
    let Vedad =eEdad.value;
    //falta crear un objeto persona
    let persona=("Nombre":Vnombre,"apellido":Vapelldio,"rut":Vrut,"n_telefonico":Vn_telefonico,"edad":Vedad)
    
}




function b_contraste(){
    let cuer=document.body;//body
    let expedi = cuer.backgroundcolor;
    let ih = document.getElementsByTagName("body")
    for (let index = 0; index < ih.length; index++) {
        const element = ih[index];
        if (element=="bisque") {
            element = "black"
        }else{
            console.log("black")
    }}

}