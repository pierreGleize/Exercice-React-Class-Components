import { Component } from "react";
import Btn from "./CustomBtn";
import { Alert } from "react-bootstrap";

class Result extends Component{
    state =  {
        name: "Mario",
        winner: true
    }
 
    changeState= () => this.setState({winner: ! this.state.winner})

    render(){

    

       
            return(
                <>
             {   this.state.winner ? (
                  
                <Alert variant="success" className="text-center">Bravo {this.state.name}</Alert>
                ) :(
                    
                    <Alert variant="danger" className="text-center">Raté ! </Alert>
                    )}


                 <Btn color="white" borderRadius="20px" background="green" onClick={ this.changeState}>Valider</Btn>
                 
                </>
               
            )
}
}
export default Result;