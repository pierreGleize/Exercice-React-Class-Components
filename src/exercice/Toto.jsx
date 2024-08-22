const Toto = ({name, reponseTotoProps, leState}) => {
    console.log(leState)
    return (
      <div>
          <h2>{name}</h2>

          <button 
          disabled={leState.disabled}
          onClick={() => reponseTotoProps("Non je regarde la télé")}>Réponse

          </button>
  
          <p>{leState.messageToto}</p>


      </div>
    )
  }
  
  export default Toto







// const Toto = ({name, leState, reponse}) => {
//     console.log(leState)
//     return (
        
//         <div>
//             <h2>{name}</h2>
//             {leState.messageMaman !== null ?( <button onClick={reponse}>Réponse</button>) : (<button disabled>Réponse</button> )}
//             <p>{leState.messageToto}</p>
//         </div>
//     );
// };

// export default Toto;

