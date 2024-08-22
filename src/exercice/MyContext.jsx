import React from "react"

const user ={
    name: 'Bart',
    age: 9
}

const MyContext = React.createContext(user);

export { MyContext }