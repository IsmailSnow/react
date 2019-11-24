import React , {Component} from 'react'

class Connexion extends Component{

state={
  pseudo:''
}

render (){
        
  return (
        <div className='connexionBox'>
          <form className='connexion'>
            <input value = {this.state.pseudo} onChande ={this.handlePseudoChange} placeholder='Pseudo' type='text' required />
            <button type='submit'>Go</button>
          </form>
        </div>
      )
}

}

export default Connexion;