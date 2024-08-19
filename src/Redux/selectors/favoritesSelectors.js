export const selectFavorites = (state) => state.favorites.favorites;
export const selectIsFavorite = (state, movieId) =>
  state.favorites.favorites.some((movie) => movie.id === movieId);
export const selectFavoritesCount = (state) => state.favorites.favorites.length;
