import React , {Component , Fragment} from 'react';
import './App.css';
import Membre from './components/Membre'

class App extends Component{

render () {
  return (
    <Fragment>
      <div className="App">
        <h1>App Work</h1>
        <Membre name='ismail'/>
        <Membre name='houda'/>
        <Membre/>
      </div>
      <h2>Title</h2>
    </Fragment>
        );
   }
}

export default App;
