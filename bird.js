class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction': 0,
          'density' : 1
         
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      rectMode(CENTER);
      fill(0,230,0);
      ellipse(pos.x, pos.y, 50, 50);
      
    }
  };
  