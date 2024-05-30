import Quiz from "./Quiz.tsx";
import {JapaneseSymbol} from "../model/JapaneseSymbol.ts";
import {useState} from "react";

export default function QuizController() {
  const [queuedSymbols, setQueuedSymbols] = useState(loadSymbols())
  const [currentSymbol, setCurrentSymbol] = useState(randomSymbol(queuedSymbols))
  const [finished, setFinished] = useState(false)

  function handleCorrectAnswer(symbol: JapaneseSymbol) {
    const newSymbolsQueue = queuedSymbols.filter(value => value !== symbol)
    if (newSymbolsQueue.length === 0) {
      setFinished(true)
    } else {
      setQueuedSymbols(newSymbolsQueue)
      setCurrentSymbol(randomSymbol(newSymbolsQueue))
    }
  }

  function handleWrongAnswer() {
    alert("U SUCK!")
    setCurrentSymbol(randomSymbol(queuedSymbols))
  }

  function restart() {
    setQueuedSymbols(loadSymbols())
    setCurrentSymbol(randomSymbol(queuedSymbols))
    setFinished(false)
  }

  return !finished ? (
    <>
      <Quiz symbol={currentSymbol}
            onCorrect={handleCorrectAnswer}
            onWrong={handleWrongAnswer}/>
    </>
  ) : ( // TODO: it should display results
    <>
      <button className="button" onClick={restart}>RESTART</button>
    </>
  )
}

// TODO - it should read that from service based on selection Hiragana / Katakana
function loadSymbols(): JapaneseSymbol[] {
  return [
    {name: 'A', answer: 'a'},
    {name: 'B', answer: 'b'},
    {name: 'C', answer: 'c'},
    {name: 'D', answer: 'd'},
  ]
}

function randomSymbol(queue: JapaneseSymbol[]): JapaneseSymbol {
  if (queue.length === 0) {
    throw Error("No symbols found!");
  }

  const randomIndex =  Math.floor(Math.random() * queue.length)
  return queue[randomIndex]
}