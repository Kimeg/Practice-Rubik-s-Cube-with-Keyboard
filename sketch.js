let dim = 3;
let WIDTH = 100;
let HEIGHT = 100;
let gWIDTH = 800;
let gHEIGHT = 800;
let BS = 2*WIDTH / dim;
let rotSpeed = 50;
let rotating = false;
let cubes = [];
let stopped = false;
let shuffling = false;
let solving = false;
let count = 0;

function setup() {
  createCanvas(gWIDTH, gHEIGHT, WEBGL);

  // the simplest method to enable the camera
  createEasyCam();

  // suppress right-click context menu
  document.oncontextmenu = function() {
    return false;
  }

  initialize();
}


function draw() {
  background(100);

  if (shuffling && !solving){
    shuffleCube();
  }
  
  if (solving && !shuffling){
    solveCube();
  }
  
  for (var cube of cubes) {
    cube.update();
  }
}