import './layout.css';
import NewsContainer from '../NewsContainer/newsContainer';

const Layout = () => {
  return (
    <div className="layout-container">
      <h1>Lateral</h1>
      <div className="cards">
        <NewsContainer />
      </div>
    </div>
  );
};

export default Layout;
