



const Btn = ({children, color, borderRadius, background, onClick}) => {

const customBtn = {
    backgroundColor: background || "grey",
    border: 'none',
    color: color || "fff",
    fontSize: '19px',
    padding: "15px 50px",
    textDecoration: "none",
    textAlign: "center",
    borderRadius: borderRadius || "7px",
    display: "block",
    margin: "5px auto"
}
console.log()

    return (
        // <Button variant="primary" onClick={onClick}>{children}</Button>
       <button style={customBtn} onClick={onClick}>{children}</button>
    //    <button style={{color: color, borderRadius: borderRadius, background: background,}}>{children}</button>
       
       
    );
};
 
export default Btn;

