import { Component } from "react";
import freezer from "../images/freezer.png"
import changeBg from "./changeBg";
class Freezer extends Component{

   

    render(){

        const {background, clickHandler}  = this.props

        const classe = background === '' ? "col" : `col ${background}`

        return(
            <div className={classe}>
            <img onClick={clickHandler }alt="freezer" style={{width: "153px", height: "329px"}} src={freezer}/>
            <br />

        </div>
        )
    }
}

export default changeBg(Freezer);