import React from "react";

class CheckItem extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            gadget: 'Mobile'
        }
    }

    handleSwitch = () => {
        console.log(this.props)
        // this.props.addToCartHandler({"cardItmes":"Mobile"})
        this.setState({ gadget: 'Laptop' })
    };

    render() {

        {
            var a =10
            console.log(a);
        }

        function x(){

            {
        var a=30;

            }
            console.log(a)
            // y();
        }
          x();
        // console.log('object')
        return (
            <div>
                <h1>Purchease {this.state.gadget}</h1>
                <button onClick={this.handleSwitch}>Switch to Laptop</button>
            </div>
        )
    }
}

export default CheckItem