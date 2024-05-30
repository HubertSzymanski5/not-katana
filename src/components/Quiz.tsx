import './Quiz.css'
import {JapaneseSymbol} from "../model/JapaneseSymbol.ts";
import React, {useState} from "react";

export default function Quiz(props: {
  symbol: JapaneseSymbol,
  onCorrect: (symbol: JapaneseSymbol) => void,
  onWrong: () => void
}) {
  const [answer, setAnswer] = useState("")

  function checkAnswer() {
    if (answer.trim().length === 0) {
      return
    }
    if (answer.trim().toLowerCase() === props.symbol.reading) {
      props.onCorrect(props.symbol)
    } else {
      props.onWrong()
    }
    setAnswer("")
  }

  function acceptOnEnterPressed(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      checkAnswer()
    }
  }

  return (
    <>
      <div className="sign-card">
        <h1>{props.symbol.symbol}</h1>
      </div>
      <div className="answer-card">
        <input id="answer-input"
               type="text"
               placeholder="answer"
               value={answer}
               onKeyUp={event => acceptOnEnterPressed(event)}
               onChange={event => setAnswer(event.target.value)}/>
        <button className="button"
                onClick={checkAnswer}>
          &gt;&gt;
        </button>
      </div>
    </>
  )
}
