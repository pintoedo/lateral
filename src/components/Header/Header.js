import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Header = () => {
  return (
    <Title>
      <h1>
        ARTI
        <FontAwesomeIcon icon={faSearch} size="1x" />
        LER
      </h1>
    </Title>
  );
};

//STYLING

const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0 145px 0 145px;
`;

export default Header;
