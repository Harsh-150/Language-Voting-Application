import { useState } from 'react';
import './App.css';

const languages = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    programmers: '16.4M',
    year: 1995,
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    programmers: '11.3M',
    year: 1991,
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    programmers: '9.4M',
    year: 1995,
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    programmers: '6.7M',
    year: 1985,
  },
  {
    name: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    programmers: '2.1M',
    year: 2009,
  },
  {
    name: 'Rust',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    programmers: '0.9M',
    year: 2010,
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    programmers: '4.1M',
    year: 2012,
  },
];

function App() {
  const [votes, setVotes] = useState(Array(languages.length).fill(0));

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  return (
    <div className="App">
      <h1>🔥 Vote for Your Favorite Programming Language</h1>
      <div className="grid-container">
        {languages.map((lang, index) => (
          <div key={lang.name} className="card">
            <img src={lang.icon} alt={`${lang.name} icon`} className="icon" />
            <h2>{lang.name}</h2>
            <p><strong>Programmers:</strong> {lang.programmers}</p>
            <p><strong>Year:</strong> {lang.year}</p>
            <button onClick={() => handleVote(index)}>Vote</button>
            <p className="votes">Votes: {votes[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
