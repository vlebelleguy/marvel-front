import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/marvel-logo.png";

const Header = ({ search, setSearch }) => {
  const history = useHistory();
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo--search">
            <Link to="/">
              <img className="logo" src={logo} alt="marvel-logo"></img>
            </Link>
            <div className="search">
              <input
                className="search-text"
                type="search"
                id="search"
                placeholder="SEARCH"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <div className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
          <div className="header-buttons">
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              CHARACTERS
            </button>
            <button
              onClick={() => {
                history.push("/comics");
              }}
            >
              COMICS
            </button>
            <button
              onClick={() => {
                history.push("/favorites");
              }}
            >
              FAVORITES
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
