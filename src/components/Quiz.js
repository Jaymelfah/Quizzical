import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';

const Quiz = (props) => {
  const {
    questionData, handleClick, state, addtoRefs1, checkAnswers,
    count, countCheck, reload,
  } = props;

  return (
    <div className="quiz-container flex">
      <Questions
        handleClick={handleClick}
        state={state}
        data={questionData.results}
        addtoRefs1={addtoRefs1}
      />
      {countCheck
        ? (
          <>
            <p>
              You have scored
              {' '}
              {5 - count}
              {' '}
              / 5 correct answers
            </p>
            <button onClick={reload} type="button" className="start-quiz-btn">Play Again</button>

          </>
        )
        : <button onClick={checkAnswers} type="button" className="start-quiz-btn">Check Answers</button>}

    </div>
  );
};

Quiz.propTypes = ({
  questionData: PropTypes.object,
  handleClick: PropTypes.func,
  state: PropTypes.bool,
}).isRequired;
export default Quiz;
