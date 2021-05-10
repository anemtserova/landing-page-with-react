import React from "react";

export const Welcome = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<div
				className="d-flex flex-column align-items-center justify-content-center"
				style={{
					backgroundImage: `url("https://i.imgur.com/3DnQRMc.jpg")`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: "100vh"
				}}>
				<div className="d-flex flex-column display-1 text-light justify-content-center align-items-center">
					<p>Welcome to enLightening</p>
					<p className="display-4">A Home of Light and Imagination</p>
				</div>
			</div>
		</div>
	);
};
