
import { useState } from 'react'
import './App.css'
import Qusetion from './components/Qusetion'
import qBank from './components/QusetionBank';
import Score from './components/Score';

function App() {
  const [qusetionBank] = useState(qBank);
  const [currentQustion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setSocre] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);


  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();

  }
  const checkAnswer = () => {
    if (selectedOption == qusetionBank[currentQustion].answer) {
      setSocre((prevScore) => prevScore + 1);
    }
  }

  const handleNextQuestion = () => {
    if (currentQustion + 1 < qusetionBank.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption("");
    }
    else {
      setQuizEnd(true);
    }

  }

  return (
    <>
      {!quizEnd ? <Qusetion
        qusetion={qusetionBank[currentQustion]}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
        onSubmit={handleFormSubmit}
      /> : <Score score={score} />}

    </>
  )
}

export default App
