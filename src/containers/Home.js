import { useState, useEffect } from "react";
import axios from "axios";

import CharacterCard from "../components/CharacterCard";
import PageNav from "../components/PageNav";
import Loader from "../components/Loader";

const Home = ({ search, favCharacters, setfavCharacters }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-vlb.herokuapp.com/characters?limit=${limit}&skip=${skip}&name=${search}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [limit, skip, search]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <div className="container">
            <div className="characters">
              <h2 className="characters-title">
                BROWSE THROUGH THE CHARACTERS OF MARVEL
              </h2>
              <section className="cards">
                <CharacterCard
                  results={data.results}
                  setfavCharacters={setfavCharacters}
                  favCharacters={favCharacters}
                />
              </section>
              <PageNav
                count={data.count}
                skip={skip}
                setSkip={setSkip}
                limit={limit}
                setLimit={setLimit}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
