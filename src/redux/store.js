import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
  );
  return store;
};

export default configureStore;
