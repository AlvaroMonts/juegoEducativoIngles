var cartas = new Array( 
  {nombre: '1', seleccion: false, val:'<img style=\"max-width: 100%; max-height:130px\" src=\"img/objetos/boligrafo.png\" alt=\"boligrafo\"></img>'}, {nombre: '2', seleccion: false, val:'<img style=\"max-width: 100%; max-height:130px\" src=\"img/objetos/libro.png\" alt=\"libro\"></img>'}, 
  {nombre: '3', seleccion: false, val:'<img style=\"max-width: 100%; max-height:130px\" src=\"img/objetos/goma.png\" alt=\"goma\"></img>'}, {nombre: '4', seleccion: false, val:'<img style=\"max-width: 100%; max-height:130px\" src=\"img/objetos/regla.png\" alt=\"regla\"></img>'}, 
  {nombre: '5', seleccion: false, val:'<img style=\"max-width: 100%; max-height:130px\" src=\"img/objetos/papel.png\" alt=\"papel\"></img>'}, {nombre: '6', seleccion: false, val:'<img style=\"max-width: 100%; max-height:130px\" src=\"img/objetos/carpeta.png\" alt=\"carpeta\"></img>'}, 
  {nombre: '7', seleccion: false, val:'<img style=\"max-width: 100%; max-height:130px\" src=\"img/objetos/lapiz.png\" alt=\"lapiz\"></img>'}, {nombre: '8', seleccion: false, val:'<img style=\"max-width: 100%; max-height:130px\" src=\"img/objetos/pegamento.png\" alt=\"pegamento\"></img>'}, 
  {nombre: '1', seleccion: false, val:'Pen'}, {nombre: '2', seleccion: false, val:'Book'}, 
  {nombre: '3', seleccion: false, val:'Rubber'}, {nombre: '4', seleccion: false, val:'Rule'}, 
  {nombre: '5', seleccion: false, val:'Paper'}, {nombre: '6', seleccion: false, val:'Folder'}, 
  {nombre: '7', seleccion: false, val:'Pencil'}, {nombre: '8', seleccion: false, val:'Glue'} );
        
var intentos = 0;
var jugada1 = "";
var jugada2 = "";
var identificadorJ1 = "";
var identificadorJ2 = "";

function iniciarJuego () {  
  var dato = document.getElementById("juego");
  dato.style.opacity = 1;

  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 16 ; i++ ) {
    var carta = cartas[i].val;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
  }
};

function resetearJuego () {
  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 16 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
    colorCambio( i, 'black', '?');
  } 
}

function girarCarta () {
  var evento = window.event;
  identificadorJ2 = evento.target.id;
	jugada2 = cartas[parseInt(identificadorJ2)].nombre;
  if ( jugada1 !== "" ) {

    if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {
      
      cartas[parseInt(identificadorJ1)].seleccion = true;
      cartas[parseInt(identificadorJ2)].seleccion = true;
	var cartaClickada = cartas[parseInt(identificadorJ2)].val;
      colorCambio(identificadorJ2, "blue", cartaClickada);
      vaciar();
      comprobar();
    }else if(identificadorJ1 !== identificadorJ2){
      var self = this;
      setTimeout(function(){
        colorCambio(self.identificadorJ1, "black", "?")
        colorCambio(self.identificadorJ2, "black", "?")
        vaciar()
      },200); 
var cartaClickada = cartas[parseInt(identificadorJ2)].val;
      colorCambio(identificadorJ2, "blue", cartaClickada);
    }
  } else if(jugada2 !== "valor") {
var cartaClickada = cartas[parseInt(identificadorJ2)].val;
    colorCambio(identificadorJ2, "blue", cartaClickada);

    jugada1 = jugada2;
    identificadorJ1 = identificadorJ2;
  }
};

function vaciar ()  {
  jugada1 = ""; 
  jugada2 = ""; 

  identificadorJ1 = "";
  identificadorJ2 = "";
}

function colorCambio (posicion, color, contenido) {
  document.getElementById(posicion.toString()).style.backgroundColor = color;
  document.getElementById(posicion.toString()).innerHTML = contenido;
}   

function comprobar () {
  var aciertos = 0;
  for( var i = 0 ; i < 16 ; i++ ){
    if ( cartas[i].seleccion == true ) {
      aciertos ++;
    }

  }

  if(aciertos == 16){
		document.getElementById("juego").innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><img src=\"img/winner.png\" alt=\"winner\"></img>";
		document.getElementById("botones").innerHTML = "";
	}
}

function resetearJuego () {
            cartas.sort(function() { return Math.random() - 0.5});
            for ( var i = 0; i < 16 ; i++ ) {
                var carta = cartas[i].val;	
                var dato = document.getElementById( i.toString() );
                dato.dataset.valor = carta;
                colorCambio(i, 'black', '?');
            }
        };