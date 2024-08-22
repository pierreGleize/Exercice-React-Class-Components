import { Component } from "react";
import goku from "../images/goku.svg"
import changeBg from "./changeBg";

class Goku2 extends Component{



    render(){

        const {background, clickHandler}  = this.props

        const classe = background === '' ? "col" : `col ${background}`
        
     return(
        <div className={classe}>
            <img onClick={clickHandler} src={goku} alt="goku" />
            <br />
        </div>
     )
               
        
    }
}

export default changeBg(Goku2);