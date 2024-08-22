import { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    // Compléter le code de la méthode ordreMaman.
    ordreMaman = (arg) => {
        this.setState({
            messageMaman: arg,
            disabled: false,
            
        })
    }
    reponseToto = msg => this.setState({ messageToto: msg });
    
    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button 
                    onClick={() => this.ordreMaman("Va ranger ta chambre")}
                >Ordre de la mère</button>

                <p>{this.state.messageMaman}</p>

                <hr />
                
                <Toto 
                    name="Toto"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                />
            </div>
        )
    }
}

export default Maman;







// import { Component } from "react";
// import Toto from "./Toto";

// class Maman extends Component{

//     state= {
//         messageMaman : null,
//         messageToto: null,
//     }

//     ordreMaman = () =>{
//         this.setState({
//             messageMaman: "Va ranger ta chambre"
//         })
//     }

//     reponseDeToto = () =>{
//         this.setState({
//             messageToto: "D'accord Maman"
//         })
//     }

//     render(){
//         return(
//             <div style={{textAlign: "center"}}>
//                 <h1>Maman</h1>
//                 <button onClick={this.ordreMaman}>Ordre de la mère</button>
//                 <p>{this.state.messageMaman}</p>
//                 <hr/>
//                 <Toto name={"Toto"} leState={this.state} reponse={this.reponseDeToto}/>
//             </div>
//         )
//     }
// }

// export default Maman;