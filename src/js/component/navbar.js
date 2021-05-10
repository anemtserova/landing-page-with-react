import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar bg-light justify-content-end">
			<ul className="nav p-1 m-3">
				<li className="nav-item mx-2 h4">
					<a className="nav-link active" aria-current="page" href="#">
						Home
					</a>
				</li>
				<li className="nav-item mx-2 h4">
					<a className="nav-link text-dark" href="#">
						About
					</a>
				</li>
				<li className="nav-item mx-2 h4">
					<a className="nav-link text-dark" href="#">
						Products
					</a>
				</li>
				<li className="nav-item mx-2 h4">
					<a className="nav-link text-dark" href="#">
						Contacts
					</a>
				</li>
			</ul>
		</nav>
	);
};
