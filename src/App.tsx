import './App.css'
import QuizController from "./components/quiz/QuizController.tsx";
import SymbolsService from "./services/SymbolsService.ts";

function App() {
  const symbolService: SymbolsService = new SymbolsService()

  return (
    <>
      <QuizController symbolsService={symbolService}/>
    </>
  )
}

export default App
