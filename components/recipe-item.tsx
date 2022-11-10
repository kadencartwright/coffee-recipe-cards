export type RecipeItemProps = { heading: string };
const RecipeItem: React.FunctionComponent<RecipeItemProps> = ({ heading }) => (
  <div className="border-2 border-rose-500 rounded">
    <h2>{heading}</h2>
  </div>
);

export default RecipeItem;
