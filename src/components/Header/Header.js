import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>
        ARTI
        <FontAwesomeIcon icon={faSearch} size="1x" />
        LER
      </h1>
    </div>
  );
};

export default Header;
