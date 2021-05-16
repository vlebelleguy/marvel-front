import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ComicCard from "../components/ComicCard";
import Loader from "../components/Loader";

const Character = () => {
  const { characterId } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-vlb.herokuapp.com/comics/${characterId}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <Loader />
  ) : (
    <main>
      <div className="container">
        <div className="characters">
          <h2 className="characters-title">MORE ABOUT {data.name}</h2>

          <section className="cards">
            <ComicCard comics={data.comics} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Character;
