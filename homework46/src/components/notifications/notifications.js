import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: props.image,
            notification: props.notification,
            quantity: props.quantity
        }
    }
    render() {
        return(
            <div className="notification_wrapper">
                <img src={this.state.image} alt="logo"/>
                <span>{this.state.notification}</span>
                <span>{this.state.quantity}</span>
            </div>
        );
    }
}

export default Header;



