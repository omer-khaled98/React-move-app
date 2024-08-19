import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsComponent from "../components/DetailsComponent";

export default function () {
  const [details, setDetails] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=29cf44b93ca83bf48d9356395476f7ad`
        // `https://api.themoviedb.org/3/tv/popular${params}?api_key=592d5558fe91383c9979c4a7c357bfee&language=en&page=1`
        // `https://api.apify.com/v2/datasets/KsRWfMmKutB4ZEW8D/items?clean=true&format=json&limit=1000&view=titles`
      )
      .then((res) => {
        setDetails(res.data);
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  const data = JSON.parse(localStorage.getItem("userData"));
  // console.log(data.movie);
  return (
    <>
      <DetailsComponent
        // img={details.img}
        img={`https://image.tmdb.org/t/p/w500/${data.movie.poster_path}`}
        title={data.movie.name}
        desc={data.movie.overview}
        rate={data.movie.vote_average}
      />
    </>
  );
}
