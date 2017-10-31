//se envia mensaje al usuario para solicitar el número de tarjeta
var card = prompt('Introduce tu número de tarjeta');

var array=[card];
var newCard=[];//se almacenaran lo nuevos valores aqui

var isValidCard = function (card){
  /*se deben convertir a numeros los elemntos introducidos por el usuario e invertirlos*/
  for(i = 0;i<array.length; i ++){
    newCard.push(parseInt(array));
    array.reverse();
  }
}

//algoritmo de luhn
  for (var j=0; j < newCard.length; j++){
    //Primero multiplicaremos los valores pares
    if(j%2 !==0){
      var increase=newCard[j]*2;
    }
    if (increase>=9){
      increase=()
    }
  }
