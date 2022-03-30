var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext('2d');
pincel.fillStyle = "white";
pincel.fillRect(0,0,800,600); 


//horca
function mastil(palabra) {

  pincel.fillStyle = "black";
  pincel.lineWidth = 7;
  
  pincel.moveTo(40, 660);
  pincel.lineTo(280, 660);
  pincel.lineTo(160, 630);
  pincel.closePath();
  pincel.fill();
  
  pincel.beginPath();
  pincel.moveTo(160, 630);
  pincel.lineTo(160, 20);
  pincel.lineTo(540, 20);
  pincel.lineTo(540, 70);
  pincel.stroke();

  guiones(palabra);

}


var inicio = 0;
var ancho = 40;
var xcentro = 500;
var ybase = 525;
var ybaseguion = 570;


//Guiones 
function guiones(palabra) {
    var factor = Math.floor(palabra.length / 2);
    inicio = xcentro - (factor * ancho );
    var x = inicio;

     for (let i = 0; i < palabra.length; i++) {
         pincel.fillStyle = "darkblue";
         //posicion inicial en x , y, ancho en x ,ancho en y
         pincel.fillRect(x, ybaseguion, ancho, 5);
         x += ancho + 5; 
     }
}

//letra correcta
function letrasCorrectas(letra) {
    var p = ancho + 5;
    var regexp = RegExp(letra, 'g');
    var repeticiones = palabrAleatoria.match(regexp).length;
    
    
    var i=0;
    var j=0;
    while (i < repeticiones) {
        if (palabrAleatoria[j] == letra) {
            palabraelegida[j] = letra;
            ++i;
            var xc = ( j * p ) + inicio;
            pincel.font="30pt Verdana";
	        pincel.fillStyle = "green";
	        pincel.fillText(letra, xc + 5, ybase + 40);
        }
        ++j;
    }
}

//letra incorecta
var x = 350;
var y = 630;
function letrasIncorrectas(letra) {
    pincel.font="30pt Tahoma";
	pincel.fillStyle = "red";
	pincel.fillText(letra, x, y);
    x += ancho;
    if (x > 780) {
        x = 350;
        y += 40;
    }
}

//dibujo persona
function ahorcado(error) {
  pincel.fillStyle = "orange";
  pincel.lineWidth = 7;
  
  //cabeza
  if (error >= 1) {
    pincel.beginPath(); 
   
    pincel.arc(540, 120, 50, 0, Math.PI * 2, true);
    pincel.stroke();
  }
  
  //cuerpo
  if (error >= 2) {
    pincel.beginPath(); 
    pincel.moveTo(540, 170); 
    pincel.lineTo(540, 370); 
    pincel.stroke();
  }

   //pie izq
  if (error >= 3) {
   pincel.lineTo(460, 470); 
   pincel.stroke();
  }

  //pie derecho
  if (error >= 4) {
    pincel.moveTo (540,370)
    pincel.lineTo(630,470); 
    pincel.stroke();
  }
   
  //brazo izq
  if (error >= 5) {
    pincel.moveTo(540, 200); 
    pincel.lineTo(440, 270); 
    pincel.stroke();
  }
   //brazo derecho
  if (error >= 6) {
   pincel.moveTo(540,200); //pecho
   pincel.lineTo(640, 270); //mano izq
   pincel.stroke();
  }
}
  

       

