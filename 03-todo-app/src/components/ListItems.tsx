import { item } from "../types/item";
import Item from "./Item";

interface Props {
  items: item[];
  onToggleItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

function ListItems({ items, onToggleItem, onDeleteItem }: Props) {
  console.log(items);

  if (items.length === 0) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <p className="font-medium text-lg">
          No yet items on list. Pleas add item on list!
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-6">
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onToggleItem={onToggleItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}

export default ListItems;
