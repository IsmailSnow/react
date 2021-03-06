import React , {Component , Fragment} from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button';
import Input from './components/Input';

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
isShow: false


class App extends Component{
state = { items , isShow }

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

hadnleShowDescription = () =>{
  const isShow = !this.state.isShow
  this.setState({isShow})
}


render () {
  const { items , isShow} = this.state;
  return (
    <Fragment>
      <div className="App">
        <h1>App Work</h1>
        <Input  name={items.membre1.name} changeValue ={(event) => this.hadnleChange(event)} />
        <Membre name={items.membre1.name}  age={items.membre1.age}/>
        <Membre name={items.membre2.name} age={items.membre2.age}>
          {
            isShow ? <strong>je viens d un children</strong> : null
          }
          <button onClick={this.hadnleShowDescription}>
            {
              isShow ? 'Cacher' : 'Montrer'
            }
          </button>
        
        </Membre>
        <Button up ={() => this.handleClick(2)} />
      </div>
      

    </Fragment>
        );
   }
}

export default App;
