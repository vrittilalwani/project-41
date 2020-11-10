class Drops{
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0.1,
            isStatic:true
        }
        this.body = Bodies.circle(x, y,radius,options);
        World.add(world, this.body);
    }
    display() {
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0, this.x, this.y)
        update(){
            if(this.rain.postion.y>height){
                Matter.Body.setPosition(this.rain,  {x:RandomSource(0,400), y:RandomSource(0,400)})
            }
        }
    
        pop();
    }
}
