class Uber{
constructor(basic,kpc,dpc){
this.basic=basic;
this.kpc=kpc;
this.dpc=dpc;
}
gettotal(){
let total = this.basic+(this.kpc*this.dpc);
return total;
}
}
let t1=new Uber(25,30,5);
let total=t1.gettotal();
console.log("total:",total);
