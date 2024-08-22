import { Component } from "react";
import CarImage from "./CarImage";

class Form extends Component{
    state={
        username: "",
        color: '',
        colors: ["", "red", "blue", "green", "purple", "pink"],
        comment: ''
    }

    handlePseudo = (e) =>{
        this.setState({
            username: e.target.value
        })
    }
    handleColor = e =>{
        this.setState({
            color: e.target.value
        })
       
    }
    handleComment = e =>{
        this.setState({
            comment: e.target.value
        })
    }
    handleSubmitForm = e =>{
        e.preventDefault()
        console.log(`Username: ${this.state.username} Couleur: ${this.state.color} Commentaire: ${this.state.comment}`)
    }
     
    render(){
        return(
            <div>
                <CarImage color={this.state.color} height="250"/>
                <h1>Commentaire</h1>
                <form action="" onSubmit={this.handleSubmitForm}>
                    <div>
                       <label htmlFor="">Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo}/> 
                    </div>
                    <div>
                        <label htmlFor="">Couleur</label>
                        <select name="" id="" value={this.state.color} onChange={this.handleColor}>
                           {this.state.colors.map((couleurs, index)=>(
                            
                            <option key={index} value={couleurs}>{couleurs}</option>
                          
                          ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Commentaire</label>
                        <textarea name="" id="" value={this.state.comment}onChange={this.handleComment}></textarea>
                    </div>
                    <button >Valider</button>
                    
                </form>
            </div>
        )
    }
}

export default Form;