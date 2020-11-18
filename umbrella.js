class Umbrella{
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0.1,
            isStatic:true
        }
        this.body = Bodies.circle(x, y,options);
        this.image = loadImage(loadImage/walking_1.img);
        World.add(world, this.body);
    }
    display() {
        var pos= this.body.position;
        push();
        var maxDrops=100;
        
        image(this.image,pos.x, pos.y,0,0 );
        
        pop();
    }
}
