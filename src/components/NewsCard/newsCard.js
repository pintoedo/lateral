import './newsCard.css';
import moment from 'moment';

const NewsCard = ({ data }) => {
  //Helper functions
  const percentage = (data.similarity * 100).toFixed();
  const date = moment(data.published).format('MMM.D.YYYY');

  return (
    <div className="card">
      <img className="card-image" src={data.image} alt="" />
      <div className="card-info">
        <p>{data.title}</p>
        <div className="bottom-info">
          <span className="similarity">{percentage}% similar</span>
          <span>&nbsp;|&nbsp;</span>
          <span> {date}</span>
          <span>&nbsp;|&nbsp;</span>
          <span>{data.source_name}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
