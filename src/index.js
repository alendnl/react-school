import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import storeRedux from "./store/store-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={storeRedux}>
		<App />
	</Provider>
);
