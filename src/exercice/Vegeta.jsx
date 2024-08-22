import { Component } from "react"
import vegeta from "../images/vegeta3.png"
import countHits from "./counHits"

class Vegeta extends Component{


    render(){

        const {name, addOneHit, hocState, life} = this.props

        const lifeValue = life > 0 ? (<td>{life}%</td>) : (<td><span className="badge badge-danger">0</span></td>);

        const button = life > 0 ? (<button onClick={addOneHit} className="btn btn-success mt-3 mb-3">{name} frappe</button>) : (<button className="btn btn-danger mt-3 mb-3" disabled> {name} mort</button>) ;

        return(
            <div className="col">
                <img src={vegeta} alt="vegeta" style={{width:"153px", height:"329px"}}/><br />
                {button}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                            <th scope="col">Vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Vegeta, 10);