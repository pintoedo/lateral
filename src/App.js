import SearchArticles from './components/SearchArticles/searchArticles';
import { ArticleProvider } from './ArticleContext';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <ArticleProvider>
      <div className="App">
        <Dashboard />
      </div>
    </ArticleProvider>
  );
}

export default App;
