class ball{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:1,
            density:1.5,
            restitution:0.4,
        } 
        this.body=Bodies.circle(x,y,20,options)
        this.x=x 
        this.y=y
        this.radius=20
        this.image=loadImage("crumpled ball.png")
        World.add(world,this.body)
    }
    display(){
        push()
            translate(this.body.position.x,this.body.position.y)
            imageMode(CENTER);
        fill("white");
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop()
        
}}