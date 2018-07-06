import React from 'react'

export default props => (
    <div>
        <h1> Familia {props.lastName} </h1>        
        {React.cloneElement(props.children, {...props})}
    </div>
)