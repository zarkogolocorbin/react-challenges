import { PizzaProps } from "../types/pizza";
import ListItem from "./ListItem";

interface PizzaList {
  pizzaData: PizzaProps[];
}

function ListsItems({ pizzaData }: PizzaList) {
  return (
    <ul className=" px-12 grid grid-cols-1 gap-8 w-[98%] md:grid-cols-2 lg:gap-12">
      {pizzaData.map((item, idx) => {
        return <ListItem pizza={item} key={idx} />;
      })}
    </ul>
  );
}

export default ListsItems;
