let F1, F2, B1, B2, U1, U2, D1, D2, R1, R2, L1, L2;
let buttons;
let history = [];

function createCube() {
  cubes = [];
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      for (let k = 0; k < dim; k++) {
        if (i > 0 && j > 0 && k > 0 && i < dim - 1 && j < dim - 1 && k < dim - 1) {
          continue;
        }
        cubes.push(new Block(i, j, k))
      }
    }
  }
}

function rotateF1() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.z == dim - 1) {
      cube.dir = 1;
      rotZ(cube);
    }
  }
}

function rotateF2() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.z == dim - 1) {
      cube.dir = -1;
      rotZ(cube);
    }
  }
}

function rotateB1() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.z == 0) {
      cube.dir = -1;
      rotZ(cube);
    }
  }
}

function rotateB2() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.z == 0) {
      cube.dir = 1;
      rotZ(cube);
    }
  }
}

function rotateU1() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.y == 0) {
      cube.dir = 1;
      rotY(cube);
    }
  }
}

function rotateU2() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.y == 0) {
      cube.dir = -1;
      rotY(cube);
    }
  }
}

function rotateD1() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.y == dim - 1) {
      cube.dir = -1;
      rotY(cube);
    }
  }
}

function rotateD2() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.y == dim - 1) {
      cube.dir = 1;
      rotY(cube);
    }
  }
}

function rotateR1() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.x == dim - 1) {
      cube.dir = 1;
      rotX(cube);
    }
  }
}

function rotateR2() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.x == dim - 1) {
      cube.dir = -1;
      rotX(cube);
    }
  }
}

function rotateL1() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.x == 0) {
      cube.dir = -1;
      rotX(cube);
    }
  }
}

function rotateL2() {
  if (rotating) {
    return;
  }
  for (var cube of cubes) {
    if (cube.x == 0) {
      cube.dir = 1;
      rotX(cube);
    }
  }
}


function initialize() {
  createCube();

  F1 = document.createElement("BUTTON");
  F1.innerHTML = "F";
  F1.onclick = function() {
    rotateF1();
  }
  document.body.appendChild(F1);

  F2 = document.createElement("BUTTON");
  F2.innerHTML = "F'";
  F2.onclick = function() {
    rotateF2();
  }
  document.body.appendChild(F2);

  B1 = document.createElement("BUTTON");
  B1.innerHTML = "B";
  B1.onclick = function() {
    rotateB1();
  }
  document.body.appendChild(B1);

  B2 = document.createElement("BUTTON");
  B2.innerHTML = "B'";
  B2.onclick = function() {
    rotateB2();
  }
  document.body.appendChild(B2);

  U1 = document.createElement("BUTTON");
  U1.innerHTML = "U";
  U1.onclick = function() {
    rotateU1();
  }
  document.body.appendChild(U1);

  U2 = document.createElement("BUTTON");
  U2.innerHTML = "U'";
  U2.onclick = function() {
    rotateU2();
  }
  document.body.appendChild(U2);

  D1 = document.createElement("BUTTON");
  D1.innerHTML = "D";
  D1.onclick = function() {
    rotateD1();
  }
  document.body.appendChild(D1);

  D2 = document.createElement("BUTTON");
  D2.innerHTML = "D'";
  D2.onclick = function() {
    rotateD2();
  }
  document.body.appendChild(D2);

  R1 = document.createElement("BUTTON");
  R1.innerHTML = "R";
  R1.onclick = function() {
    rotateR1();
  }
  document.body.appendChild(R1);

  R2 = document.createElement("BUTTON");
  R2.innerHTML = "R'";
  R2.onclick = function() {
    rotateR2();
  }
  document.body.appendChild(R2);

  L1 = document.createElement("BUTTON");
  L1.innerHTML = "L";
  L1.onclick = function() {
    rotateL1();
  }
  document.body.appendChild(L1);

  L2 = document.createElement("BUTTON");
  L2.innerHTML = "L'";
  L2.onclick = function() {
    rotateL2();
  }
  document.body.appendChild(L2);

  buttons = {
    "F1": rotateF1,
    "F2": rotateF2,
    "B1": rotateB1,
    "B2": rotateB2,
    "U1": rotateU1,
    "U2": rotateU2,
    "D1": rotateD1,
    "D2": rotateD2,
    "R1": rotateR1,
    "R2": rotateR2,
    "L1": rotateL1,
    "L2": rotateL2
  };

  shuf = document.createElement("BUTTON");
  shuf.innerHTML = "Shuffle";
  shuf.onclick = function() {
    shuffling = true;
  }
  document.body.appendChild(shuf);

  solve = document.createElement("BUTTON");
  solve.innerHTML = "Solve";
  solve.onclick = function() {
    solving = true;
    
  }
  document.body.appendChild(solve);
}

function rotX(cube) {
  rotating = true;
  cube.xTurn = true;
  /*var y, z;
  y = (cube.y - (dim - 1) / 2) * cos(HALF_PI) - cube.dir * (cube.z - (dim - 1) / 2) * sin(HALF_PI);
  z = cube.dir * (cube.y - (dim - 1) / 2) * sin(HALF_PI) + (cube.z - (dim - 1) / 2) * cos(HALF_PI);
  cube.y = round(y + (dim - 1) / 2);
  cube.z = round(z + (dim - 1) / 2);
  
  for (var face of cube.faces) {
    face.rotX(cube.dir, HALF_PI);
  }*/
}

function rotY(cube) {
  rotating = true;
  cube.yTurn = true;
  /*var x, z;
  x = (cube.x - (dim - 1) / 2) * cos(HALF_PI) - cube.dir * (cube.z - (dim - 1) / 2) * sin(HALF_PI);
  z = cube.dir * (cube.x - (dim - 1) / 2) * sin(HALF_PI) + (cube.z - (dim - 1) / 2) * cos(HALF_PI);
  cube.x = round(x + (dim - 1) / 2);
  cube.z = round(z + (dim - 1) / 2);
  
  for (var face of cube.faces) {
    face.rotY(cube.dir, HALF_PI);
  }*/
}

function rotZ(cube) {
  rotating = true;
  cube.zTurn = true;
  /*var x, y, z;
  x = (cube.x - (dim - 1) / 2) * cos(HALF_PI) - cube.dir * (cube.y - (dim - 1) / 2) * sin(HALF_PI);
  y = cube.dir * (cube.x - (dim - 1) / 2) * sin(HALF_PI) + (cube.y - (dim - 1) / 2) * cos(HALF_PI);
  cube.x = round(x + (dim - 1) / 2);
  cube.y = round(y + (dim - 1) / 2);
  cube.zTurn = true;
  for (var face of cube.faces) {
    face.rotZ(cube.dir, HALF_PI);
  }*/
}

function shuffleCube() {
  if (rotating) {
    return;
  }

  if (count == 0) {
    createCube();
    history = [];
  }
  var key = random(Object.keys(buttons));

  buttons[key]();
  history.push(key);

  count++;
  if (count == 50) {
    shuffling = false;
    count = 0;
  }
}

function solveCube() {
  if (history.length==0){
    solving = false;
    return;
  }
  if (rotating) {
    return;
  }

  var h = history[history.length - 1 - count];
  if (h[1] == '1') {
    h = h[0] + '2';
  } else {
    h = h[0] + '1';
  }
  buttons[h]();
  count++;

  if (count == history.length) {
    solving = false;
    history = [];
    count = 0;
  }

}