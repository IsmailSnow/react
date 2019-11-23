import React from 'react';
import './App.css';

import {sampleText} from "./sampleText"

function App() {
  state = {
    text: sampleText
  }

  return (
    <div className='container'>
       <div className='row'>
         <div className='col-sm-6'>
            <textarea value={sampleText} rows='35' className='form-control' />
         </div>
         <div className='col-sm-6'>
            <div>
              {sampleText}
            </div>
         </div>
       </div>
    </div>
  );
}

export default App;
