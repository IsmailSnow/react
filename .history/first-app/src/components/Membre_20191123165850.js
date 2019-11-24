import React , {Fragment} from 'react';

const Membre = ({name, age, children}) =>  {
return (

    <Fragment>
     <h2> {name.toUpperCase()} : {age} </h2>
     <p> {children} </p>
     <button>X</button>
    </Fragment>
       )
}
     
export default Membre;