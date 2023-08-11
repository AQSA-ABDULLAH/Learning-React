import React,{Component} from "react";
export default class Constructor extends Component {
    constructor(){
        super();
        console.log("Construsture")
    }
    render(){
        console.log("Second Construsture")
        return(
            <div>
                <h1>
                Constructor
                </h1>
            </div>
        )
    }
}