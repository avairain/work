setInterval(()=>console.log(1),1000)
class Person {
    constructor(a){
        this.a =a 
    }
    log(){
        console.log('class',this.a)
    }
}
// new Person().log()

class Chinese extends Person {
    constructor(a){
        super(a)
    }
    speack(){
        console.log('china')
    }
}
var p=new Chinese(222)
console.dir(p)
console.dir(p.log())
