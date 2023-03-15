import { RecipeList } from './RecipeList';
import recipes from '../recipes';

export const App = () => {
  return (
    <div>
      <RecipeList items={recipes} />
    </div>
  );
};
