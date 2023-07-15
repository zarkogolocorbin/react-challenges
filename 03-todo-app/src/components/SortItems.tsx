import { useState } from "react";

interface Props {
  onSortedItems: (state: string) => void;
}

function SortItems({ onSortedItems }: Props) {
  const [state, setState] = useState("All");

  return (
    <div className="w-full flex items-center justify-center gap-2">
      <button
        onClick={() => {
          setState("All");
          onSortedItems("All");
        }}
        className={`w-36 py-2 rounded-md border cursor-pointer ${
          state === "All"
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-indigo-600 border-indigo-700"
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          setState("Active");
          onSortedItems("Active");
        }}
        className={`w-36 py-2 rounded-md border cursor-pointer ${
          state === "Active"
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-indigo-600 border-indigo-700"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setState("Completed");
          onSortedItems("Completed");
        }}
        className={`w-36 py-2 rounded-md border cursor-pointer ${
          state === "Completed"
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-indigo-600 border-indigo-700"
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default SortItems;
