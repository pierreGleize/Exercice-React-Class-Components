import { Component } from "react";

class ChilComponent extends Component{

    constructor(props){
        super(props)

        this.state= {

        }
        console.log('Je suis dans le constructor() ENFANT')
    }
    componentDidMount(){
        console.log(` Je suis dans le componentDidMount ENFANT`)
    }
    render(){
        console.log(`Je suis dans le render() ENFANT`)
        return(
            <div>
                {console.log(`Mise à jour DOM ENFANT`)}
                    Salut Pierre
            </div>
        )
    }
}

export default ChilComponent;