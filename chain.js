class CHAIN1{
    constructor(a,b){
        
        var option={
            bodyA : a,
            bodyB : b,
            stiffness:0.04,
            length:10

        }

    this.body = Matter.Constraint.create(option);
    World.add(world,this.body);

    }

    display(){

        var posa = this.body.bodyA.position;
        var posb = this.body.bodyB.position;

        push();
        strokeWeight(4);
        line(posa.x,posa.y,posb.x,posb.y);
        pop();
    }

}