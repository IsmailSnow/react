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


render () {
  const { items } = this.state;
  return (
    <Fragment>
      <div className="App">
        <h1>App Work</h1>
        <Membre name={items.membre1.name}/>
        <Membre name={items.membre2.name}>je viens d un children</Membre>
      </div>
      <h2>Title</h2>
    </Fragment>
        );
   }
}

export default App;
