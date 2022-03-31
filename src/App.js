import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgilebenefitsPage from "./page/agilebenefitspage";
import MainLanding from "./page/mainlanding";
import Principle from "./page/principle";

function App() {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<MainLanding />} exact />
						<Route path="/12pri" element={<Principle />} />
						<Route path="/agilebenefits" element={<AgilebenefitsPage />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
