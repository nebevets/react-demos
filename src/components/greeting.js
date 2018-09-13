import React from 'react';

function Greeting(props){
    console.log(props);

    const style = {
        color: props.favColor
    }
    return <h1 style={style}>wassup, {props.name}</h1>;
}

export default Greeting;