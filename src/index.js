import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* Bootstrap */
import * as bootstrap from "bootstrap";
import "bootswatch/dist/minty/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

/* Redux */
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

/* Reducers */
import { recipesReducer } from "./store/recipes/recipesReducer";
import { menuReducer } from "./store/menu/menuReducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  menu: menuReducer,
  // Place other reducers here...
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
