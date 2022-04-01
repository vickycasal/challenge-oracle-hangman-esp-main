var btnIniciar = document.querySelector("#iniciar-juego");
var btnAgregar = document.querySelector("#nueva-palabra");
var inputText = document.querySelector("#input-nueva-palabra");
var palabras = ["PERSONA", "ESPECIE", "HELADERA","HORIZNTE", "ESCALAR","PRIMAVERA","PRINCIPIO","METAMORFOSIS","PEINADO","LIENZO","ESQUEMA"];
var letrasIngresadas =[];
var palabraelegida;
var error = 0;

var palabrAleatoria;

function iniciarJuego() {
    error = 0;
     letrasIngresadas =[];
     palabrAleatoria = sorteoDePalabra();

      window.addEventListener( "keydown", capturaLetra);
     mastil(palabrAleatoria);
 
function sorteoDePalabra() {
    var sorteo = Math.round(  Math.random() * palabras.length);
    sorteo = palabras.length == sorteo ? (sorteo - 1):sorteo;
    palabrAleatoria = palabras[sorteo];
    palabraelegida = new Array(palabrAleatoria.length);
        console.log(palabrAleatoria)
    return palabrAleatoria;

}

function validarLetra(letraTipeada, codigo) {
    letraTipeada = letraTipeada.toUpperCase();
      if (codigo > 64 && codigo < 91) {
          if (letrasIngresadas.indexOf(letraTipeada) < 0) {
                return true; 
                 }
            }                               
         return false;
}

function letrasDeLaPalabra(letraTipeada) {
    var iguales = false

    if (palabrAleatoria.indexOf(letraTipeada) >= 0) {
        iguales = true;
    }
   
    letrasIngresadas.push(letraTipeada);
   
    return iguales;
}

function capturaLetra(evento) {
    var letraTipeada = evento.key.toUpperCase();
    if (validarLetra(letraTipeada, evento.keyCode) && error < 7) {
  
      if(letrasDeLaPalabra(letraTipeada)){ 
        letrasCorrectas(letraTipeada);
        
      if (palabrAleatoria == palabraelegida.join('')) {
              error = 7;
              alert("usted adivino la palabra")
            }
        }else{
          
          letrasIncorrectas(letraTipeada);
          ahorcado(++error);
        
         }
         if (error > 5){
           alert("usted no adivino, la palabra era " + palabrAleatoria);
         }
          
    }
}

}

function agregarPalabra() {
  
    var palabra = inputText.value.toUpperCase().trim();
          if (palabra == '' || palabra == null) {
        }
    var mensajeErrores = document.querySelector("#mensaje-error");
   
    if (palabras.indexOf(palabra) >= 0 ) {
        mensajeErrores.innerHTML = "la palabra ya se encuentra agregada";
        return;
    } else {
        palabras.push(palabra);
        console.log(palabras);
    }
}
btnIniciar.onclick = iniciarJuego;
btnAgregar.onclick = agregarPalabra