import './Quiz.css'
import {JapaneseSymbol} from "../model/JapaneseSymbol.ts";
import {useState} from "react";

export default function Quiz(props: {
  symbol: JapaneseSymbol,
  onCorrect: (symbol: JapaneseSymbol) => void,
  onWrong: () => void
}) {
  const [answer, setAnswer] = useState("")

  function checkAnswer() {
    if (answer.trim().toLowerCase() === props.symbol.answer) {
      props.onCorrect(props.symbol)
    } else {
      props.onWrong()
    }
    setAnswer("")
  }

  return (
    <>
      <div className="sign-card">
        <h1>{props.symbol.name}</h1>
      </div>
      <div className="answer-card">
        <input id="answer-input"
               type="text"
               placeholder="answer"
               value={answer}
               onChange={event => setAnswer(event.target.value)}/>
        <p>label place holder</p>
        <button className="button"
                onClick={checkAnswer}>
          &gt;&gt;
        </button>
      </div>
    </>
  )
}
