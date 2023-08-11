import React,{Component} from "react";
export default class DidMount extends Component {
    constructor(){
        super();
        console.log("Construsture")
    }
    componentDidMount(){
        console.log("Component Did Mount")
    }
    render(){
        console.log("Render")
        return(
            <div>
                <h1>
                Component Did Mount
                </h1>
            </div>
        )
    }
}