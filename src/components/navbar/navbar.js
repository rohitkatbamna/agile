import React from "react";
import { Link } from "react-router-dom";
import "../../scss/navbar.scss";

function MainNavbar() {
	return (
		<>
			<div className="main_navbar_all_of_it">
				<nav className="navbar navbar-expand-lg navbar-light">
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
									<Link to="/">
										<p
											className="nav-link btn btn-primary fs-5"
											aria-current="page">
											Four Values
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/12pri">
										<p
											className="nav-link btn btn-primary fs-5"
											aria-current="page">
											12 Principles
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/agilebenefits">
										<p
											className="nav-link btn btn-primary fs-5"
											aria-current="page">
											Agile Benefits
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/problems">
										<p
											className="nav-link btn btn-primary fs-5"
											aria-current="page">
											Agile Problems
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/scrum">
										<p
											className="nav-link btn btn-primary fs-5"
											aria-current="page">
											Scrum
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/scrum2">
										<p
											className="nav-link btn btn-primary fs-5"
											aria-current="page">
											Scrum 2
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/scrum3">
										<p
											className="nav-link btn btn-primary fs-5"
											aria-current="page">
											Scrum 3
										</p>
									</Link>
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
