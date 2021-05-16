import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-vlb.herokuapp.com/favorites`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="coming">COMING SOON</div>
      ) : (
        <div className="coming">COMING SOON</div>
      )}
    </>
  );
};

export default Comics;
