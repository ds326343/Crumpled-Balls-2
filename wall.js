class wall{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:0.5,
            density:1.5,
        } 
        this.leftWall=Bodies.rectangle(x,y,width,height,options)
        this.rightWall=Bodies.rectangle(x+150,y,width,height);
        
        this.width=width
        this.height=height
        World.add(world,this.leftWall)
        World.add(world,this.rightWall);
        this.image=loadImage("trash can.png");
    }
    display(){
        push()
            translate(this.leftWall.position.x,this.leftWall.position.y)
            imageMode(CENTER);
        fill("red");
        image(this.image,54,0,100,200);
        pop()
        
    }
}