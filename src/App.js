import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
