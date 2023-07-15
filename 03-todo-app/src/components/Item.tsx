import { FaTrashAlt } from "react-icons/fa";
import { item } from "../types/item";

interface Props {
  item: item;
  onToggleItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

function Item({ item, onToggleItem, onDeleteItem }: Props) {
  return (
    <div className="flex items-center gap-6 border px-3 py-2 duration-300 rounded-lg hover:border-indigo-600">
      <input
        type="checkbox"
        value={String(item.isCompleted)}
        onChange={() => onToggleItem(item.id)}
        className="w-5 h-5"
      />
      <div className="flex justify-between flex-1">
        <span
          className={`text-xl ${
            item.isCompleted ? "line-through opacity-60" : ""
          } `}
        >
          {item.item}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>
          <FaTrashAlt className="text-red-300 duration-300 hover:text-red-500 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default Item;
