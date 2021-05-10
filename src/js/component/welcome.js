import React from "react";

export const Welcome = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{
					backgroundImage: `url("https://i.imgur.com/3DnQRMc.jpg")`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: "100vh"
				}}>
				<div className="display-1 text-light">
					<p>Welcome to enLightening</p>
				</div>
			</div>
		</div>
	);
};
