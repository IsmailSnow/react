import React  , {Component} from 'react';
import './App.css';
import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {

  state = {
    messages: {
       pseudo: this.props.match.params.pseudo,
       message : '' 
    },
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message =>{
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = message
    this.setState({messages})
  }
  
  render (){
    
    const messages = Object.keys(this.state.messages)
                           .map(key => (
                             <Message pseudo  = {this.state.messages[key].pseudo}
                                      message = {this.state.messages[key].message}
                                      key={key} />
                           ))

    return (
      <div className='box' > 
          <div>
              <div className='messages'>
                {messages}
              </div>
          </div>
         <Formulaire length={140} pseudo={this.state.pseudo} addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App;
