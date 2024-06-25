import { Component } from "react";
import ChildComponent from "./child";


export default class ParentComponent extends Component{
    state={
        isChildVibile:true
    }
    onClick=()=>{
        this.setState({
            isChildVibile:!this.state.isChildVibile
        })
    }
    render(){
        console.log("parent rendering...")
        return(
            <div>
                <button onClick={this.onClick}>Click me to hide Child</button>
                {
                    this.state.isChildVibile?
                    <ChildComponent/>:
                    null
                }
            </div>
        )
    }
}