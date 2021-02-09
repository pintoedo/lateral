import { ArticleProvider } from './context/ArticleContext';
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
