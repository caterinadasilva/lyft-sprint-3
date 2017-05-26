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

// Código de Ricardo Silva

function game() {
  class Robot {
    constructor (position_x, position_y, board_size_x, board_size_y) {
      this.position_x = position_x;
      this.position_y = position_y;
      this.board_size_x = board_size_x;
      this.board_size_y = board_size_y
      this.bread_crumb = [];
      this.saveBreadCrumb();
    }
    moveLeft() {
      if (this.position_x > 0) {
        this.position_x -= 1;
        this.saveBreadCrumb();
      }
    }
    moveRight() {
      if (this.position_x < this.board_size_x - 1) {
        this.position_x += 1;
        this.saveBreadCrumb();
      }
    } 
    moveUp() {
      if (this.position_y > 0) {
        this.position_y -= 1;
        this.saveBreadCrumb();
      }
    }
    moveDown() {
      if (this.position_y < this.board_size_y - 1) {
        this.position_y += 1;
        this.saveBreadCrumb();
      }
    }
    saveBreadCrumb() {
      this.bread_crumb.push([this.position_x, this.position_y]);
    }
    render() {
      let line = document.getElementsByClassName('line')[this.position_y];
      let div = line.getElementsByClassName('cell')[this.position_x];
      div.className += ' robot';
    }
    renderBreadCrumb() {
      for (let i = 0; i < this.bread_crumb.length; i++) {
          let position = this.bread_crumb[i];
          let line = document.getElementsByClassName('line')[position[1]];
          let div = line.getElementsByClassName('cell')[position[0]];
          div.className += ' active';
      }
    }
    debugPosition() {
      console.log(this.position_x, this.position_y);
    }
  }
  class Board {
    constructor(size_x, size_y) {
      this.model = [];
      // init board
      for (var y = 0; y < size_y; y++) {
          let line = []
          for (var x = 0; x < size_x; x++) {
            line.push(0);
        }
        this.model.push(line);
      }
    }
    render() {
      let html_builder = [];
      let dom_element = document.getElementById('map');
      for (let y = 0; y < this.model.length; y++) {
          let line = this.model[y];
          html_builder.push("<div class='clearfix line'>");
          for (let x = 0; x < line.length; x++) {
            html_builder.push("<div class='cell'></div>");
        }
        html_builder.push("</div>");
      }
      dom_element.innerHTML = html_builder.join('');
    }
  }
  class Game {
    constructor(position_x, position_y, board_size_x, board_size_y) {
      this.board = new Board(board_size_x, board_size_y);
      this.robot = new Robot(position_x, position_y, board_size_x, board_size_y);
      this.initControllers();
    }
    render() {
      this.board.render();
      this.robot.render();
      this.robot.renderBreadCrumb();
    }
    initControllers() {
      let map = document.getElementById("map");
      window.onkeydown = (e) => {
        switch (e.code) {
          case "ArrowDown":
              this.robot.moveDown();
            break;
          case "ArrowUp":
              this.robot.moveUp();
            break;
          case "ArrowLeft":
              this.robot.moveLeft();
            break;
          case "ArrowRight":
              this.robot.moveRight();
               break;
          default:
              return true;
        }
        this.render();
        return false;
      }
    }
  }
  document.getElementById("startBtn").addEventListener("click", function(){
    event.preventDefault();
    var xCoordinate = parseInt(document.getElementById('xCoordinate').value);
    var yCoordinate = parseInt(document.getElementById('yCoordinate').value);
    console.log('X Coordinate: ' + xCoordinate);
    console.log('Y Coordinate: ' + yCoordinate);
    if (document.getElementById('xCoordinate').value == "" || document.getElementById('xCoordinate').value > 9 ) {
      alert('Please, insert a number between 0 and 9 in the X Coordinate.');
      console.log('X Coordinate invalid');
    } else if (document.getElementById('yCoordinate').value == "" || document.getElementById('yCoordinate').value > 5 ) {
        alert('Please, insert a number between 0 and 5 in the Y Coordinate.');
        console.log('Y Coordinate Invalid');
    } else {
      document.getElementById("game").innerHTML = "";
      document.getElementById("game").innerHTML = '<div id="map"></div>';
      let g = new Game(xCoordinate, yCoordinate, 10, 6);
      g.render();
    }
  });
}

/*
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
  var xCoordinate = document.getElementById('xCoordinate').value;
  var yCoordinate = document.getElementById('yCoordinate').value;
  //Creo el auto
  var auto = '<div class="recorrido"><img src="assets/img/car.png" alt="Lyft Car"></div>';
  var recorrido = '<div class="recorrido"></div>';
  //Variables temporales
  var fila, casilla;

  document.getElementById("startBtn").addEventListener("click", function(){
    event.preventDefault();
    var xCoordinate = document.getElementById('xCoordinate').value;
    var yCoordinate = document.getElementById('yCoordinate').value;
    console.log('X Coordinate: ' + xCoordinate);
    console.log('Y Coordinate: ' + yCoordinate);
    if (document.getElementById('xCoordinate').value == "" || document.getElementById('xCoordinate').value > 9 ) {
      alert('Please, insert a number between 0 and 9 in the X Coordinate.');
    } else if (document.getElementById('yCoordinate').value == "" || document.getElementById('yCoordinate').value > 5 ) {
        alert('Please, insert a number between 0 and 5 in the Y Coordinate.');
    } else {
      //Ingreso el auto en la posicion ingresada en los input
      tablero[yCoordinate][xCoordinate] = auto;
      crearRecorrido();
      }
    });
  //Funcionalidad de juego
  function crearRecorrido() {
    //Vacío el div con los input
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
      var teclas = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
    };
    document.addEventListener("keydown", function keyPath(evento) {
    switch(evento.keyCode) {
      case teclas.UP:
        tablero[yCoordinate][xCoordinate] = recorrido;
        yCoordinate -= yCoordinate;
        tablero[yCoordinate][xCoordinate] = auto;
        crearRecorrido();
      break;
      case teclas.DOWN:
        tablero[yCoordinate][xCoordinate] = recorrido;
        yCoordinate += yCoordinate;
        tablero[yCoordinate][xCoordinate] = auto;
        crearRecorrido();
      break;
      case teclas.LEFT:
        tablero[yCoordinate][xCoordinate] = recorrido;
        xCoordinate -= xCoordinate;
        tablero[yCoordinate][xCoordinate] = auto;
        crearRecorrido();
      break;
      case teclas.RIGHT:
        tablero[yCoordinate][xCoordinate] = recorrido;
        xCoordinate += xCoordinate;
        tablero[yCoordinate][xCoordinate] = auto;
        crearRecorrido();
      break;
    }
  });
  }
}*/