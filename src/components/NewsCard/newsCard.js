import moment from 'moment';
import { percentFunc, shortString } from '../../helpers/functions';
import styled from 'styled-components';

//Returns each article recommendation in respective format.

const NewsCard = ({ data }) => {
  const date = moment(data.published).format('MMM.D.YYYY');

  return (
    <Card title="card-test">
      <Image src={data.image} alt="" />
      <CardInfo>
        <CardTitle>
          {data.title.length > 100 ? (
            <span>{shortString(data)}</span>
          ) : (
            <span>{data.title}</span>
          )}
        </CardTitle>
        <CardBottomInfo className="bottom-info">
          <Similarity>{percentFunc(data)}% similar</Similarity>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span> {date}</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>{data.source_name}</span>
        </CardBottomInfo>
      </CardInfo>
    </Card>
  );
};

//STYLING
const Card = styled.div`
  display: flex;
  border-radius: 15px;
  margin: 30px;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  justify-content: flex-start;
  height: 125px;
  width: 90%;
`;

const CardInfo = styled.div`
  margin: 0 8px 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  font-family: 'Avenir Next', 'Lato', sans-serif;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const CardBottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  color: rgb(119, 119, 119);
  font-size: 14px;
  margin: 0 0 10px 10px;
`;

const Similarity = styled.span`
  color: rgb(19, 165, 0);
  font-weight: 600;
`;

const Image = styled.img`
  width: 90px;
  border-radius: 15px 0 0 15px;
  object-fit: cover;
`;

export default NewsCard;
