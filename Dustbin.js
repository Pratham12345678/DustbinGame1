class Dustbin {
    constructor(x, y) {
      var options = {
          'restitution':1.5,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x,y,10, 100,options);
      this.image = ("sprites/th(3)");
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      pos.x = 800;
      pos.y = 625;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      rect(0, 0, 30, 130);
      pop();

      var pos =this.body.position;
      pos.x = 900;
      pos.y = 675;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      rect(0, 0, 170, 25);
      pop();

      var pos =this.body.position;
      pos.x = 1000;
      pos.y = 625;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      rect(0, 0, 30, 130);
      pop();
    }
  };