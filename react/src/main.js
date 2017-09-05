// setInterval(() => console.log(1), 1000)
class Person {
    constructor(a) {
        this.a = a
    }
    log(b) {
        // console.log('class', b)
    }
}
// new Person().log()

class Chinese extends Person {
    constructor(a) {
        super(a)
    }
    speack() {
        console.log('china')
    }
}
var p = new Chinese(222)
// console.dir(p)
// console.dir(p.log())
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home.js'
import Home2 from './components/Home2.js'
// class Home extends React.Component {
//     render(){

//     }
// }
ReactDOM.render(<div>
    {
        arr.map((v, i) => {
            return <div key={i} className="" style={{backgroundColor:'#'+i+i+i}}>打印：{p.log(i)} v+ {v}</div>
        })
        
    }
    <Home  {...arr}/>
    <Home2 {...arr}/>
</div>,
document.getElementById('app'))