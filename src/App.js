import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import StartQuiz from './components/StartQuiz';

function App() {
  const [render, setRender] = useState(false);
  const [questionData, setQuestionData] = useState({});

  const handleClick = (e) => {
    e.target.classList.toggle('select');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple');
      const data = await response.json();
      setQuestionData(data);
    };
    fetchData();
  }, []);

  const pageRender = () => {
    setRender(true);
  };

  return (
    <div className="App flex">
      {render ? <Quiz questionData={questionData} handleClick={handleClick} />
        : <StartQuiz pageRender={pageRender} />}
    </div>
  );
}

export default App;
