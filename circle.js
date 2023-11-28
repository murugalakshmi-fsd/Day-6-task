class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
}
let C1=new circle(1.0,"red");
console.log(c1);
//+getradius()
class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    getradius(){
      return `The radius of circle is:${this.radius}`;
}
}
let c1=new circle(1.0,"red");
console.log(c1.getradius());

//+setradius()
class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    set changeradius(modifiedradius){
      this.radius=modifiedradius;
}
}
let cr1=new circle(1.0,"red");
cr1.changeradius=2.0
console.log(cr1.radius);

//+getcolor
class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    getcolor(){
      return `The circle is:${this.color}`;
}
}
let c=new circle(1.0,"red");
console.log(c.getcolor());


//+setcolor
class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    set changecolor(modifiedcolor){
      this.color=modifiedcolor;
}
}
let cc1=new circle(1.0,"red");
cc1.changecolor="yellow"
console.log(cc1.color);

//+tostring
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    toString() {
        return "Circle [radius=" + this.radius + ", color=" + this.color + "]";
    }
}

let ct = new Circle(2.0, "red");
console.log(ct.toString());

//+getarea
class circle{
    constructor(radius)
    {
        this.radius=radius;
    }
    getarea(){
      let pi=3.14;
      return `The area of circle  is:${pi*this.radius*this.radius}`;
}
}
let ca=new circle(2.0);
console.log(ca.getarea());


//+getcircumference

class circle{
    constructor(radius)
    {
        this.radius=radius;
    }
    getcircumference(){
      let pi=3.14;
      return `The circumference of circle  is:${2*pi*this.radius}`;
}
}
let cf=new circle(2.0);
console.log(cf.getcircumference());