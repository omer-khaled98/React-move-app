// components/FavoritesPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "../../Redux/selectors/favoritesSelectors";
import { removeFromFavorites } from "../../Redux/Actions/FavAction";
import CardMoveComponent from "../../components/CardMoveComponent";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  //   const dispatch = useDispatch();

  return (
    <div
      className="favorites-page text-center"
      style={{ minHeight: "calc(100vh - 56px) ", backgroundColor: "#1B263B" }}
    >
      <h2 className="py-3 text-bg-warning">Your Favorite Movies</h2>
      <div className="row container mx-auto movies-list">
        {favorites.map((movie) => (
          <>
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
          </>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
