import { RecipeList } from './RecipeList/RecipeList';
import recipes from 'recipes';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle />
    </Layout>
  );
};
