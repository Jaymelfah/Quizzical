import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';

const Quiz = (props) => {
  const { questionData, handleClick, state } = props;

  return (
    <div className="quiz-container flex">
      <Questions handleClick={handleClick} state={state} data={questionData.results} />
      <button type="button" className="start-quiz-btn">Check Answers</button>
    </div>
  );
};

Quiz.propTypes = ({
  questionData: PropTypes.object,
  handleClick: PropTypes.func,
  state: PropTypes.bool,
}).isRequired;
export default Quiz;
