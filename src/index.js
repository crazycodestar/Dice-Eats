import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./screens/home";
// 52837968
import * as serviceWorker from "./serviceWorker";
import "C:/Users/olamilekan/Downloads/stocker/node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/fontawesome-free-5.13.1-web/css/all.css";
import ProductDetailScreen from "./screens/ProductDetailScreen";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
