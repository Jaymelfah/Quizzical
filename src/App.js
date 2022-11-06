/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useRef } from 'react';
import Quiz from './components/Quiz';
import StartQuiz from './components/StartQuiz';

function App() {
  const [render, setRender] = useState(false);
  const [questionData, setQuestionData] = useState({});
  const questionAnswers1 = useRef([]);
  questionAnswers1.current = [];

  const addtoRefs1 = (el) => {
    if (el && !questionAnswers1.current.includes(el)) {
      questionAnswers1.current.push(el);
    }
  };

  const checkAnswers = () => {
    questionAnswers1.current.forEach((item) => {
      if (item.innerHTML === questionData.results[0].correct_answer) {
        item.style.backgroundColor = '#94d7a2';
      } else if (item.innerHTML === questionData.results[1].correct_answer) {
        item.style.backgroundColor = '#94d7a2';
      } else if (item.innerHTML === questionData.results[2].correct_answer) {
        item.style.backgroundColor = '#94d7a2';
      } else if (item.innerHTML === questionData.results[3].correct_answer) {
        item.style.backgroundColor = '#94d7a2';
      } else if (item.innerHTML === questionData.results[4].correct_answer) {
        item.style.backgroundColor = '#94d7a2';
      }
    });
  };

  const handleClick = (e) => {
    e.target.classList.toggle('select');
    if (e.target.classList.contains('select')) {
      e.target.setAttribute('id', '1');
    } else {
      e.target.setAttribute('id', '0');
    }
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
      {render ? (
        <Quiz
          questionData={questionData}
          handleClick={handleClick}
          addtoRefs1={addtoRefs1}
          checkAnswers={checkAnswers}
        />
      )
        : <StartQuiz pageRender={pageRender} />}
    </div>
  );
}

export default App;
