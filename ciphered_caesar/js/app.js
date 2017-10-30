//alert("Hello! I am an alert box!!");
// Enviar mensaje al usuario
var message = prompt('Introduce la frase a cifar');
if(message===null && message ===isNan()){
  return 'Introduce una frase válida '
}

//crear función de cifrado
var cipher = function (message){
  //declarar los arreglos que usaremos
var array = message;
var newArray[];
//creamos el for para recorrer el arreglo en él aplicaremos la fórmula
  for(i = 0;i <array.length;i ++){
    //en newArray iremos aumentando los valores que recorramos con la fórmula de cifrado
    newArray.push(String.fromCharCode(array-33)%26));
  }
}
