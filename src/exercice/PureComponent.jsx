import { PureComponent } from "react";

class PureComp extends PureComponent{
    render(){

        console.log('%c render() du PureComponent', 'color: green')
        return(
            <div>
            <p className="green">Pure Component : <span>{this.props.name}</span></p>
        </div>
        )
    }
}

export default PureComp;