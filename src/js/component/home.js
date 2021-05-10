import React from "react";
import PropType from "prop-types";
import { Navbar } from "./navbar";
import { Welcome } from "./welcome";
import { Card } from "./card";

//create your first component
export function Home() {
	return (
		<div id="home">
			<Navbar />
			<Welcome />
			<div className="d-flex">
				<Card
					title="Rustic Styles"
					imageUrl="https://i.imgur.com/lBJECU9.jpg"
					cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed egestas quam, ut dapibus nulla. Fusce venenatis orci malesuada ligula cursus posuere. Suspendisse tortor dui."
					btnUrl="#"
					btnLabel="View More"
				/>
				<Card
					title="Rustic Styles"
					imageUrl="https://i.imgur.com/lBJECU9.jpg"
					cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed egestas quam, ut dapibus nulla. Fusce venenatis orci malesuada ligula cursus posuere. Suspendisse tortor dui."
					btnUrl="#"
					btnLabel="View More"
				/>
			</div>
		</div>
	);
}
