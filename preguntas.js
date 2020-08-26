var respuesta = prompt("Ingresa un numero del 1 al 5?");

switch (respuesta) {
  case '1':
    pregunta1();

    break

  case '2':
    pregunta2();
  
    break
  
  case '3':
    pregunta3();

    break

  case '4':
    pregunta4();
      
    break

  case '5':
    pregunta5();
    
    break
}


function pregunta1() {
  do {
    let num = prompt("Ingrese un numero del 1 al 100");
    if (num < 0 || num > 100)
      check = true;
    else {
      for(let i = 0; i <= num; i++) {
        console.log(i)
      }
      check = false;    
    }
  } 
  while (check) 
}

function pregunta2() {
  do {
    var color = prompt("De que color es el caballo blanco de Napoleon?");
  }
  while (color !="blanco") 
} 

function pregunta3() {
  var Matematicas = prompt("Registra tu promedio de Matematicas");
  var Fisica = prompt("Registra tu promedio de Fisica");
  var Ciencias = prompt("Registra tu promedio de Ciencias");
  
  var f = (parseFloat(Matematicas)+parseFloat(Fisica)+parseFloat(Ciencias))/3;
 
var resultado = f;
var multiplicador = 100;
var p = Math.round(resultado * multiplicador) / multiplicador;

  alert("Su promedio es: "+p)
} 

function pregunta4() {
  var Fruta1 = prompt("Ingresa una fruta");
  if (Fruta1 == "manzana")
    console.log(" ")

  else
    console.log(Fruta1)

  var Fruta2 = prompt("Ingresa otra fruta");
  if (Fruta2 == "manzana")
    console.log(" ")

  else
  console.log(Fruta2)

  var Fruta3 = prompt("Ingresa una última fruta");
  if (Fruta3 == "manzana")
    console.log(" ")

  else
  console.log(Fruta3)
} 

function pregunta5() {
  var nombre = prompt("Registra tu nombre aqui").toLowerCase();
  letras = nombre.split("");
  var vocales = 0;
  var consonantes = 0;
  for (var i = 0; i < letras.length; i++) {
      console.log(letras[i]);
      switch (letras[i]) {
        case 'a':
        case 'á':
            vocales++;
            break;    
        case 'e':
        case 'é':
            vocales++;
            break;
        case 'i':
        case 'í':
            vocales++;
            break;  
        case 'o':
        case 'ó':
            vocales++;
            break;   
        case 'u':
        case 'ú':
            vocales++;
            break;
        default:
            consonantes++
      } 
  }
  console.log('vocales totales: ' + vocales);
  console.log('consonantes totales: ' + consonantes);
  alert('vocales totales: ' + vocales + '\nconsonantes totales: ' + consonantes);
}