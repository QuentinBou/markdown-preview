import './App.css';
import React, { useState } from 'react'
import { marked } from 'marked';

function App() {

  const [textValue, setTextValue] = useState('# `MarkDown Preview` \n  This is a React Project for transform **HTML** ! \n \n ## How to Use : \n \n \n * *italic* \n * **bold** \n * `background` \n * ~~crossed~~ \n \n * # h1 \n * ## h2 \n * ### h3 \n * #### etc')

  function changeTextHandler(event){
    setTextValue(event.target.value)
  }

  const markdownToHTML = () => {
    return {__html: marked(textValue)}
  }
  

  return (
    <div className="App">
      <h1 className='title'>Welcome to my MarkDown Preview !</h1>
      <div className='elements'>

        <div className='element'>
          <textarea value={textValue} onChange={e => changeTextHandler(e)}></textarea>
        </div>

        <div className='element'>
          <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>

      </div>
    </div>
  );
}

export default App;
