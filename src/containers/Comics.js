import { useState, useEffect } from "react";
import axios from "axios";

import ComicCard from "../components/ComicCard";
import PageNav from "../components/PageNav";
import Loader from "../components/Loader";

const Comics = ({ search, favComics, setfavComics }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-vlb.herokuapp.com/comics?limit=${limit}&skip=${skip}&title=${search}`
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
                BROWSE THROUGH THE COMICS OF MARVEL
              </h2>
              <section className="cards">
                <ComicCard
                  comics={data.results}
                  favComics={favComics}
                  setfavComics={setfavComics}
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

export default Comics;
