class Paper {
    constructor(x,y,radius) {
        var options = {
            'density':1.2,
            'friction': 0.5,
            'restitution':0.3,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        fill("white");
        //circle(pos.x,pos.y,this.radius)
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        
    }
}