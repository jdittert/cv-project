import React, {Component} from "react";

class Display extends Component {
    
    render() {
        const {name} = this.props.personal;

        return (
            <div>              
                <div>Display Side</div>
                <div>{name}</div>
            </div>
        )};
    
    }

export default Display;
