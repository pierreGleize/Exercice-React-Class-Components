import { Component } from "react";
// import "../styles/Form2.css"
// import MyHead from "./MyHeaderOne";
// import styles from "../styles/MyCss.module.css";
import styled from "styled-components";

const Title = styled.h1`
color: purple;
font-size: 80px;
font-weight: 400;
`

const Button = styled.button`
color: white;
background: red;
padding: 10px 12px;
`

class Form2 extends Component {
    render(){

        

        return(
            <div>
                <Title>Hello</Title>
                {/* <MyHead /> */}
                
                <Button>Valider</Button>
            </div>
        )
    }
}

export default Form2;