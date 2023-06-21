import { questions } from "./assets/data";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="w-4/5 h-screen mx-auto grid items-center">
      <Questions questions={questions} />
    </div>
  );
}

export default App;
