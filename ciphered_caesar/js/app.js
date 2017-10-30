
// Enviar mensaje al usuario
var message = prompt('Introduce la frase a cifar');
if(message===null && message ===isNan()){
  alert ('Introduce una frase válida ');
}

//crear función de cifrado
var cipher = function (message){
  //declarar los arreglos que usaremos
var array = message;
var newArray=[];
//creamos el for para recorrer el arreglo en él aplicaremos la fórmula
  for(i = 0;i <array.length;i ++){
    /*en newArray iremos aumentando los valores que recorramos con la fórmula de cifrado;
    al array original aplicaremos la formula de cifrado césar, para esto deberemos convertir los caracteres en ascii
    y cuando se aplique la fórmula se debe devolver a caracter.
Entonces, si quisieras desplazar la "A" tres espacios, deberías hacer lo siguiente:
Convertir “A” en un ordinal (65).
Sumar 3 a 65, para obtener 68.
Reconvertir el ordinal 68 a la letra correspondiente (“D”).
(x-65+n)%26+65*/
    newArray.push((charCodeAt.array[i]-65+33)%26+65);/*se debe usar String.fromCharCode para devolver a caracter*/
       //declaramos la variable para imprimir el mensaje en pantalla
       var outMessage=newArray;
     }
     return outMessage;
   }
  //Llamamos a nuestra función
   cipher(message);
