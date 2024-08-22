import { Component } from "react";
import Car from "./Cars";
import "../index.css"
// import MyHeader from "./MyHeader";

class MyCars extends Component {
state= {
    voitures: [
        {name: "Ford", color: "red", year:2024},
        {name: "Mercedes", color: "black", year:2021},
        {name: "Peugeot", color: "green", year:2018},
    ]
}
addTenYears = () =>{
    const updatedState = this.state.voitures.map((param) =>{
        return param.year -=10;
    })
    this.setState({
        updatedState
    })
}
   
    addStyle = (e) =>{
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled')
        }else{
            e.target.classList.add('styled')
        }
        
    }
    getAge = (year) =>{
        const now = new Date().getFullYear();
        const age = now - year;
        let frenchYearStr;
        if(age === 1){
            frenchYearStr = "an"
        }else if(age === 0){
            frenchYearStr= ""
        }else{
            frenchYearStr ="ans"
        }
        return ` ${age} ${frenchYearStr}` 
    }


    render(){
        const { title, color } = this.props

        

        return (

        <>
            <h1 style={{textAlign:"center", color:color}}>{title}</h1>
            <button onClick={this.addTenYears}>+10 ans</button>

            {/* <Car 
            nom={ford.name} 
            color={ford.color} 
            year={ford.year} />
            <Car 
            nom={mercedes.name} 
            color={mercedes.color} 
            year={mercedes.year} />
            <Car 
            nom={peugeot.name} 
            color={peugeot.color} 
            year={peugeot.year} /> */}
       {
        this.state.voitures.map(({name, color, year}, index) =>{
            
             return (
                <div key={index}>
                <Car name={name}color={color} year={this.getAge(year)} />
                </div>
            )
        })
       }
    
    </ >

        )

    }
}

export default MyCars;