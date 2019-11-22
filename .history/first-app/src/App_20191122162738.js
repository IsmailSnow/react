import React , {Component , Fragment} from 'react';
import './App.css';
import Membre from './components/Membre'

const items = {
    membre1:{
      name:'ismail',
      age: 25
    },
    membre2:{
      name:'houda',
      age: 22
    }

}


class App extends Component{
state = { items }

handleClick = () => {

}


render () {
  const { items } = this.state;
  return (
    <Fragment>
      <div className="App">
        <h1>App Work</h1>
        <Membre name={items.membre1.name}  age={items.membre1.age}/>
        <Membre name={items.membre2.name} age={items.membre2.age}>je viens d un children</Membre>
      </div>
      <button onClick={this.handleClick}>Up</button>

    </Fragment>
        );
   }
}

export default App;
