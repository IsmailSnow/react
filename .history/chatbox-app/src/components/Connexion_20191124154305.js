import React , {Component} from 'react'
import {Redirect} from 'react-router-dom'
class Connexion extends Component{

state={
  pseudo:'',
  goToChat: false
}

handlePseudoChange = event => {
 const pseudo = event.target.value
 this.setState({pseudo})
}

handleSubmit = event =>{
  event.preventDefault()
  this.setState({goToChat: true})
}

render (){
  if(this.state.goToChat){
    return <Redirect to={`/pseudo/${this.state.pseudo}`}></Redirect>
  }
        
  return (
        <div className='connexionBox'>
          <form className='connexion'>
            <input value = {this.state.pseudo} onChange ={this.handlePseudoChange} onSubmit={this.handleSubmit} placeholder='Pseudo' type='text' required />
            <button type='submit'>Go</button>
          </form>
        </div>
      )
}

}

export default Connexion;