import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CharacterCard = ({ results, favCharacters, setfavCharacters }) => {
  const addFav = (character) => {
    let newTab = [];
    if (favCharacters.length === 0) {
      newTab.push(character);
    }

    newTab = [...favCharacters, character];
    setfavCharacters(newTab);
    console.log(favCharacters);
  };
  return results.map((character) => {
    let picture = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    return (
      <div className="card" key={character._id}>
        <div className="card-inner">
          <div className="card-front">
            <img className="card-img" src={`${picture}`} alt="" />
          </div>
          <div className="card-back">
            <h1>{character.name}</h1>

            {character.description}
            <div className="more-info">
              <Link to={`/comics/${character._id}`}>
                <button className="more">MORE INFO</button>
              </Link>

              <div className="fav">
                <button
                  className="fav-button"
                  onClick={() => {
                    addFav(character);
                  }}
                >
                  <div className="text-btn">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CharacterCard;
