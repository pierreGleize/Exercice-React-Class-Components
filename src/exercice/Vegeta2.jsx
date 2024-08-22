import { Component } from "react";
import vegeta from "../images/vegeta3.png"
import changeBg from "./changeBg";

class Vegeta2 extends Component{



    render(){

        const {background, clickHandler}  = this.props

        const classe = background === '' ? "col" : `col ${background}`
        
     return(
        <div className={classe}>
            <img onClick={clickHandler} src={vegeta} alt="goku" style={{width:"153px", height:"329px" }}/>
            <br />
        </div>
     )
               
        
    }
}

export default changeBg(Vegeta2);