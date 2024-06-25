import { Component } from "react";


export default class ChildComponent extends Component{
    render(){
        console.log("child rendering....")
        return(
            <div>
               Child Component
            </div>
        )
    }
}