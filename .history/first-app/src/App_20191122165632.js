import React , {Component , Fragment} from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button';

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

handleClick = num => {
  const items = this.state.items;
  items.membre1.age +=num
  this.setState({items})
}

hadnleChange = event => {
  const items = this.state.items
  const name = event.target.value
  items.membre1.name =name
  this.setState({items})
}


render () {
  const { items } = this.state;
  return (
    <Fragment>
      <div className="App">
        <h1>App Work</h1>
        <Button value ={items.membre1.name} changeValue ={() => this.hadnleChange} />
        <Membre name={items.membre1.name}  age={items.membre1.age}/>
        <Membre name={items.membre2.name} age={items.membre2.age}>je viens d un children</Membre>
        <Button up ={() => this.handleClick(2)} />
      </div>
      

    </Fragment>
        );
   }
}

export default App;
