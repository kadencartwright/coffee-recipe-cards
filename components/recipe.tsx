export type RecipeActionProps = { heading: string };
const RecipeAction: React.FunctionComponent<RecipeActionProps> = ({
  heading,
}) => (
  <div className="border-2 border-rose-500 rounded">
    <h2>{heading}</h2>
  </div>
);

export default RecipeAction;
