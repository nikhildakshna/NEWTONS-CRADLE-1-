class ball{
constructor(x,y){
var options = {
'restitution': 1,
'friction': 0,
//'density': 0.2,
frictionAir: 0.0,
slop: 1,
inertia: Infinity
}
this.body = Bodies.circle(x,y,50,options);


World.add(world,this.body);
}



display(){
var pos = this.body.position;

push();
translate(pos.x, pos.y);
ellipseMode(RADIUS);
fill("purple");
ellipse(0,0,50);
pop();
}
};