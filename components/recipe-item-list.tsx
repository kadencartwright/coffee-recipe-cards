import React from "react";
import RecipeItem, { RecipeItemProps } from "./recipe-item";
export type RecipeItemListProps = {
  itemProps: RecipeItemProps[];
  title: string;
};

const RecipeItemList: React.FC<RecipeItemListProps> = ({
  title,
  itemProps,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <ul role="list" className="divide-y divide-slate-200 m-0">
        {itemProps.map((itemProps, i) => {
          return (
            <li key={i}>
              <RecipeItem {...itemProps}></RecipeItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RecipeItemList;
