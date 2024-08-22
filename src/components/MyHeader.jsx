

const MyHeader = ({color, children}) => {
    return (
        <h1 style={{textAlign: "center", color: color}}>{ children }</h1>
       
    );
};

export default MyHeader;