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
const isShow = false


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
  let descrption = null;
  
  if(isShow){
    descrption = <strong>je viens d un children</strong>
  }
  const liste  = Object.keys(items).map(
    membre => (
      <Membre
        name={items[membre].name}  age={items[membre].age}/>
    )
  )
    

  return (
    <Fragment>
      <div className="App">
        <h1>App Work</h1>
        <Input  name={items.membre1.name} changeValue ={(event) => this.hadnleChange(event)} />
        {liste}
        <Membre name={items.membre2.name} age={items.membre2.age}>
          {descrption}
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
