import React from "react";
import { Navbar } from "./navbar";
import { Welcome } from "./welcome";

//create your first component
export function Home() {
	return (
		<div id="home">
			<Navbar />
			<Welcome />
		</div>
	);
}
