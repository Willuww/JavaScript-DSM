function hello3(name){
    return 'Hola' + name;
}
console.log (hello3('Luis'));
console.log(hello3());

function agregar(x,y){
    return x+y;
}
console.log(agregar());
console.log(agregar(5,4));
//Parametros por default

function agregar2(x,y){
    // == dos igual son "igual que"
    // === tres igual son "exactamente igual"
    if(y === undefined){
        y=0;
    }else if(x === undefined){
        x=0;
    }else if (x === undefined && y === undefined)
    {
        return 0;
    }
 
    return x+y;
}

function agregar3(x, y =1, z=2)
{
    return x +y *z;
}
console.log(agregar3(5));

//funciones de flecha
const suma = () => 3 + 4;
/* Es lo mimso que esto:
functions sumar() { return 3+4 }*/ 

function sumar() { return 3+4 }

console.log(sumar());
console.log(sumar());

function f1(x){
    return "Hola soy " + x;
}
const f1a = x => "Hola soy " + x;

console.log(f1("Joel"));
console.log(f1a("Willuww"));

function factorial(n){
    if(n == 0 || n==1){
        return 1;
    }else {
        return n*factorial (n-1);
    }
}
/*
const fact = n => {
    if(n ==0 || n==1){
        return 1;
    }else{
        return n*fact(n-1);
    }
}*/

function factorial2 (n){
    i =1;
    fact = 1;
    while(i<n){
        fact*=i;
        i++;
    }
    return fact;
}

const f= n => {
    i=1;
    fact =1;
    while(i<n){
        fact*=i;
        i++;}
        return fact;
}

//variacion de if else
const valor = numero => (numero%2 ==0)?'Numero Par':'Numero Impar'

console.log(factorial(3));
console.log(factorial2(3));
/*console.log(fact(3));*/
console.log(f(3));
console.log(valor(2));