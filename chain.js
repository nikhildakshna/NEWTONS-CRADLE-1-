class chain{
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1,
      length: 220,
      angularStiffness: 1
    };

    this.pointB = pointB;
    this.pointX = bodyA.x;
    this.pointY = bodyA.y - 250;

    this.chain = Constraint.create(options);
    World.add(world, this.chain);
  }

    display(){
    if(this.chain.bodyA){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.pointB;
    push();
   
   stroke("black");
   strokeWeight(3.5);
   stroke("#ffff");
   line(pointB.x,pointB.y,pointA.x,pointA.y);

    pop();
    }
  }
};