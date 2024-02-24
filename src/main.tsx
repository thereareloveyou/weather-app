
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.querySelector(".container")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
