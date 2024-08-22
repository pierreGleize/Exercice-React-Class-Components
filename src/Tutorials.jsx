import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tutorials = () => {

    const navigate = useNavigate();
    
    useEffect(() =>{
        const timer = setTimeout(() =>{
            navigate('/')
        }, 5000)
        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <div className="mt-3">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oups</strong> This page is under construction. You will be redirected to the Docs page in 5 seconds.
        </div>
            <h2>Tutorial: Intro to React</h2>
        </div>
    );  
};

export default Tutorials;