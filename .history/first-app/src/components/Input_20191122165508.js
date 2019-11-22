import React from 'react'

const Input = ({name,changeValue}) => {

    return (
        <input value ={name} onChange={changeValue}/>
    )
}




export default Input
