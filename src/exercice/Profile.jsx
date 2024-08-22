import {  useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Profile = ()=>{

    const [data, setData] = useState({})

const {profileId} = useParams();
    

    useEffect(() =>{
        const id = profileId
       axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((resp) => {
            console.log(resp.data)
            setData(resp.data[id])
        })
        .catch(() => {
            console.log("Nous avons une erreur")
        })
    }, [profileId])

    const  { email, name, phone } = data
    
        return(
            <div className="mt-3">
                <h2>Profile</h2>
                <ul className="list-groupe list-groupe-flush">
                    <li className="list-group-item">Name: {name} </li>                    
                    <li className="list-group-item">Email: {email} </li>                    
                    <li className="list-group-item">Phone: {phone} </li>                    
                </ul>
            </div>
        )
    
}

export default Profile;