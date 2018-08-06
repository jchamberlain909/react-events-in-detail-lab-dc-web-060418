// Code CoordinatesButton Component Here
import React,{ Component } from "react";

class CoordinatesButton extends Component {

    onClickHandler = (e) => {
        this.props.onReceiveCoordinates([e.clientX,e.clientY])
    }

    render(){
        return (<button onClick={this.onClickHandler}>Coordinates Button</button>)
    }
}

export default CoordinatesButton