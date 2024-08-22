import { Component } from 'react';

const changeBg = (WrappedComponent) => {
    
    class ChangeBg extends Component{

        state= {
            bg: ''
        }

        handleClick = () =>{

            if(WrappedComponent.name === 'Freezer'){
                 this.setState({
             bg: 'bg-danger'
         })
            }else{
                this.setState({
                    bg: 'bg-success'
                })
            }
  
           
         
        
       }


        render(){

            if(this.state.bg === 'bg-danger'){
                throw new Error();
            }

            return <WrappedComponent  clickHandler={this.handleClick} background={this.state.bg}{...this.props}/>
        }
    }

    return ChangeBg;
};

export default changeBg;