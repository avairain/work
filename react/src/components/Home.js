import React from 'react'
import ReactDOM from 'react-dom'
import Home2 from './Home2.js'
class Home extends React.Component {
    constructor(props) {
        super()
        console.log(this)
        this.props=props
        // console.log(arr)
        // this.state.arr=arr
        // this.setState({props})
    }
    setState(props) {
        this.props = props
    }
    componentWillUpdate() { }
    render() {
        return <div>
            home
            {/* {console.log(this.state,'arr')} */}
            {/* {console.log(typeof this.state)} */}
            {this.myForIn(this.props)}
            {/* {console.log(this)} */}
            {/* Home传给Home2 把函数名当做props传给Home2 */}
            <Home2 ccc={this.aaa} {...this.props}/>
        </div>
    }
    myForIn(obj) {
        var arr = []
        for (var k in obj) {
            arr.push(<div key={k} ref={k}>{obj[k]}</div>)
        }
        return arr
    }
    //当调用的时候就有一个从Home2中传来的参数
    aaa(sss){
        console.log(sss.refs)
        // 可以用过
        // console.log(sss.target)
        // console.log(sss._targetInst)
        // sss.target.style.display='none'
        // console.log(sss)
    }
}
export default Home