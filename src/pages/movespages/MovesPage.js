import { useEffect, useState } from "react";
import CardMoveComponent from "../../components/CardMoveComponent";
import { showMovies } from "../../Redux/Actions/MoviesAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LangContext } from "../../App";
import { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import "./MovePage.css";
function Moves() {
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const lang = useContext(LangContext);

  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage) : 1;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", page);
  }, [page]);

  // const [page, setpage] = useState(1);
  function handleChange(e, p) {
    setPage(p);
  }

  // const [lang, setLang] = useState("en");
  // function handleLang() {
  //   if (lang == "en") {
  //     setLang("ar");
  //   } else {
  //     setLang("en");
  //   }
  // }
  useEffect(() => {
    axios
      .get(
        // "https://api.apify.com/v2/datasets/KsRWfMmKutB4ZEW8D/items?clean=true&format=json&limit=1000&view=titles"
        `https://api.themoviedb.org/3/tv/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=${lang}&page=${page}`
      )
      .then((res) => {
        setList(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang, page]);
  // const dispatch = useDispatch();
  // const list = useSelector((state) => state); // Correctly map state to list

  // useEffect(() => {
  //   dispatch(showMovies());
  // }, [dispatch]);

  return (
    <>
      {/* <button onClick={handleLang} type="button" class="btn btn-warning  ">
        change {lang}
      </button> */}
      {list ? (
        list.map((movie) => (
          <div className="col-3 mt-3" key={movie.id}>
            <CardMoveComponent
              // img={movie.image}
              img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.name}
              desc={movie.overview}
              url={`/details/${movie.id}`}
              movie={movie}
            />
          </div>
        ))
      ) : (
        <span class="loader"></span>
      )}
      <h1></h1>
      <Pagination
        count={500}
        page={page}
        variant="outlined"
        shape="rounded"
        sx={{
          width: "auto",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
          "& .MuiPaginationItem-root": {
            color: "white", // Text color of pagination buttons
            borderColor: "white", // Border color of buttons in outlined variant
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)", // Background color on hover
            },
          },
          "& .Mui-selected": {
            backgroundColor: "#64b5f6", // Background color for selected button
            color: "black", // Text color for selected button
            borderColor: "#90caf", // Border color for selected button
            "&:hover": {
              backgroundColor: "#64b5f6", // Background color on hover for selected button
            },
          },
          "& .MuiPaginationItem-ellipsis": {
            color: "white", // Color of the ellipsis
          },
        }}
        onChange={handleChange}
      />
    </>
  );
}

export default function Mmm() {
  return (
    <div
      style={{
        backgroundColor: "#1B263B",
        width: "100%",
        minHeight: "100vh",
        // height: "calc(100vh - 56px)",
      }}
      className=" bg-dark"
    >
      <div className="row container  text-center mx-auto ">
        <Moves />
      </div>
    </div>
  );
}
