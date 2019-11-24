import React , {Component} from 'react'

class Connexion extends Component{

state={
  pseudo:''
}

handlePseudoChange = envet => {
 const pseudo = event.target.value
 this.setState({pseudo})
}

render (){
        
  return (
        <div className='connexionBox'>
          <form className='connexion'>
            <input value = {this.state.pseudo} onChange ={this.handlePseudoChange} placeholder='Pseudo' type='text' required />
            <button type='submit'>Go</button>
          </form>
        </div>
      )
}

}

export default Connexion;