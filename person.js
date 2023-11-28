class Person{
    constructor(name,age,profession,mailid)
    {
        this.name=name;
        this.age=age;
        this.profession=profession;
        this.mailid=mailid;
    }
    getinformation()
    {
        return`person name is:${this.name}, age is:${this.age},profession:${this.profession} and mailid:${this.mailid}
`
    }
}
var p1=new Person("Ashmita","25","Doctor","ashmita1234@gmail.com");
var p2=new Person("Sagashra","24","student","sagashra1234@gmail.com");
console.log(p1.getinformation(),p2.getinformation());