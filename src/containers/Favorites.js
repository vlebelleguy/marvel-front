import CharacterCard from "../components/CharacterCard";
import ComicCard from "../components/ComicCard";

const Favorites = ({ favComics, favCharacters }) => {
  return (
    <div>
      <div className="container">
        <div className="characters">
          <h2 className="characters-title">FAVORITES CHARACTERS</h2>
          <section className="cards">
            <CharacterCard results={favCharacters} />
          </section>
          <h2 className="characters-title">FAVORITES COMICS</h2>
          <section className="cards">
            <ComicCard comics={favComics} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
