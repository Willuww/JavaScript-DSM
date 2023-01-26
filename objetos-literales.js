// Objetos literales .. esto se parece a los json
const usuario = {
    nombre: "Willuww",
    apellido: "Walker",
    edad: 25,
    direccion: {
        pais:'Mexico',
        ciudad: 'Macua',
        calle: 'principal 45'
    },
    //arreglo
    amigos: ['Pepe','Toño','Julio'],
    active: true,
    enviarMail: function(){
        return "Enviando E-mail"
    },
    //otra forma es sin el function
    enviarMail2(){
        return 'Enviando Email-2'
    }
}

console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.direccion);
console.log(usuario.direccion.ciudad);
//ver objetos dentro de
console.log(usuario.amigos);
console.log(usuario.amigos[0]);
//manda la etructura
console.log(usuario.enviarMail);
//manda lo que esté dentro de la funcion
console.log(usuario.enviarMail());
console.log(usuario.enviarMail2);
console.log(usuario.enviarMail2());

console.log('Nombre del Usuario: ' + usuario.nombre);

//backticks
const salida =`Nombre del Usuario ${usuario.nombre}` ;

console.log(salida);

const salida2 = 'Nombre de Usuario: ' + usuario.nombre +'\n' + "Apellido :" + usuario.apellido +
'\n' + "Edad: " + usuario.edad + 
'\n' +"Direccion : " + 
"\n" + "Pais: " + usuario.direccion.pais +'\n'+ "Ciudad : " + usuario.direccion.ciudad +
"\n" + "Calle : " + usuario.direccion.calle +'\n'+ "Amigos:" + 
"\n" + "Amigo 1 " + usuario.amigos[0] + '\n'+ "Amigo 2 " + usuario.amigos[1]
+ "\n " + "Amigo 3 " + usuario.amigos[2]
+ '\n' + "Active: " + usuario.active 
+ '\n' +"Funcion 1 " + usuario.enviarMail()+
'\n' + "Funcion 2 " + usuario.enviarMail2();

console.log(salida2);


//usando bacticks

const salida3 =
`
Nombre de Usuario: ${usuario.nombre}
Apellido: ${usuario.apellido}
Edad: ${usuario.edad}
Direccion - Pais: ${usuario.direccion.pais}
Direccion - Ciudad: ${usuario.direccion.ciudad}
Direccion - Calle: ${usuario.direccion.calle}
Amigos - Amigo 1: ${usuario.amigos[0]}
Amigos - Amigo 2: ${usuario.amigos[1]}
Amigos - Amigo 3: ${usuario.amigos[2]}
Activo: ${usuario.active}
Funcion 1: ${usuario.enviarMail()}
Funcion 2: ${usuario.enviarMail2()}
`



console.log(salida3);