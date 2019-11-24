import React , {Fragment} from 'react';

const Membre = ({name, age, children , hideName}) =>  {
return (

    <Fragment>
     <h2> {name.toUpperCase()} : {age} </h2>
     <p> {children} </p>
     <button onClick={this.hideName}>X</button>
    </Fragment>
       )
}
     
export default Membre;