import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
import { persistor } from "./store";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <App />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
