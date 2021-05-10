//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
// ReactDOM.render(
// 	<Card
// 		title="Rustic Styles"
// 		imageUrl="https://i.imgur.com/lBJECU9.jpg"
// 		cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed egestas quam, ut dapibus nulla. Fusce venenatis orci malesuada ligula cursus posuere. Suspendisse tortor dui."
// 		btnUrl="#"
// 		btnLabel="View More"
// 	/>,
// 	document.querySelector("#app")
// );
