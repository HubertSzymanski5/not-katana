import './Quiz.css'
import {JapaneseSymbol} from "../../model/JapaneseSymbol.ts";
import React, {useState} from "react";
import Modal from "../modal/Modal.tsx";
import Symbol from "../symbol/Symbol.tsx";

interface Props {
  symbol: JapaneseSymbol,
  onCorrect: (symbol: JapaneseSymbol) => void,
  onWrong: () => void
}

export default function Quiz({symbol, onCorrect, onWrong}: Props) {
  const [answer, setAnswer] = useState("");
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  function checkAnswer() {
    if (answer.trim().length === 0) {
      return;
    }
    if (answer.trim().toLowerCase() === symbol.reading) {
      // TODO: would be nice to add some green flash
      onCorrect(symbol);
    } else {
      setIsWrongAnswer(true);
    }
    setAnswer("");
  }

  function acceptOnEnterPressed(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  }

  function handleModalClose() {
    setIsWrongAnswer(false);
    onWrong();
  }

  return (
    <>
      <div className="sign-card">
        <h1>
          <Symbol value={symbol.symbol}/>
        </h1>
      </div>
      <div className="answer-card">
        <input id="answer-input"
               type="text"
               placeholder="answer"
               value={answer}
               onKeyUp={event => acceptOnEnterPressed(event)}
               onChange={event => setAnswer(event.target.value)}/>
      </div>

      <Modal isOpen={isWrongAnswer} onClose={handleModalClose}>
        <p>
          <Symbol value={symbol.symbol}/> is {symbol.reading}
        </p>
      </Modal>
    </>
  )
}
