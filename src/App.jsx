import { useState } from 'react';
import './App.css';

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];

function App() {
  const [votes, setVotes] = useState(Array(languages.length).fill(0));

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Programming Language</h1>
      {languages.map((lang, index) => (
        <div key={lang} style={{ marginBottom: '10px' }}>
          <button onClick={() => handleVote(index)}>Vote {lang}</button>
          <span style={{ marginLeft: '10px' }}>Votes: {votes[index]}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
