import './App.css';
import {useState} from 'react';
import WordHistory from './components/wordHistory';

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = event => {
    setMessages([...messages, message]);
  };

  return (
    <div className='App container'>
      <h4>Hi there, Enter a word in the box below and I'll display the word with all vowels highlighted!</h4>
      <input
        type="text"
        id="message"
        name="message"
        autoFocus
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button 
        className="btn btn-primary"
        onClick={handleSubmit}
        >Submit</button>
        <br />
      <br />
      <WordHistory msg={messages} />
    </div>
  );
};

export default App;
