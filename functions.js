var i = 0; j = 0;
/*True es para las negras y false para las blancas*/
var tokens = "", paso = 0 , turno = false, fin = false;
var texto = "", tiempo = 1000;

function iniciar() {
  var celdas = document.getElementById("Tablero");
  for(i = 0; i < 8; i++){
    celdas.rows[2].cells[i].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
    celdas.rows[7].cells[i].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  }

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";
  celdas.rows[8].cells[5].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[5].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";

  celdas.rows[8].cells[0].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[0].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[0].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[0].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";
  celdas.rows[8].cells[6].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[6].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[4].style =
    "background-image: url(./img/ReyB.png); background-size:cover;";
    celdas.rows[1].cells[4].style =
    "background-image: url(./img/ReyN.png); background-size:cover;";

  celdas.rows[8].cells[3].style =
    "background-image: url(./img/ReinaB.png); background-size:cover;";
  celdas.rows[1].cells[3].style =
    "background-image: url(./img/ReinaN.png); background-size:cover;";

  for(var i = 0; i < 8; i++){
    for(var j = 3; j < 7; j++){
      celdas.rows[j].cells[i].style = "background-image: none";
    }
  }
}

function partidas() {
  var valor = document.getElementById("Combo").value;
  var scanner = new FileReader();

  switch (valor) {
    case "0":
      document.getElementById("texto").value = "";
      break;
    case "1":
      //partida1
      var archivo = "./files/partida1.txt";
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // La solicitud se completó y se recibió una respuesta válida
          document.getElementById("texto").value = this.responseText;
          removernumero();
          getTokens();
          document.getElementById("turno").innerHTML = "Turno de las blancas";
          console.log(this.responseText);
          // Asignar el contenido del archivo al textarea
      }
    };
      
      xhttp.open("GET", archivo, true);
      xhttp.send();
      break;
    case "2":
      //partida2
      var archivo = "./files/partida2.txt";
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // La solicitud se completó y se recibió una respuesta válida
          document.getElementById("texto").value = this.responseText;
          removernumero();
          getTokens();
          document.getElementById("turno").innerHTML = "Turno de las blancas";
          console.log(this.responseText);
          // Asignar el contenido del archivo al textarea
      }
    };
      
      xhttp.open("GET", archivo, true);
      xhttp.send();
      break;
    case "3":
      //partida3
      var archivo = "./files/partida3.txt";
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // La solicitud se completó y se recibió una respuesta válida
          document.getElementById("texto").value = this.responseText;
          removernumero();
          getTokens();
          document.getElementById("turno").innerHTML = "Turno de las blancas";
          console.log(this.responseText);
          // Asignar el contenido del archivo al textarea
      }
    };
      
      xhttp.open("GET", archivo, true);
      xhttp.send();
      break;
    default:
      break;
  }
}

function cargarPartida() {
  var archivo = document.getElementById("cargarBoton").files[0];
  var scanner = new FileReader();
  paso = 0;
  fin = false;
  
  scanner.onload = function (e) {
    document.getElementById("texto").value = e.target.result;
    removernumero();
    getTokens();
  };
  scanner.readAsText(archivo);

  document.getElementById("turno").innerHTML = "Turno de las blancas";
  iniciar();
}

function removernumero() {
  var texto = document.getElementById("texto").value;
  texto = texto.replace(/\d+\.\s*/g, ''); 
  document.getElementById("texto").value = texto;
}

function getTokens() {
  var texto = document.getElementById("texto").value;
  var tokens = texto.split(/\s+/);
}

function pasoApaso() {
  var movimientos = document.getElementById("texto").value.trim().split(/\s+/);
  var tabla = document.getElementById("Tablero");
  var viable = true;
  if(movimientos[0] == ""){
    viable = false;
  }

  if(viable){
    if (paso < movimientos.length) {
      var movimiento = movimientos[paso];
      var pieza = obtenerTipoPieza(movimiento);

      if (turno == false) {
        turno = true;
      } else {
        turno = false;
      }

      var enrq = 1;
      if(movimiento.includes("+")){
        if(movimiento.includes("O-O-O")){
          console.log("enroque largo con jaque"); //enroque largo.................................................
          enrq = 3;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("O-O")){
          console.log("enroque corto con jaque"); //enroque corto.................................................
          enrq = 2;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("=")){
          console.log("jaque con promocion");
          enrq = 1;
          var casilla = movimiento.substring(movimiento.length - 5);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else{
          console.log("jaque"); //jaque.................................................
          var casilla = movimiento.substring(movimiento.length - 3);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
      }
      else if(movimiento.includes("#")){
        if(movimiento.includes("O-O-O")){
          console.log("enroque largo con jaque"); //enroque largo.................................................
          enrq = 3;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("O-O")){
          console.log("enroque corto con jaque"); //enroque corto.................................................
          enrq = 2;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("=")){
          console.log("jaque mate con promocion");
          enrq = 1;
          var casilla = movimiento.substring(movimiento.length - 5);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else{
          console.log("jaque mate"); //jaque mate.................................................
          enrq = 1;
          var casilla = movimiento.substring(movimiento.length - 3);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
      }
      else{
        if(movimiento.includes("O-O-O")){
          console.log("enroque largo con jaque"); //enroque largo.................................................
          enrq = 3;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("O-O")){
          console.log("enroque corto con jaque"); //enroque corto.................................................
          enrq = 2;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("=")){
          console.log("promocion");
          enrq = 1;
          var casilla = movimiento.substring(movimiento.length - 4);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else{
          console.log("normal"); //normal.................................................
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
      }

      // Actualizar el mensaje de turno y movimiento
      document.getElementById("turno").innerHTML = "Movimiento " + (paso + 1) + ": " +
        " Turno de las " + (turno ? "blancas" : "negras") + ": " + movimiento + " " + pieza;
      
      paso++; // Mover al siguiente movimiento
    } else {
      alert("Fin de la partida");
      fin = true;
    }
  }
  else{
    alert("No se ha seleccionado una partida");
    fin = true;
  }
}

function pasosCompleto() {
  setTimeout(function() {
    if (!fin) {
        pasoApaso();
        pasosCompleto();
    }
  }, tiempo);
}

function completoTiempos(){
  tiempo = document.getElementById("Tiempo").value;
}


function actualizarTablero(tabla, casilla, pieza, turno, enrq, movimiento) {
  var columna = convertirLetraNumero(casilla[0].toLowerCase().toString());
  var fila = parseInt(casilla[1]);
  console.log(casilla)
  console.log(columna, fila);

  for(var i = 0; i < 8; i++){
    for(var j = 1; j < 9; j++){
      // Verificar si la celda está en una fila par o impar
      if ((i + j) % 2 === 0) {
          // Fila par
          tabla.rows[j].cells[i].style.backgroundColor = "#8B4513"; // Marrón
      } else {
          // Fila impar
          tabla.rows[j].cells[i].style.backgroundColor = "#D2B48C"; // Marrón claro
      }
    }
  }

  if (enrq == 1) {
    // Sin enroque
    tabla.rows[9 - fila].cells[columna].style.backgroundColor = "#ff0000"; // Color rojo
    tabla.rows[9 - fila].cells[columna].style.backgroundImage = "url(./img/" + pieza + turno + ".png)"; // Imagen de fondo
    tabla.rows[9 - fila].cells[columna].style.backgroundSize = "cover"; // Tamaño de la imagen de fondo

    // Borrar pieza
    borrarPieza(tabla, pieza, turno, columna, fila, movimiento);

    if (movimiento.includes("=")) {
        promo = movimiento[3]
        pieza = obtenerTipoPieza(promo);
        tabla.rows[9 - fila].cells[columna].style.backgroundColor = "#ff0000"; // Color rojo
        tabla.rows[9 - fila].cells[columna].style.backgroundImage = "url(./img/" + pieza + turno + ".png)"; // Imagen de fondo
        tabla.rows[9 - fila].cells[columna].style.backgroundSize = "cover"; // Tamaño de la imagen de fondo
    }
  } else if(enrq == 2){
    //enroque corto
    if(turno == "B"){
      //blancas
      tabla.rows[8].cells[6].style.backgroundColor = "#ff0000";
      tabla.rows[8].cells[6].style.backgroundImage = "url(./img/ReyB.png)";
      tabla.rows[8].cells[6].style.backgroundSize = "cover";
      tabla.rows[8].cells[5].style.backgroundColor = "#ff0000";
      tabla.rows[8].cells[5].style.backgroundImage = "url('./img/TorreB.png')"; 
      tabla.rows[8].cells[5].style.backgroundSize = "cover";
      tabla.rows[8].cells[4].style.backgroundImage = "none";
      tabla.rows[8].cells[7].style.backgroundImage = "none"; 
    } else if (turno == "N"){
      //negras
      tabla.rows[1].cells[6].style.backgroundColor = "#ff0000";
      tabla.rows[1].cells[6].style.backgroundImage = "url(./img/ReyN.png)";
      tabla.rows[1].cells[6].style.backgroundSize = "cover";
      tabla.rows[1].cells[5].style.backgroundColor = "#ff0000";
      tabla.rows[1].cells[5].style.backgroundImage = "url(./img/TorreN.png)"; 
      tabla.rows[1].cells[5].style.backgroundSize = "cover";
      tabla.rows[1].cells[4].style.backgroundImage = "none"; 
      tabla.rows[1].cells[7].style.backgroundImage = "none"; 
    }
  } else if(enrq == 3){
    //enroque largo
    if(turno == "B"){
      //blancas
      tabla.rows[8].cells[2].style.backgroundColor = "#ff0000";
      tabla.rows[8].cells[2].style.backgroundImage = "url(./img/ReyB.png)";
      tabla.rows[8].cells[2].style.backgroundSize = "cover";
      tabla.rows[8].cells[3].style.backgroundColor = "#ff0000";
      tabla.rows[8].cells[3].style.backgroundImage = "url('./img/TorreB.png')+"; 
      tabla.rows[8].cells[3].style.backgroundSize = "cover";
      tabla.rows[8].cells[4].style.backgroundImage = "none"; 
      tabla.rows[8].cells[0].style.backgroundImage = "none"; 
    } else if (turno == "N"){
      //negras
      tabla.rows[1].cells[2].style.backgroundColor = "#ff0000";
      tabla.rows[1].cells[2].style.backgroundImage = "url(./img/ReyN.png)";
      tabla.rows[1].cells[2].style.backgroundSize = "cover";
      tabla.rows[1].cells[3].style.backgroundColor = "#ff0000";
      tabla.rows[1].cells[3].style.backgroundImage = "url(./img/TorreN.png)"; 
      tabla.rows[1].cells[3].style.backgroundSize = "cover";
      tabla.rows[1].cells[4].style.backgroundImage = "none"; 
      tabla.rows[1].cells[0].style.backgroundImage = "none"; 
    }
  }
}



// Función para mover una pieza en el tablero
function borrarPieza(tabla, pieza, turno, columna, fila, movimiento) {
  switch(pieza){
    case "Peon":
      rmPeon(tabla, columna, fila, turno, movimiento);
      break;
    case "Caballo":
      rmCaballo(tabla, turno, columna, fila, movimiento);
      break;
    case "Alfil":
      rmAlfil(tabla, turno, columna, fila, movimiento);
      break;
    case "Rey":
      rmRey(tabla, turno, columna, fila);
      break;
    case "Reina":
      rmReina(tabla, turno, columna, fila);
      break;
    case "Torre":
      rmTorre(tabla, turno, columna, fila, movimiento);
      break;
  }
}

function rmPeon(tabla, columna, fila, turno, movimiento){
  //blancas
  if(turno == "B"){
    //sin comer
    if(!movimiento.includes("x")){
      //un espacio
      if(tabla.rows[10 - fila].cells[columna].style.backgroundImage == "url(\"./img/PeonB.png\")"){
        tabla.rows[10 - fila].cells[columna].style.background = "#ff0000";
        tabla.rows[10 - fila].cells[columna].style.backgroundImage = "none";
      }
      //dos espacios
      else if(tabla.rows[11 - fila].cells[columna].style.backgroundImage == "url(\"./img/PeonB.png\")"){;
        tabla.rows[11 - fila].cells[columna].style.background = "#ff0000";
        tabla.rows[11 - fila].cells[columna].style.backgroundImage = "none";
      }
    }
    //comiendo en diagonal
    else{
      var origen = convertirLetraNumero(movimiento[0].toLowerCase().toString());
      tabla.rows[10 - fila].cells[origen].style.background = "#ff0000";
      tabla.rows[10 - fila].cells[origen].style.backgroundImage = "none";
    }
  }
  //negras
  if(turno == "N"){
    //sin comer
    if(!movimiento.includes("x")){
      //dos espacios
      if(tabla.rows[7 - fila].cells[columna].style.backgroundImage == "url(\"./img/PeonN.png\")"){
        tabla.rows[7 - fila].cells[columna].style.background = "#ff0000";
        tabla.rows[7 - fila].cells[columna].style.backgroundImage = "none";
      }
      //un espacio
      else if(tabla.rows[8 - fila].cells[columna].style.backgroundImage == "url(\"./img/PeonN.png\")"){
        tabla.rows[8 - fila].cells[columna].style.background = "#ff0000";
        tabla.rows[8 - fila].cells[columna].style.backgroundImage = "none";
      }
    }
    //comiendo en diagonal
    else{
      var origen = convertirLetraNumero(movimiento[0].toLowerCase().toString());
      tabla.rows[8 - fila].cells[origen].style.background = "#ff0000";
      tabla.rows[8 - fila].cells[origen].style.backgroundImage = "none";
    }
  }
}

function rmCaballo(tabla, turno, columna, fila, movimiento) {
  function eliminarCaballoEnPosicion(dx, dy) {
      const x = columna + dx;
      const y = 9 - fila + dy;
      if (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
          const cell = tabla.rows[y].cells[x];
          if (cell.style.backgroundImage === `url("./img/Caballo${turno}.png")`) {
              cell.style.backgroundColor = "#ff0000";
              cell.style.backgroundImage = "none";
          }
      }
  }

  if (movimiento.includes("x")) {
      eliminarCaballoEnPosicion(1, 2); // Abajo largo derecha
      eliminarCaballoEnPosicion(-1, 2); // Abajo largo izquierda
      eliminarCaballoEnPosicion(2, 1); // Derecha largo abajo
      eliminarCaballoEnPosicion(-2, 1); // Izquierda largo abajo
      eliminarCaballoEnPosicion(1, -2); // Arriba largo derecha
      eliminarCaballoEnPosicion(-1, -2); // Arriba largo izquierda
      eliminarCaballoEnPosicion(2, -1); // Derecha largo arriba
      eliminarCaballoEnPosicion(-2, -1); // Izquierda largo arriba
  } else if (movimiento.length >= 5) {
      const origen_columna = convertirLetraNumero(movimiento[1].toLowerCase());
      const origen_fila = parseInt(movimiento[2]);
      tabla.rows[9 - origen_fila].cells[origen_columna].style.background = "#ff0000";
      tabla.rows[9 - origen_fila].cells[origen_columna].style.backgroundImage = "none";
  } else {
      eliminarCaballoEnPosicion(1, 2); // Abajo largo derecha
      eliminarCaballoEnPosicion(-1, 2); // Abajo largo izquierda
      eliminarCaballoEnPosicion(2, 1); // Derecha largo abajo
      eliminarCaballoEnPosicion(-2, 1); // Izquierda largo abajo
      eliminarCaballoEnPosicion(1, -2); // Arriba largo derecha
      eliminarCaballoEnPosicion(-1, -2); // Arriba largo izquierda
      eliminarCaballoEnPosicion(2, -1); // Derecha largo arriba
      eliminarCaballoEnPosicion(-2, -1); // Izquierda largo arriba
  }
}


function rmAlfil(tabla, turno, columna, fila, movimiento) {
  function eliminarAlfilEnDireccion(dx, dy) {
    let x = columna + dx;
    let y = 9 - fila + dy;
    while (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
        const cell = tabla.rows[y].cells[x];
        if (cell.style.backgroundImage !== "none") {
            if (cell.style.backgroundImage === `url("./img/Alfil${turno}.png")`) {
                cell.style.background = "#ff0000";
                cell.style.backgroundImage = "none";
            }
            break;
        }
        x += dx;
        y += dy;
    }
  }

  if (movimiento.includes("x")) {
      eliminarAlfilEnDireccion(1, 1); // Abajo derecha
      eliminarAlfilEnDireccion(1, -1); // Arriba derecha
      eliminarAlfilEnDireccion(-1, 1); // Abajo izquierda
      eliminarAlfilEnDireccion(-1, -1); // Arriba izquierda
  } else if (movimiento.length >= 5) {
      const origen_columna = convertirLetraNumero(movimiento[1].toLowerCase());
      const origen_fila = parseInt(movimiento[2]);
      tabla.rows[9 - origen_fila].cells[origen_columna].style.background = "#ff0000";
      tabla.rows[9 - origen_fila].cells[origen_columna].style.backgroundImage = "none";
  } else {
      eliminarAlfilEnDireccion(1, 1); // Abajo derecha
      eliminarAlfilEnDireccion(1, -1); // Arriba derecha
      eliminarAlfilEnDireccion(-1, 1); // Abajo izquierda
      eliminarAlfilEnDireccion(-1, -1); // Arriba izquierda
  }
}

function rmRey(tabla, turno, columna, fila) {
  const movimientos = [
      { dx: 0, dy: 1 }, // abajo
      { dx: 0, dy: -1 }, // arriba
      { dx: 1, dy: 0 }, // derecha
      { dx: -1, dy: 0 }, // izquierda
      { dx: 1, dy: 1 }, // abajo derecha
      { dx: -1, dy: 1 }, // abajo izquierda
      { dx: 1, dy: -1 }, // arriba derecha
      { dx: -1, dy: -1 }, // arriba izquierda
  ];

  for (const movimiento of movimientos) {
      const x = columna + movimiento.dx;
      const y = 9 - fila + movimiento.dy;

      if (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
          const cell = tabla.rows[y].cells[x];
          if (cell.style.backgroundImage === `url("./img/Rey${turno}.png")`) {
            cell.style.background = "#ff0000";
            cell.style.backgroundImage = "none";
          }
      }
  }
}

function rmReina(tabla, turno, columna, fila) {
  function eliminarReinaEnDireccion(dx, dy) {
    let x = columna + dx;
    let y = 9 - fila + dy;
    while (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
        const cell = tabla.rows[y].cells[x];
        console.log("x: " + x, ", y: " + y);
        console.log(cell.style.backgroundImage);
        if (cell.style.backgroundImage !== "none") {
            if (cell.style.backgroundImage === `url("./img/Reina${turno}.png")`) {
              cell.style.background = "#ff0000";
              cell.style.backgroundImage = "none";
            }
            break;
        }
        x += dx;
        y += dy;
    }
  }

  eliminarReinaEnDireccion(1, 0);
  eliminarReinaEnDireccion(1, 1);
  eliminarReinaEnDireccion(1, -1);
  eliminarReinaEnDireccion(0, 1);
  eliminarReinaEnDireccion(0, -1);
  eliminarReinaEnDireccion(-1, 0);
  eliminarReinaEnDireccion(-1, 1);
  eliminarReinaEnDireccion(-1, -1);
}

function rmTorre(tabla, turno, columna, fila, movimiento) {
  function eliminarTorreEnDireccion(dx, dy) {
      let x = columna + dx;
      let y = 9 - fila + dy;
      while (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
          const cell = tabla.rows[y].cells[x];
          if (cell.style.backgroundImage !== "none") {
              if (cell.style.backgroundImage === `url("./img/Torre${turno}.png")`) {
                cell.style.background = "#ff0000";
                cell.style.backgroundImage = "none";
              }
              break;
          }
          x += dx;
          y += dy;
      }
  }

  if (movimiento.includes("x")) {
      eliminarTorreEnDireccion(1, 0); // Derecha
      eliminarTorreEnDireccion(-1, 0); // Izquierda
      eliminarTorreEnDireccion(0, 1); // Abajo
      eliminarTorreEnDireccion(0, -1); // Arriba
  } else if (movimiento.length >= 5) {
      const origen_columna = convertirLetraNumero(movimiento[1].toLowerCase());
      const origen_fila = parseInt(movimiento[2]);
      tabla.rows[9 - origen_fila].cells[origen_columna].style.background = "#ff0000";
      tabla.rows[9 - origen_fila].cells[origen_columna].style.backgroundImage = "none";
  } else {
      eliminarTorreEnDireccion(1, 0); // Derecha
      eliminarTorreEnDireccion(-1, 0); // Izquierda
      eliminarTorreEnDireccion(0, 1); // Abajo
      eliminarTorreEnDireccion(0, -1); // Arriba
  }
}

function obtenerTipoPieza(movimiento) {
  if (!tieneMayusculas(movimiento[0])) {
    return "Peon";
  } else if (movimiento.startsWith("N")) {
    return "Caballo";
  } else if (movimiento.startsWith("B")) {
    return "Alfil";
  } else if (movimiento.startsWith("K")) {
    return "Rey";
  } else if (movimiento.startsWith("Q")) {
    return "Reina";
  } else if (movimiento.startsWith("R")) {
    return "Torre";
  } else {
    return "";
  }
}

function tieneMayusculas(cadena) {
  return /[A-Z]/.test(cadena);
}

function convertirLetraNumero(letra) {
  switch (letra) {
    case "a":
      return 0;
      break;

    case "b":
      return 1;
      break;

    case "c":
      return 2;
      break;

    case "d":
      return 3;
      break;

    case "e":
      return 4;
      break;

    case "f":
      return 5;
      break;

    case "g":
      return 6;
      break;

    case "h":
      return 7;
      break;
  }
}