import React from "react";
import RecipeAction from "./recipe-action";

const RecipeActionList: React.FC<RecipeDetails> = ({ actions, title }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <ul role="list" className="divide-y divide-slate-200 m-0">
        {actions.map((action, i) => {
          return (
            <li key={i}>
              <RecipeAction {...action}></RecipeAction>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RecipeActionList;
import sampleRecipe, { RecipeDetails } from "../sampleRecipe";

import { setupPreviews } from "@previewjs/plugin-react/setup";
setupPreviews(RecipeActionList, () => ({
  example: sampleRecipe,
}));
