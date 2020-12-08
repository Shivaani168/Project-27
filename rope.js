class Rope {
    constructor(bodyA,bodyB,offsetX){
    var options ={
    bodyA:bodyA,
    bodyB:bodyB,
    pointA:{x:offsetX,y:0}
    }
    this.rope=Constraint.create(options)
    this.offsetX=offsetX
    World.add(world,this.rope)
    }
    display(){
    var pointA=this.rope.bodyA.position
    var pointB=this.rope.bodyB.position
    strokeWeight(3)
    line(pointA.x+this.offsetX,pointA.y,pointB.x,pointB.y)
    }
    }
