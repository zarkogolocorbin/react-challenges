import ListsItems from "./components/ListsItems";
import { pizzaData } from "./assets/data";

function App() {
  return (
    <div className="font-robotoMono mx-auto flex flex-col items-center gap-12">
      <header className="self-stretch bg-gray-600 py-7">
        <h1 className="uppercase text-center text-6xl font-light w-full text-[#edc84b]">
          Fast React Pizza Co.
        </h1>
      </header>
      <main className="flex flex-col items-center gap-10">
        <h2 className="inline-block py-3 border-t-2 border-b-2 text-2xl uppercase font-medium">
          Our menu
        </h2>
        <p className="text-base text-center w-4/5">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <ListsItems pizzaData={pizzaData} />
      </main>
      <footer className="bg-slate-800 w-full py-6 text-white">
        <p className="text-center">
          We're happy to welcome you between 12:00 and 22:00.
        </p>
      </footer>
    </div>
  );
}

export default App;
