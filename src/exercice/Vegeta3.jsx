import { Component } from "react"
import vegeta from "../images/vegeta3.png"


class Vegeta3 extends Component{

     

    render(){
       
        const {addOne, hits, name} = this.props
        return(
            <div className="col">
                <img src={vegeta} alt="vegeta" style={{width:"153px", height:"329px" }}/><br />
                <button onClick={addOne} className="btn btn-success m-3"> {name} frappe</button>

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

export default Vegeta3;