//promesa ; siempre tiene dos parametros resolve/ reject
const usuarioAutenticado = new Promise(
    (resolve,reject) => {
        const auth = false;
        console.log("Esperado respuesta");
        setTimeout(() =>{
            
                    if(auth){
                        resolve("Usuario Autenticado");
                    }else{
                        reject("No se pudo iniciar");
                    }
        },5000);
    }
);

//console.log(usuarioAutenticado);


usuarioAutenticado
.then((resrultado ) => console.log(resrultado))
.catch((error) => console.log(error))