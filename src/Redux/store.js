import { createStore, combineReducers } from "redux";
import { favoritesReducer } from "./Reducer/FavouriteReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const store = createStore(rootReducer);

export default store;
