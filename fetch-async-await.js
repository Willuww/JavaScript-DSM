const resultado= document.querySelector('#datos');

const obtenerInfo = async()=>{
    //esta es la api a consumir
    
const url='https://jsonplaceholder.typicode.com/users'
try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    mostrarData(jsonResponse);

} catch (error) {
    console.log(error);
}
}

                //esta data tambien puede ser llamado jsonResponse
const mostrarData = (data)=>{
let salida='';
for(let i=0; i< data.length; i++){
salida += `<tr> 
            <th scope="row">${data[i].id} </th>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
            <td>${data[i].website}</td>
            <td>${data[i].address.street}</td>
        </tr>`;
}
//el innerHTML mete el codigo en determinado lugar
resultado.innerHTML=salida;
}

obtenerInfo();