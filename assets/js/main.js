function validateForm() {
  document.getElementById("driverBtn").addEventListener("click", function(){
  console.log('Driver number: ' + document.getElementById('driverNumber').value);
    if (document.getElementById('driverNumber').value != "") {
      alert('Great! We will send you a message to your phone with the instructions.');
    } else {
      alert('Please, insert a valid phone number.');
    }
  });
  event.preventDefault();
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

  //Obtengo el div en donde se dibujará el tablero
  var divTablero = document.getElementById("game");
  //Obtengo las coordenadas
  /*var xCoordinate = parseInt(document.getElementById('xCoordinate'));
  var yCoordinate = parseInt(document.getElementById('yCoordinate'));*/
  //Variables temporales
  var fila, casilla;

  document.getElementById("startBtn").addEventListener("click", function(){
    event.preventDefault();
    var xCoordinate = document.getElementById('xCoordinate').value;
    var yCoordinate = document.getElementById('yCoordinate').value;
    console.log('X Coordinate: ' + xCoordinate);
    console.log('Y Coordinate: ' + yCoordinate);
    if (document.getElementById('xCoordinate').value == "") {
      alert('Please, insert a number between 0 and 9 in the X Coordinate.')
    } else if (document.getElementById('yCoordinate').value == "") {
        alert('Please, insert a number between 0 and 5 in the Y Coordinate.')
    } else {
      document.getElementById("game").innerHTML = "";
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
      //Ingreso el auto en la posicion ingresada en los input
      tablero[document.getElementById('xCoordinate').value][document.getElementById('yCoordinate').value] = "A";
      }
    });
}