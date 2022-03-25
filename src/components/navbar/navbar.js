import React from "react";

function MainNavbar() {
	return (
		<>
			<div>
				<nav className="navbar navbar-expand-lg navbar-light ">
					<div className="container-fluid">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav ms-auto me-auto">
								<li className="nav-item">
									<p className="nav-link active" aria-current="page">
										Four Values
									</p>
								</li>
								<li className="nav-item">
									<p className="nav-link" aria-current="page">
										Features
									</p>
								</li>
								<li className="nav-item">
									<p className="nav-link" aria-current="page">
										Pricing
									</p>
								</li>
								<li className="nav-item">
									<p className="nav-link disabled">Disabled</p>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}
export default MainNavbar;
