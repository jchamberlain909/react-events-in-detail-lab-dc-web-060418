// Code DelayedButton Component Here
import React,{Component  } from "react";

class DelayedButton extends Component {

    onClickHandler = (e)=>{
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay);
    }


    render(){
        return (<button onClick= {this.onClickHandler}>Delayed Button</button>)
    }
}

export default DelayedButton