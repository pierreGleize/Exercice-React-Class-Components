import { Component } from "react";

class AddHits extends Component{

    state= {
        hits: 0,
        fighters: {
            vegeta: true,
            goku: true
        }
    }
    
    addOne = () =>{
        this.setState(prevState =>{
            return {
                hits: prevState.hits +1
            }
        })
    }
    render(){
        return(
            <>
                {this.props.render(this.state.hits, this.addOne, this.state.fighters)}
            </>
        )
    }
}

export default AddHits;