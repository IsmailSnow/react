import React , {Component} from 'react';
import './App.css';
import marked from 'marked'
import {sampleText} from "./sampleText"

class  App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount(){
    console.log("in init")
  }

  componentDidUpdate(){
    console.log("in init")
    const { text} =this.state;
  }

  handleTextChange =  event =>{
    const text = event.target.value
    this.setState({text})
  }

  renderText = text => {
    const __html = marked(text,{sanitize: true})
    return {__html : __html}
  }

  render() {
    return (
    <div className='container'>
       <div className='row'>
         <div className='col-sm-6'>
            <textarea onChange={this.handleTextChange}  value={this.state.text} rows='35' className='form-control' />
         </div>
         <div className='col-sm-6'>
            <div>
              <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
            </div>
         </div>
       </div>
    </div>
    )
   }  
}

export default App;
