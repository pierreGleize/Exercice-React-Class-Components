import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import LifeCycle from './exercice/LifeCycle';
import Form from './exercice/Form';
import Form2 from './exercice/Form2';
import Result from './exercice/Game';
import Btn from './exercice/CustomBtn';
import Test from './exercice/Test';
import Template from './exercice/Template';
import Buttons from './exercice/Buttons';
import MyCars from './components/MyCars'
import Welcome from './exercice/Welcome';
import Maman from './exercice/Maman';
import Display from './exercice/Display';
import ParentComponent from './exercice/ParentComponent';
import "./index.css";
import Goku2 from './exercice/goku2';
import Vegeta2 from './exercice/Vegeta2';
import Freezer from './exercice/Freezer';
import ErrorBoundary from './exercice/ErrorBoundary';
import Goku3 from './exercice/Goku3';
import Vegeta3 from './exercice/Vegeta3';
import AddHits from './exercice/AddHits';
import Vegeta from './exercice/Vegeta';
import Goku from './exercice/Goku';
import Modals from './exercice/Modal';
import MyRef from './exercice/MyRef';
// import Portails from './exercice/Portails';
import {Button, Container} from "react-bootstrap";
import Docs from './exercice/Docs';
import Tutorials from './Tutorials';
import Community from './exercice/Community';
import Menu from './exercice/Menu';
import ErrorPage from './exercice/ErrorPage';
import Profile from './exercice/Profile';
import Profile2 from './exercice/Profile2';
import { MyContext } from './exercice/MyContext';

class App extends Component {
  constructor(){
      super()
      this.refComponent = React.createRef();

  }
  state= { 
    titre: "Mon catalogue voiture",
    color: "green",
    display: true,
    showModal: false,
    vegeta: 100,
    goku: 100,
    underConst: {
      Docs: false,
      Tutorial: true,
      Community: false
    },
    user: {
      name: 'Lisa',
      age: 8
    }
  }

  effacerOuCacher = () =>{
    this.setState({
      display: !this.state.display
    })
  } 

  handleShow = () =>{
    this.setState({
      showModal: true,
    })
  }
  handleHide = () =>{
    this.setState({
      showModal: false,
    })
  }

  handleClick = ()=>{
    this.refComponent.current.focus();
}
 
sayHello = () => alert('Hello')

reduceLife = (param, param2) =>{
  if(param === 'Goku'){
    this.setState({
      vegeta: this.state.vegeta - param2
    })
  }else{
    this.setState({
      goku: this.state.goku - param2
    })

  }
}


render(){

  const modal = this.state.showModal ? (<Modals close={this.handleHide} />) : null;

  const customBtn = {
    backgroundColor: "orange",
    border: 'none',
    color:"fff",
    fontSize: '19px',
    padding: "15px 50px",
    textDecoration: "none",
    textAlign: "center",
    borderRadius: "7px",
    display: "block",
    margin: "5px auto"
}

  const showComponent = this.state.display  ? (<LifeCycle name="Toto 2"/>) : (<div></div>);

  
   
   return (

<Router>
<Menu/>
    <Container className="text-center"> 
       
              <button onClick={this.handleShow}>Afficher le Modal</button>
               {modal}
               {/* <Portails/>  */}
          
      <Template />
      <Test />
      <Buttons />
      <Welcome />
      <MyCars 
      title={this.state.titre}
       color={this.state.color}
       />
       <Maman/> 
       <Display/>
       <Result />
       <Btn color="black" background="yellow" onClick={this.sayHello}>Say hello</Btn>
       <Button 
       variant='warning' 
       onClick={this.sayHello}
       style={customBtn}
       > Hello</Button>
       <Form />
       <Form2 />
        {showComponent}
        <button onClick={this.effacerOuCacher}>Cliquer ici</button>
         <ParentComponent/>
        <MyRef ref={this.refComponent}/>
        <button onClick={this.handleClick}>Valider</button>
        <h3>Goku Vs Vegeta</h3>
        <hr />
        <div className='row'>
          <Vegeta name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife}/>
          <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceLife}/>

        </div>

        <div className='container text-center'>
            <h3>Cliquer sur les gentils</h3>
            <div className='row'>

              <ErrorBoundary>
                <Goku2 />
              </ErrorBoundary>
              <ErrorBoundary>
                <Vegeta2 />
              </ErrorBoundary>
              <ErrorBoundary>
                <Freezer/>
              </ErrorBoundary>
              
            </div>
            <h3>Goku Vs Vegeta props de rendu</h3>
            <div className='row'>
              <AddHits
              render={(hits, addOne, saiyan) => (
                saiyan.vegeta && 
              <Vegeta3  hits={hits} addOne={addOne} name="Vegeta"/>
            )}
              />
              <AddHits
              render={(hits, addOne, saiyan) => (
                saiyan.goku && 
              <Goku3 hits={hits} addOne={addOne} name="Goku"/>
            )}
              />
            </div>
        </div>
      <Routes>
      <Route path="/" element={<Docs/>} />
      {/* <Route path="/tutorial" element={this.state.underConst.Tutorial ? (<Navigate to="/" />) : (<Tutorials />)} /> */}
      <Route path="/tutorial" element={ <Tutorials/>} />
      <Route  path="/community" element={<Community/>} />
      <Route path='/users/:profileId' element={<Profile />}/>
      <Route path="*" element={<ErrorPage/>} />
      </Routes>
        <MyContext.Provider value={this.state.user}>
          <Profile2 info={this.state.user}/>
        </MyContext.Provider>
       
        
         
     </Container> 

     </Router>
    
  )
}

 
}

export default App;
