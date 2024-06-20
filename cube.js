class Block {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dir = null;
    this.faces = [
      new Face(1, 0, 0, color(255, 122, 0)),
      new Face(-1, 0, 0, color(255, 0, 0)),
      new Face(0, 1, 0, color(255)),
      new Face(0, -1, 0, color(255, 255, 0)),
      new Face(0, 0, 1, color(0, 255, 0)),
      new Face(0, 0, -1, color(0, 0, 255))
    ];

    this.xTurn = false;
    this.yTurn = false;
    this.zTurn = false;
    this.xa = 0;
    this.ya = 0;
    this.za = 0;
  }

  rotX() {
    this.xa += rotSpeed;
    var x, y, z, a;

    a = rotSpeed * PI / 180;
    
    y = (this.y - (dim - 1) / 2) * cos(a) - this.dir * (this.z - (dim - 1) / 2) * sin(a);
    z = this.dir * (this.y - (dim - 1) / 2) * sin(a) + (this.z - (dim - 1) / 2) * cos(a);
    this.y = (y + (dim - 1) / 2);
    this.z = (z + (dim - 1) / 2);

    if (this.xa >= 90) {
      this.xTurn = false;
      this.y = round(this.y);
      this.z = round(this.z);
      this.xa = 0;
      rotating = false;
      stopped = true;
      
      for (var face of this.faces) {
        face.rotX(this.dir, HALF_PI);
      }
    }
  }

  rotY() {
    this.ya += rotSpeed;
    var x, y, z, a;

    a = rotSpeed * PI / 180;
    
    x = (this.x - (dim - 1) / 2) * cos(a) - this.dir * (this.z - (dim - 1) / 2) * sin(a);
    z = this.dir * (this.x - (dim - 1) / 2) * sin(a) + (this.z - (dim - 1) / 2) * cos(a);
    this.x = (x + (dim - 1) / 2);
    this.z = (z + (dim - 1) / 2);

    if (this.ya >= 90) {
      this.yTurn = false;
      this.x = round(this.x);
      this.z = round(this.z);
      this.ya = 0;
      rotating = false;
      stopped = true;
      
      for (var face of this.faces) {
        face.rotY(this.dir, HALF_PI);
      }
    }
  }


  rotZ() {
    this.za += rotSpeed;
    var x, y, z, a;

    a = rotSpeed * PI / 180;
    
    x = (this.x - (dim - 1) / 2) * cos(a) - this.dir * (this.y - (dim - 1) / 2) * sin(a);
    y = this.dir * (this.x - (dim - 1) / 2) * sin(a) + (this.y - (dim - 1) / 2) * cos(a);
    this.x = (x + (dim - 1) / 2);
    this.y = (y + (dim - 1) / 2);
    
    for (var face of this.faces) {
      face.rotFZ(this.dir, a);
    }
    
    if (this.za >= 90) {
      this.zTurn = false;
      this.x = round(this.x);
      this.y = round(this.y);
      this.za = 0;
      rotating = false;
      stopped = true;
      
      for (var face of this.faces) {
        face.rotZ(this.dir, HALF_PI);
      }
    }
  }

  update() {
    if (this.xTurn) {
      this.rotX();
    }
    if (this.yTurn) {
      this.rotY();
    }
    if (this.zTurn) {
      this.rotZ();
    }
    this.show();
  }

  show() {
    for (var face of this.faces) {
      face.show(this.x, this.y, this.z);
    }
  }
}