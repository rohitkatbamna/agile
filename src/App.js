import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgilebenefitsPage from "./page/agilebenefitspage";
import MainLanding from "./page/mainlanding";
import Principle from "./page/principle";
import Problems from "./page/Problems";
import Scrum2Page from "./page/scrum2page";
import Scrum3page from "./page/scrum3page";
import Scrum4page from "./page/scrum4page";
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
						<Route path="/scrum2" element={<Scrum2Page />} />
						<Route path="/scrum3" element={<Scrum3page />} />
						<Route path="/scrum4" element={<Scrum4page />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
