class Slingshot{
    
constructor(bA,bB){
    var op = {
        bodyA:bA,
        bodyB:bB,
        length:10,
        stiffness:0.04
        
    }
   this.sling=shot.create(op)
   this.pointB=bB
   world.add(wor,this.sling)
}
display(){
    var pa=this.sling.bodyA.positon
    var pb=this.pointB
    line(pa.x,pa.y,pb.x,pb.y)
}
}
