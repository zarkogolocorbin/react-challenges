import { useState } from "react";
import Input from "./components/Input";
import ListItems from "./components/ListItems";
import { item } from "./types/item";
import SortItems from "./components/SortItems";

function App() {
  const [items, setItems] = useState<item[]>([]);
  const [sortedBy, setSortedBy] = useState("All");

  function handleAddNewItem(item: item) {
    setItems([...items, item]);
  }

  function handleToggleItem(id: number) {
    setItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }
  function handleDeleteItem(id: number) {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  }

  let sortedItems = items;
  if (sortedBy === "All") {
    sortedItems = items;
  }
  if (sortedBy === "Active") {
    sortedItems = items.filter((item) => item.isCompleted === false);
  }
  if (sortedBy === "Completed") {
    sortedItems = items.filter((item) => item.isCompleted === true);
  }

  function handleSortedItems(state: string) {
    setSortedBy(state);
  }

  return (
    <>
      <header className="bg-indigo-600 py-6">
        <h1 className=" px-9 text-white text-center text-4xl font-extrabold md:text-left">
          Todo App
        </h1>
      </header>
      <main className="w-3/5 mx-auto flex flex-col gap-11 h-96 mt-9">
        <Input onAddNewItem={handleAddNewItem} />
        <ListItems
          items={sortedItems}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
        />
        {items.length !== 0 && <SortItems onSortedItems={handleSortedItems} />}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
