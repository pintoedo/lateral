import './newsCard.css';
import moment from 'moment';
import { percentFunc, shortString } from '../../helpers/functions';

//Returns each article recommendation in respective format.

const NewsCard = ({ data }) => {
  //Helpers to transform data into right format

  const date = moment(data.published).format('MMM.D.YYYY');

  return (
    <div className="card" title="card-test">
      <img className="card-image" src={data.image} alt="" />
      <div className="card-info">
        <div className="card-title">
          {data.title.length > 100 ? (
            <span>{shortString(data)}</span>
          ) : (
            <span>{data.title}</span>
          )}
        </div>
        <div className="bottom-info">
          <span className="similarity">{percentFunc(data)}% similar</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span> {date}</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>{data.source_name}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
