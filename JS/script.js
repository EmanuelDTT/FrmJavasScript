console.log("Conexión exitosa");

//Bloque de import Funciones Externas


//Bloque de variables y constantes

const formulario=document.querySelector('.formulario');
const btnMenu = document.querySelector('#btn-menu');
const respuesta =document.querySelector('#respuesta');
const res = document.querySelector("#resp");

const contactos=[];
let encuestados=[];
let poblacion;

let contEdad=0;
var contSi=0;
let contNo=0;
let contSexoM=0,contSexoF=0;
let contCasado=0, contSoltero=0,contDivorciado=0;
let cantPlaya=0,cantMal=0,cantQuilla=0,cantGala=0;
let contCursoS=0,contCursoSE=0, contCursoOc=0, contCursoNo=0, contCursoDe=0, contCursoUn=0,  cantidadEncuest=0;


//bloque de funciones

 const validarFormulario = (e) => {

    e.preventDefault();

    const nombre= document.querySelector('#nombre').value;
    const apellido=  document.querySelector('#apellido').value;
    const edad= document.querySelector('#Edad').value;
    const curs= document.querySelector('#curs').value;
    const sexo=document.querySelector('#sex').value;
    const estado= document.querySelector('#esta').value;
    const ubicacion=document.querySelector('#lugar').value;

    if([nombre,apellido,edad,curs,sexo,estado,poblacion,ubicacion].includes("")){        

      mostrarAlerta("Todos los campos son obligatorios", true);
      return;
    
    }
      
    

   //paso la validación
      mostrarAlerta("guardado de manera exitosa");

    //objeto literal
      const encuesta ={
       
         nombre,
         apellido,
         edad,
         curs,
         sexo,
         estado,
         poblacion,
         ubicacion
       }
       
       formulario.reset();
       encuestados.push(encuesta);
      
       console.table (encuestados);
     
       
       estadistica();
 }; 

 document.getElementById('Si').onclick =()=>{

   poblacion=0;
 }
 document.getElementById('No').onclick =()=>{

   poblacion=1;
 }



 const mostrarAlerta = (mensaje,error=null) =>{

   const parrafo=document.createElement("p");
   parrafo.innerHTML=mensaje;
   const alerta=document.querySelector('#alerta');
   
   if(error) {

      parrafo.classList.add('error');
      
   }else{

      parrafo.classList.add('correcto')
   }

   alerta.appendChild(parrafo);
   setTimeout(()=>{
      parrafo.remove();
   },500);
};

const mostrarResult=()=>{


};

const estadistica = () =>{
 
   //declaracion de los contadores 
    contEdad=0;
    contSi=0;
    contNo=0;
    contSexoM=0,contSexoF=0;
    contCasado=0, contSoltero=0,contDivorciado=0;
    cantPlaya=0,cantMal=0,cantQuilla=0,cantGala=0;
    contCursoS=0,contCursoSE=0, contCursoOc=0, contCursoNo=0, contCursoDe=0, contCursoUn=0,  cantidadEncuest=0;
   
     for (let i=0; i<encuestados.length; i++){   
      const encuestado=encuestados[i];

      //el if para saber la cantidad de personas mayor de edad//
         if(encuestado.edad>=18){
            contEdad++;
         }

         // para saber la cantidad de personas por curso//

         if (encuestado.curs==6) {
            contCursoS++;
         }
         if (encuestado.curs==7) {
            contCursoSE++;
         }

         if (encuestado.curs==8) {
            contCursoOc++;
         }
         if (encuestado.curs==9) {
            contCursoNo++;
         }
         if (encuestado.curs==10) {
            contCursoDe++;
         }
         if (encuestado.curs==11) {
            contCursoUn++;
         }

         //Para sacar la cantidad de persona por sexo
         if (encuestado.sexo==0) {
            contSexoM++;
         }
         if (encuestado.sexo==1) {
            contSexoF++;
         }
         //Personas por zona vulnerable

         if (encuestado.poblacion==0) {
            contSi++;
         }
         if (encuestado.poblacion==1) {
            contNo++;
         }

         //Personas por Ubicacion
         if (encuestado.ubicacion==01) {
            cantPlaya++;
         }
         if (encuestado.ubicacion==02) {
            cantMal++;
         }
         if (encuestado.ubicacion==03) {
            cantQuilla++;
         }
         if (encuestado.ubicacion==04) {
            cantGala++;
         }

         //POR ESTADO CIVIL
          
         if (encuestado.estado==1) {
            contCasado++;
         }
         if (encuestado.estado==2) {
            contSoltero++;
         }
         if (encuestado.estado==3) {
            contDivorciado++;
         }

         cantidadEncuest++;

      
   
   }
   console.log("la cantidad de personas mayores de edad son: ", contEdad);
   console.log("la cantidad de personas del curso 6°  son: ", contCursoS);
   console.log("la cantidad de personas del curso 7°  son: ", contCursoSE);
   console.log("la cantidad de personas del curso 8°  son: ", contCursoOc);
   console.log("la cantidad de personas del curso 9°  son: ", contCursoNo);
   console.log("la cantidad de personas del curso 10°  son: ", contCursoDe);
   console.log("la cantidad de personas del curso 11°  son: ", contCursoUn);
   console.log("la cantidad de personas masculinas son: ", contSexoM);
   console.log("la cantidad de personas femeninas son: ", contSexoF);
   console.log("la cantidad de personas que son de poblacion vulnerable: ", contSi);
   console.log("la cantidad de personas que no son de poblacion vulnerable: ", contNo);
   console.log("la cantidad de personas de la playa son: ", cantPlaya);
   console.log("la cantidad de personas de Malambo son: ", cantPlaya);


   

  
         
};

const Mostrar=() => {

   document.getElementById("sideNavigation").style.width = "250px";
   document.getElementById("main").style.marginRight = "250px";
   resultado();
  
  

};

const cerrar =()=>{
   document.getElementById("sideNavigation").style.width = "0";
   document.getElementById("main").style.marginRight = "0";
   res.innerHTML=(``);
};

const resultado=()=>{

   res.innerHTML+=(` 
   <h3>Encuesta</h3>
   Personas encuestadas= ${cantidadEncuest}
   <br>
   Mayores de edad = ${contEdad} 
   
   <h2>Personas por curso</h2> 
   <br>
   6°= ${contCursoS}
   <br>
   7°= ${contCursoSE}
   <br>
   8°=${contCursoOc}
   <br>
   9°=${contCursoNo}
   <br>
   10°=${contCursoDe}
   <br>
   11°=${contCursoUn}
   <h4>Personas por Sexo</h4>
   <br>
   Masculino= ${contSexoM}
   <br>
   Femenino= ${contSexoF}
   <br>
   <h2>Estado civil</h2>
   <br>
   Soltero= ${contSoltero}
   <br>
   Casado= ${contCasado}
   <br>
   Divorciado= ${contDivorciado}
   <br>
   <h5>Poblacion vulnerable</h5>
   <br>
   Son vulnerable= ${contSi}
   <br>
   No son vulnerable= ${contNo}
   <h6>Personas por ubicacion</h6>

   La playa= ${cantPlaya}
   <br>
   Malambo= ${cantMal}
   <br>
   Barranquilla= ${cantQuilla}
   <br>
   Galapa= ${cantGala}
   `);


};




// Bloque del principal
formulario.addEventListener("submit", validarFormulario);
btnMenu.addEventListener("click", Mostrar);

