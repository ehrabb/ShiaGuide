import React, { useState } from 'react';
import './App.css'; // Ensure your CSS is set up to use the Noto Nastaliq font

function App() {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (question.trim()) {
      setQuestions([...questions, question]);
      setQuestion(''); // Clear the input after submission
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="urdu-text">Welcome to ShiaGuide</h1>
        <p className="urdu-text">This is a platform for exploring Shia Islamic teachings and resources.</p>
        <form onSubmit={handleSubmit}>
          <textarea
            className="question-input"
            placeholder="Ask a question..."
            value={question}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          {questions.map((q, index) => (
            <p key={index} className="question-display urdu-text">{q}</p> // Display submitted questions
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;