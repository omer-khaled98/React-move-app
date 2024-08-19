// import axios from "axios";

// // Action type
// export const GET_MOVIES = "GET_MOVIES";

// // Action creator
// export const showMovies = () => {
//   return (dispatch) => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad"
//       )
//       .then((response) => {
//         dispatch({
//           type: GET_MOVIES,
//           payload: response.data.results, // Assuming `results` contains the list of movies
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching movies:", error);
//       });
//   };
// };
