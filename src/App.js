import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgilebenefitsPage from "./page/agilebenefitspage";
import MainLanding from "./page/mainlanding";
import Principle from "./page/principle";
import Problems from "./page/Problems";
import ScrumPage from "./page/ScrumPage";

function App() {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<MainLanding />} exact />
						<Route path="/12pri" element={<Principle />} />
						<Route path="/agilebenefits" element={<AgilebenefitsPage />} />
						<Route path="/problems" element={<Problems />} />
						<Route path="/scrum" element={<ScrumPage />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
