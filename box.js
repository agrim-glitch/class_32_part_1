class Box {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction': 0.5,
          'density' : 1.2
         
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      this.image = loadImage("wood3.png")
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
      var pos =this.body.position;

      imageMode(CENTER)
     
     // rectMode(CENTER);
      fill(255,0,0);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
    // rect(pos.x,pos.y,70,70)
      }
      else{

        World.remove(world,this.body);
        push();
        this.visibility -= 8;
        tint(255,this.visibility)
       // rect(pos.x,pos.y,70,70)
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
        }
    }
  };
  