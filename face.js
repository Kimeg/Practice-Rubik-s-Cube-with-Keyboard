class Face{
  constructor(x, y, z, c){
    this.x = x;
    this.y = y;
    this.z = z;
    this.c = c;
    
    this.xa = 0;
    this.ya = 0;
    this.za = 0;
    
    this.fx = x;
    this.fy = y;
    this.fz = z;
  }
  
  rotX(dir, a){
    //this.xa += dir*a;
    var y, z;
    y = cos(a)*this.y - dir*sin(a)*this.z;
    z = dir*sin(a)*this.y + cos(a)*this.z;
    this.y = round(y);
    this.z = round(z);
  }
  
  rotY(dir, a){
    //this.ya += dir*a;
    var x, z;
    x = cos(a)*this.x - dir*sin(a)*this.z;
    z = dir*sin(a)*this.x + cos(a)*this.z;
    this.x = round(x);
    this.z = round(z);
  }
  
  rotZ(dir, a){
    //this.za += dir*a;
    var x, y;
    x = cos(a)*this.x - dir*sin(a)*this.y;
    y = dir*sin(a)*this.x + cos(a)*this.y;
    this.x = round(x);
    this.y = round(y);
  }
  
  rotFZ(dir, a){
    this.za += dir*a;
    var x, y;
    x = cos(a)*this.fx - dir*sin(a)*this.fy;
    y = dir*sin(a)*this.fx + cos(a)*this.fy;
    this.fx = x;
    this.fy = y;
    //console.log(this.fx, this.fy);
  }
    
  update(){
   
  }
  
  show(x, y, z){
    
    push();
    translate(x*BS-BS*dim/2,y*BS-BS*dim/2,z*BS-BS*dim/2);
    //translate(x*2*BS-BS*dim/2,y*2*BS-BS*dim/2,z*2*BS-BS*dim/2);
    
    if (this.x>0){
      translate(BS*this.x, 0, BS);
    }else if (this.x<0){
      translate(0, 0, BS);
    }
    if (this.y>0){
      translate(0, BS*this.y, 0);
    }
    if (this.z>0){
      translate(0, 0, BS*this.z);
    }
    
    if (abs(this.x)>0){
      //this.xa = 0;
      //this.ya = 0;
      //this.za = 0;
      
      //rotateX(this.xa);
      rotateY(HALF_PI);
      //rotateZ(this.za);
    }else if (abs(this.y)>0){
      //this.xa = 0;
      //this.ya = 0;
      //this.za = 0;
      rotateX(HALF_PI);
      //rotateY(this.ya);
      //rotateZ(this.za);
    }
    
    
    fill(this.c);
    stroke(0);
    strokeWeight(10);
    square(0,0,BS);
    pop();
  }
}