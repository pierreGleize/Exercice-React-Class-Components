import { Component } from "react";
import "../index.css"
// import ChilComponent from "./ChildComponent";

class LifeCycle extends Component{

    constructor(props){
            super(props)

            this.state = {
                name: "Toto",
                step: 1,
            }

            console.log(`Etape ${this.state.step} : Je suis dans le constructor()`)
    }

    static getDerivedStateFromProps(props, state){
        console.log('%c getDerivedStateFromProps lancée', 'color: red; background: yellow;')

        return null;
    }

    componentDidMount(){
        {console.log(`Etape ${this.state.step} : Je suis dans le componentDidMount()`)}
        this.setState({
            name: this.props.name,
            step: this.state.step +1
        })
        {console.log(`Etape ${this.state.step} : setState() a changé le state dans le componentDidMount()`)}
    }

    componentDidUpdate(prevProps, prevState){
        console.log(`Etape ${this.state.step} Je suis dans le componentDidUpdate()`)
        console.log(prevProps)
        console.log(this.state)
    }

    componentWillUnmount() {
        console.log(`Je suis dans componentWillUnmount()`)
    }
    
    render(){
        console.log(`Etape ${this.state.step} : Je suis dans le render()`)
        return(
            
            <div className="borderBox">
                {console.log(`Etape ${this.state.step} : Mise à jour du DOM`)}
                    <p>Chargement {this.state.step}</p>
                    <p>Nom : {this.state.name}</p>

                    {/* <ChilComponent/> */}
            </div>
        )
    }
}

export default LifeCycle;