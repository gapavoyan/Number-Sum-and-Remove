import React, { useState } from "react"

// class Count extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: 0
//         }
//         this.sumOne = this.sumOne.bind(this)
//         this.removeOne = this.removeOne.bind(this)
//     }
    
//     sumOne(){
//         this.setState({value:this.state.value +  1})
//     }
//     removeOne(){
//         this.setState({value:this.state.value -  1})
//     }
//     render() {
//         return (
//             <>
//                 <button onClick={this.removeOne}>-</button>
//                 <span>{this.state.value}</span>
//                 <button onClick={this.sumOne}>+</button>
//             </>
//         )
//     }
// }
function Count() {
    const[value,setCount] = useState(0)
    // const[key,setKey] = useState("")
    
    function removeOne() {
        if (value > 0) {
            setCount(value - 1)

        }
    }
    function sumOne() {
        setCount(value + 1)
    }
    return(
        <div>
            {/* <h1>{key}</h1>
            <input type="text" value={key} onInput={(evt)=>{
                setKey(evt.target.value)
            }}/> */}
            <button onClick={removeOne}>-</button>
            <span>{value}</span>
            <button onClick={sumOne}>+</button>
        </div>
    )
};
export default Count
