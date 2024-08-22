import { Component } from "react";
import ReactDOM from 'react-dom';

class Modals extends Component{

   constructor(){
        super()

        this.popUpContainer = document.createElement('div');
        document.body.appendChild(this.popUpContainer)
   }

   componentWillUnmount(){
    document.body.removeChild(this.popUpContainer)
   }

    render(){
        const {close} = this.props

        
        return ReactDOM.createPortal(
            
            <div className="test"  onClick={close}>
                <div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt nam excepturi recusandae eum labore ipsa molestias quos temporibus soluta.</p>
                     <button>Fermer</button>
                </div>
               
            </div>, 
            this.popUpContainer
        )
    }
}

export default Modals;