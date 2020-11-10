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
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }
        image(0,0,pos.x, pos.y, this.image);
        if (frameCount % 20 === 0) {
            fruits = createSprite(random(100, 1000), 0, 100, 100);
            var rand = Math.round(random(1,5));
            switch(rand){
                case 1: thunder.addImage("1.png");
                break;
                case 2: thunder.addImage("2.png");
                break;
                case 3: thunder.addImage("3.png");
                break;
                case 4: thunder.addImage("4.png");
                break;
            }
        pop();
    }
}
}