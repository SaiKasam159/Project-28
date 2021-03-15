class Box{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("dustbin.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(300)
        rect(0,0,this.width,this.height)   
        pop()
    }
    display1(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(252,3,3)
        imageMode(CENTER);
        image(this.image, 0,-60, 140, 160);
        pop()
    }
}