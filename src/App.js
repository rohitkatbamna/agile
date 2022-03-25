import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./page/mainlanding";

function App() {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<MainLanding />} exact />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
