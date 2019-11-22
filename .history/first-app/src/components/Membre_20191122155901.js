import React from 'react';

const Membre = (props) =>  {
const name = props.name;
return (
<h2> Membre du projet : {name.toUpperCase()} </h2>
       )
}
     
export default Membre;