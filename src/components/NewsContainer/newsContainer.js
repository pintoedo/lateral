import NewsCard from '../NewsCard/newsCard';
import datas from '../../data';

const NewsContainer = () => {
  return (
    <div className="cards">
      {datas.map((data, i) => (
        <NewsCard data={data} key={i} />
      ))}
    </div>
  );
};

export default NewsContainer;
