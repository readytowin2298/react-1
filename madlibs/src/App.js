import './App.css';
import React, {useState} from 'react';
import Form from './Form';
import Story from './Story';

function App() {
  const [story, setStory] = useState("")
  const content = story ? <Story setStory={setStory} story={story} /> : <Form setStory={setStory} />;
  return (
    <div className="App">
      <h1 className="App-header">Madlibs!</h1>
      {content}
    </div>
  );
}

export default App;
