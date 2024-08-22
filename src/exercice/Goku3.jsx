import { Component } from "react"
import goku from "../images/goku.svg"


class Goku3 extends Component{

    

        

    render(){
        const {addOne, hits, name} = this.props

        return(
            <div className="col">
                <img src={goku} alt="goku" /><br />
                <button onClick={addOne} className="btn btn-success m-3">{name} frappe</button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hits}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Goku3;