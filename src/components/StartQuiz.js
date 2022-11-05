import React from 'react';
import PropTypes from 'prop-types';

const StartQuiz = (props) => {
  const { pageRender } = props;
  return (
    <div className="start-quiz-container flex">
      <h1 className="quiz-header">Quizzical</h1>
      <p className="description">How well do you know your Geography?</p>
      <button onClick={pageRender} type="button" className="start-quiz-btn">Start Quiz</button>
    </div>
  );
};

StartQuiz.propTypes = ({
  pageRender: PropTypes.func,
}).isRequired;

export default StartQuiz;
