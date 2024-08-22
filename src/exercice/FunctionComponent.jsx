import { memo } from "react";
const FunctionComp = ({name}) => {
    console.log('%c RENDER() du Function Component enfant', 'color: purple')
    return (
        
        <div>
        <p className="purple">Function Component : <span>{name}</span></p>
    </div>
    );
};

export default memo(FunctionComp);