/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Questions = (props) => {
  const randomNumber = () => {
    const arr = [];
    while (arr.length < 4) {
      let num = Math.ceil(Math.random() * 4);
      num -= 1;
      const check = arr.every((item) => item !== num);
      if (check) {
        arr.push(num);
      }
    }
    return arr;
  };

  const [randomNumberArray1, set1] = useState(randomNumber);
  const [randomNumberArray2, set2] = useState(randomNumber);
  const [randomNumberArray3, set3] = useState(randomNumber);
  const [randomNumberArray4, set4] = useState(randomNumber);
  const [randomNumberArray5, set5] = useState(randomNumber);

  const { data, handleClick } = props;

  useEffect(() => {
    set1(randomNumber());
    set2(randomNumber());
    set3(randomNumber());
    set4(randomNumber());
    set5(randomNumber());
  }, []);

  const questionOneAnswers = [data[0].correct_answer, data[0].incorrect_answers[0],
    data[0].incorrect_answers[1], data[0].incorrect_answers[2]];

  const questionTwoAnswers = [data[1].correct_answer, data[1].incorrect_answers[0],
    data[1].incorrect_answers[1], data[1].incorrect_answers[2]];

  const questionThreeAnswers = [data[2].correct_answer, data[2].incorrect_answers[0],
    data[2].incorrect_answers[1], data[2].incorrect_answers[2]];

  const questionFourAnswers = [data[3].correct_answer, data[3].incorrect_answers[0],
    data[3].incorrect_answers[1], data[3].incorrect_answers[2]];

  const questionFiveAnswers = [data[4].correct_answer, data[4].incorrect_answers[0],
    data[4].incorrect_answers[1], data[4].incorrect_answers[2]];

  return (
    <>
      <div className="questions">
        <p className="question">{data[0].question}</p>
        <ul className="possible-answers flex">
          <li id="1" onClick={handleClick}>{questionOneAnswers[randomNumberArray1[0]]}</li>
          <li id="2" onClick={handleClick}>{questionOneAnswers[randomNumberArray1[1]]}</li>
          <li onClick={handleClick}>{questionOneAnswers[randomNumberArray1[2]]}</li>
          <li onClick={handleClick}>{questionOneAnswers[randomNumberArray1[3]]}</li>
        </ul>
      </div>
      <div className="questions flex">
        <p className="question">{data[1].question}</p>
        <ul className="possible-answers flex">
          <li onClick={handleClick}>{questionTwoAnswers[randomNumberArray2[0]]}</li>
          <li onClick={handleClick}>{questionTwoAnswers[randomNumberArray2[1]]}</li>
          <li onClick={handleClick}>{questionTwoAnswers[randomNumberArray2[2]]}</li>
          <li onClick={handleClick}>{questionTwoAnswers[randomNumberArray2[3]]}</li>
        </ul>
      </div>
      <div className="questions flex">
        <p className="question">{data[2].question}</p>
        <ul className="possible-answers flex">
          <li onClick={handleClick}>
            {questionThreeAnswers[randomNumberArray3[0]]}

          </li>
          <li onClick={handleClick}>
            {questionThreeAnswers[randomNumberArray3[1]]}

          </li>
          <li onClick={handleClick}>
            {questionThreeAnswers[randomNumberArray3[2]]}

          </li>
          <li onClick={handleClick}>
            {questionThreeAnswers[randomNumberArray3[3]]}

          </li>
        </ul>
      </div>
      <div className="questions flex">
        <p className="question">{data[3].question}</p>
        <ul className="possible-answers flex">
          <li onClick={handleClick}>{questionFourAnswers[randomNumberArray4[0]]}</li>
          <li onClick={handleClick}>{questionFourAnswers[randomNumberArray4[1]]}</li>
          <li onClick={handleClick}>{questionFourAnswers[randomNumberArray4[2]]}</li>
          <li onClick={handleClick}>{questionFourAnswers[randomNumberArray4[3]]}</li>
        </ul>
      </div>
      <div className="questions flex">
        <p className="question">{data[4].question}</p>
        <ul className="possible-answers flex">
          <li onClick={handleClick}>{questionFiveAnswers[randomNumberArray5[0]]}</li>
          <li onClick={handleClick}>{questionFiveAnswers[randomNumberArray5[1]]}</li>
          <li onClick={handleClick}>{questionFiveAnswers[randomNumberArray5[2]]}</li>
          <li onClick={handleClick}>{questionFiveAnswers[randomNumberArray5[3]]}</li>
        </ul>
      </div>

    </>

  );
};
Questions.propTypes = ({
  data: PropTypes.array,
  handleClick: PropTypes.func,
  state: PropTypes.bool,
}).isRequired;

export default Questions;
