import { actualizarUsuario, eliminarUsuario, obtenerUsuario, registrarUsuario } from "./promesas.js";
window.addEventListener("load",() =>{
    document.getElementById("btn_registrarse").addEventListener("click",validar);
    document.getElementById("btn_registrarse").addEventListener("click",registrarse);
    cargarDatos();
    document.getElementById("btn_contraste").addEventListener("click",b_contraste);
    document.getElementById("btn_fuente").addEventListener("click",b_fuente);

})
const b_contraste= ()=>{
    let body = document.body;
    let sss = body.style.color;
    if(body.style.backgroundColor==="cadetblue"){
        body.style.backgroundColor="bisque";
        sss="red";
    }else{
        body.style.backgroundColor = "cadetblue";
        
    }
}
function validar(){
    ValidarVacio("nombre")
    ValidarVacio("apellido")
    ValidarVacio("rut")
    ValidarVacio("n_telefonico")
    ValidarVacio("edad")
    ValidarVacio("c_electronico")
    ValidarVacio("c_postal")
}
function ValidarVacio(idcampo){
    let elemento = document.getElementById(idcampo)//recuperamos elemento
    let valor= elemento.value;//recuperamos el valor del elemento
    let displ = document.getElementById("p"+idcampo);
    if (valor.trim()===''){
        elemento.style.borderColor="red";
        displ.style.display = "block";
    }else{
        elemento.style.borderColor="green";
        //displ.style.display="none";
    }
}

const registrarse= ()=>{//esta funcion sirve para registrar el usuario
    //recuperarmos cada uno de los  elementos
    let eNombre = document.getElementById("nombre")
    let eApellido =document.getElementById("apellido")
    let eRut = document.getElementById("rut")
    let eN_telefonico= document.getElementById("n_telefonico")
    let eEdad= document.getElementById("edad")
    let eC_electronico = document.getElementById("c_electronico")
    let einf_finianciera = document.getElementById("inf_finianciera")
    let eComentarios = document.getElementById("comentarios")
    //recuperar el valor de los elementos
    let Vnombre = eNombre.value;
    let Vapelldio = eApellido.value;
    let VRut = eRut.value;
    let Vn_telefonico=eN_telefonico.value;
    let Vedad =eEdad.value;
    let VC_electronico = eC_electronico.value;
    let Vinf_finianciera = einf_finianciera.value;
    let vComentarios = eComentarios.value;
    //crear un objeto persona
    let usuario={Apellido: Vapelldio ,Nombre:Vnombre,c_electronico:VC_electronico,inf_finianciera:Vinf_finianciera,edad:Vedad,n_telefonico:Vn_telefonico,rut:VRut,comentarios:vComentarios}
    registrarUsuario(usuario).then(()=>{
        alert("cuenta creada con exito")
    }).catch((error)=>{
        console.log(error);
    });   
}



const b_fuente=()=>{
    let cv1 = document.getElementsByClassName("body")
    let valor_cv1=cv1.style.fontsize;
    if (valor_cv1 ==="15px"){
        cv1.style.fontsize="24px";
     }else{
        cv1.style.fontsize="10px";
    }
}

const cargarDatos = ()=>{
    obtenerUsuario().then((usuario)=>{
       
        //cargarlo en la tabla html
        let marco = ""
        usuario.forEach((p)=>{
            marco += "<tr>"
            marco += "<td>"+p.nombre+"</td>"
            marco += "<td>"+p.apellido+"</td>"
            marco += "<td>"+p.rut+"</td>"
            marco += "<td>"+p.telefonico+"</td>"
            marco += "<td>"+p.edad+"</td>"
            marco += "<td>"+p.c_electronico+"</td>"
            marco += "<td>"+p.inf_finianciera+"</td>"
            marco += "<td>"+p.comentarios+"</td>"
            estructura += "<td><button id='UPD"+p.id+"'>Actualizar</button></td>"
            estructura += "<td><button id='DEL"+p.id+"'>Eliminar</button></td>"
            estructura += "</tr>";
        })
        document.getElementById("cuerpoTabla").innerHTML = marco;

        datos.forEach((p)=>{
            let elemento = document.getElementById("UPD"+p.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDapellido").value = p.apellido;
                document.getElementById("UPDrut").value = p.rut;
                document.getElementById("UPDtelefono").value = p.telefono;
                document.getElementById("UPDcorreo").value = p.mail;
                document.getElementById("UPD").value = p.edad;
                document.getElementById("btnActualizar").value = p.id;
            });
            let btnEliminar = document.getElementById("DEL"+p.id);
            btnEliminar.addEventListener("click",()=>{
                if (confirm("Desea elminar a a:\n"+p.nombre+" "+p.apellido)){
                    console.log("Vamos a eliminar")
                    eliminarPersona(p.id).then(()=>{
                        alert ("Eliminaste con exito")
                        cargarDatos();
                    }).catch((e)=>{
                        console.log(e)
                    })
                }else(
                    consoles.log("Cancelaste la eliminacion")
                ) 
            })
        })
    })
}

const actualizar = ()=>{
    //Recupero datos del anterior "registrar"
    let eNombre = document.getElementById("UPDnombre");
    let eApelldio = document.getElementById("UPDapellido")
    let eRut=document.getElementById("UPDrut")
    let eMail = document.getElementById("UPDcorreo")
    let eTelefono = document.getElementById("UPDtelefono")
    let eDad=document.getElementById("UPDedad")
    //recupero el valor del elemento
    let vNombre = eNombre.value;
    let vApellido = eApelldio.value;
    let vRut=eRut.value;
    let vMail = eMail.value;
    let vTelefono=eTelefono.value;
    let vEdad= eDad.value;
    //crea un objeto con los datos recuperados
    let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,mail:vMail,telefono:vTelefono,edad:vEdad}
    let id = document.getElementById("btnActualizar").value;
    //Envio el objeto y el id a las promesas

    //cargar hacer el loading...
    document.getElementById("btnActualizar").disabled = "True";
    actualizarPersona(objeto,id).then(()=>{
        alert("Se actualiza con exito")
        cargarDatos();
    }).catch((e)=>{
        console.log(e)
    }).finally(()=>{
        document.getElementById("btnActualizar").disabled = "";
    })
}