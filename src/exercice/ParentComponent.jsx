import { Component } from "react";
import SimpleComponent from "./SimpleComponent";
import PureComp from "./PureComponent";
import FunctionComp from "./FunctionComponent";

class ParentComponent extends Component{

    constructor(props){
        super(props)

      this.state = {
        name: 'SpiderMan'
      }
    }
    
shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate() décide TRUE par défaut')

    // if(this.state.name !== nextState.name){
    //     return true;
    // }

    return true;
    // return false 
}

changeToBatman = () =>{
    this.setState({
        name: 'Batman'
    })
}

    render(){
        console.log('%c RENDER() du composant PARENT', 'color: red')
        return(
            <>
            <p className="red">Parent Component <span>{this.state.name}</span></p>
            <SimpleComponent name={this.state.name}/>
            <PureComp name={this.state.name}/>
            <FunctionComp name={this.state.name} />
            <button onClick={this.changeToBatman}>Changer en Batman</button>
            </>
        )
    }
}

export default ParentComponent;