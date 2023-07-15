import { useState } from "react";
import { item } from "../types/item";

interface Props {
  onAddNewItem: (item: item) => void;
}

function Input({ onAddNewItem }: Props) {
  const [item, setItem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!item) {
      return;
    }

    const newItem: item = { id: Date.now(), item: item, isCompleted: false };
    onAddNewItem(newItem);

    setItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-between font-bold">
      <input
        type="text"
        placeholder="Add new item..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="w-4/5 py-3 px-6 border rounded-lg "
      />
      <button
        type="submit"
        className="bg-indigo-700 rounded-lg px-4 text-white"
      >
        Add To List
      </button>
    </form>
  );
}

export default Input;
