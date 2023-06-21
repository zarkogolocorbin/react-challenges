import { PizzaProps } from "../types/pizza";

interface Props {
  pizza: PizzaProps;
}

function ListItem({ pizza }: Props) {
  return (
    <li className="group flex flex-col gap-6 shadow-md p-5 cursor-pointer sm:flex-row">
      <img
        src={pizza.photoName}
        alt={pizza.name}
        className="w-40 aspect-square self-start duration-300 group-hover:scale-105 block mx-auto sm:mx-0"
      />
      <div className="flex flex-col gap-2 py-1">
        <h3 className="text-xl font-normal text-center md:text-start">
          {pizza.name}
        </h3>
        <p className="text-lg font-light italic mb-auto text-center md:text-start">
          {pizza.ingredients}
        </p>
        {pizza.soldOut ? (
          <span className="text-white text-xl font-medium bg-amber-400 p-2 text-center">
            Sold out!
          </span>
        ) : (
          <span className="text-xl font-medium text-amber-500">
            $ {pizza.price}
          </span>
        )}
      </div>
    </li>
  );
}

export default ListItem;
