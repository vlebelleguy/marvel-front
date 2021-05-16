const ComicCard = ({ comics }) => {
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
          </div>
        </div>
      </div>
    );
  });
};

export default ComicCard;
