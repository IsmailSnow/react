import React , {children} from 'react';

const Membre = ({name, children}) =>  {
return (

    <Fragment>
     <h2> Membre du projet : {name.toUpperCase()} </h2>
     <p> {children} </p>
    </Fragment>
       )
}
     
export default Membre;