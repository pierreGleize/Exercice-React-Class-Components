import Wrapper from "./Wrapper";


const Car = ({ name, color, year }) => {

   

        return name ?(
            <Wrapper>
                <p>Marque: { name }</p>
                <p>Age :{year} </p>
            
                <p>Couleur: { color ? color : "Néant" }</p>
            </Wrapper>
        ): (
            null
        )
    


   
}

export default Car;