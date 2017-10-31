// Enviar mensaje al usuario
  var message = prompt('Introduce la frase a cifar');
  if(message===null && message ===isNan){
    alert ('Introduce una frase válida ');
  }

  //declarar los arreglos que usaremos
  var array = message;
  var cipherArray=[];
  var decipherArray=[];

  //crear función de cifrado
  var cipher = function (message){
  //creamos el for para recorrer el arreglo en él aplicaremos la fórmula
    for(i = 0;i <array.length;i ++){
      /*en newArray iremos aumentando los valores que recorramos con la fórmula de cifrado al array original aplicaremos la formula de cifrado césar, para esto deberemos convertir los caracteres en ascii y cuando se aplique la fórmula se debe devolver a caracter.*/
      cipherArray.push(String.fromCharCode((array[i].charCodeAt()-65+33)%26+65));/*se debe usar String.fromCharCode para devolver a caracter*/
         //declaramos la variable para imprimir el mensaje en pantalla
         var outMessage=cipherArray.join();
       }
       return alert('Tu frase cifrada es: '+outMessage);
     }
    //Llamamos a nuestra función
     cipher (message);

  var decipher=function(message){

    //(x - n) % 26

    for(j=0;j<array.length;j++){
      decipherArray.push(String.fromCharCode((array[j].charCodeAt-33)%26));
      var impMessage=decipherArray;
    }
    return alert('Tu frase descifrada es: '+impMessage);
  }
  decipher(message);
