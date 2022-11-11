export type RecipeDetails = {
  title: string;
  actions: RecipeActionDetails[];
};
export type RecipeActionDetails = {
  duration?: number;
  description: string;
  waterVolume?: number;
};
export type PourAction = { waterVolume: number };
export type OtherAction = {};

const sampleRecipe: RecipeDetails = {
  title: "sample recipe",
  actions: [
    { description: "Wet Filter" },
    { waterVolume: 64, duration: 30, description: "Bloom" },
    { description: "Agitate grounds", duration: 15 },
    { waterVolume: 64, duration: 15, description: "2nd Pour" },
    { waterVolume: 64, duration: 15, description: "3rd Pour" },
    { waterVolume: 64, duration: 15, description: "4th Pour" },
    { waterVolume: 64, duration: 15, description: "5th Pour" },
    { waterVolume: 64, duration: 15, description: "6th Pour" },
    { waterVolume: 64, duration: 15, description: "7th Pour" },
    { waterVolume: 64, duration: 15, description: "8th Pour" },
  ],
};
export default sampleRecipe;
