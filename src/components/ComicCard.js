import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ComicCard = ({ comics, favComics, setfavComics }) => {
  const addFav = (comic) => {
    let newTab = [];
    if (favComics.length === 0) {
      newTab.push(comic);
    }

    newTab = [...favComics, comic];
    setfavComics(newTab);
    console.log(favComics);
  };
  return comics.map((comic) => {
    let picture = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    return (
      <div className="card" to={`/comics/${comic._id}`} key={comic._id}>
        <div className="card-inner">
          <div className="card-front">
            <img className="card-img" src={`${picture}`} alt="" />
          </div>
          <div className="card-back">
            <h1>{comic.title}</h1>

            {comic.description}

            <div className="fav">
              <button
                className="fav-button"
                onClick={() => {
                  addFav(comic);
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
    );
  });
};

export default ComicCard;
