const RecipeAction: React.FunctionComponent<RecipeActionDetails> = (
  actionDetails
) => {
  return (
    <div className="border-2 border-rose-500 rounded">
      <h2>{actionDetails.description}</h2>
      {actionDetails.waterVolume ? (
        <p>{actionDetails.waterVolume} grams</p>
      ) : (
        <></>
      )}
      {actionDetails.duration ? <p>{actionDetails.duration} seconds</p> : <></>}
    </div>
  );
};
import sampleRecipe, { RecipeActionDetails } from "../sampleRecipe";
export default RecipeAction;

import { setupPreviews } from "@previewjs/plugin-react/setup";
setupPreviews(RecipeAction, () => ({
  example: sampleRecipe.actions[1],
}));
