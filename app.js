// Rover Object Goes Here
// ======================

// ======================

var Objrover = {
  direction: "N",
  x: 0,
  y: 0,
}



function turnLeft(Objrover) {

  if (rover.direction == "N") {

    Objrover.direction = "W";
  }
  else if (rover.direction == "W") {

    Objrover.direction = "S";
  }
  else if (rover.direction == "S") {

    Objrover.direction = "E";
  }
  else {
    Objrover.direction = "N";
  }
  console.log("mostrar direção");
  
}

function turnRight(Objrover) {

  if (Objrover.direction == "N") {
    Objrover.direction = "E";
  }
  else if (Objrover.direction == "E") {
    Objrover.direction = "S";
  }
  else if (Objrover.direction == "S") {
    Objrover.direction = "W";
  }
  else {
    Objrover.direction = "N";
  }
  console.log("mostrar direção");

}

function moveForward(Objrover) {


  switch (Objrover) {

    case Objrover.direction == "N":
      console.log(Objrover.y--)
      break;
    case Objrover.direction == "E":
      console.log(Objrover.x++)
      break;
    case Objrover.direction == "S":
      console.log(Objrover.y++)
      break;
    default:
      console.log(Objrover.x--)
  }

  console.log(Objrover);
  console.log("mostrar direção");
  console.log("x", "y");
}

function commands(texto, Objrover) {
