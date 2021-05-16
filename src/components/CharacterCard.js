import { Link } from "react-router-dom";
const CharacterCard = ({ results }) => {
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
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CharacterCard;
