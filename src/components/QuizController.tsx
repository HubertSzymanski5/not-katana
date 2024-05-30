import Quiz from "./Quiz.tsx";
import {JapaneseSymbol} from "../model/JapaneseSymbol.ts";
import {useState} from "react";
import SymbolsService, {SymbolLevels, SymbolTypes} from "../services/SymbolsService.ts";

export default function QuizController(props: {symbolsService: SymbolsService}) {
  const [queuedSymbols, setQueuedSymbols] = useState(loadSymbols);
  const [currentSymbol, setCurrentSymbol] = useState(randomSymbol(queuedSymbols));
  const [finished, setFinished] = useState(false);

  function loadSymbols(): JapaneseSymbol[] {
    return props.symbolsService.loadSymbols([SymbolTypes.KATAKANA], [SymbolLevels.EXTENDED]).slice(0, 2);
  }

  function handleCorrectAnswer(symbol: JapaneseSymbol) {
    const newSymbolsQueue = queuedSymbols.filter(value => value !== symbol);
    if (newSymbolsQueue.length === 0) {
      setFinished(true);
    } else {
      setQueuedSymbols(newSymbolsQueue);
      setCurrentSymbol(randomSymbol(newSymbolsQueue));
    }
  }

  function handleWrongAnswer() {
    alert(`${currentSymbol.symbol} is ${currentSymbol.reading}`);
    setCurrentSymbol(randomSymbol(queuedSymbols));
  }

  function restart() {
    setQueuedSymbols(loadSymbols());
    setCurrentSymbol(randomSymbol(queuedSymbols));
    setFinished(false);
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

function randomSymbol(queue: JapaneseSymbol[]): JapaneseSymbol {
  if (queue.length === 0) {
    throw Error("No symbols found!");
  }

  const randomIndex =  Math.floor(Math.random() * queue.length);
  return queue[randomIndex];
}