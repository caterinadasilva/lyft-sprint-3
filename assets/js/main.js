function validateForm() {
  document.getElementById("driverBtn").addEventListener("click", function(){
    console.log('Driver number: ' + document.getElementById('driverNumber').value)
    if (document.getElementById('driverNumber').value != "") {
    alert('Great! We will send you a message to your phone with the instructions.')
  } else {
    alert('Please, insert a valid phone number.')
  }
});
}

function game() {
  //Defino el tablero
  var tablero = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ]

  //Ingreso el auto en la posicion 3,5
  tablero[3][5] = "A";

  //Obtengo el div en donde se dibujará el tablero
  var divTablero = document.getElementById("game");

  //Variables temporales
  var fila, casilla;


  //Recorro el arreglo para dibujar el tablero
  for(var i = 0; i<tablero.length; i++){
    fila = document.createElement("div");
    fila.classList.add("fila");
    for(var j = 0; j<tablero[i].length; j++){
      casilla = document.createElement("div");
      casilla.innerHTML = tablero[i][j];
      casilla.classList.add("casilla")
      fila.appendChild(casilla);
    }
    divTablero.appendChild(fila);
  }
}