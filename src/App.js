import React from "react";
import { Outlet } from "react-router-dom";
import Provider from "./store/Provider";

function App() {
	return (
		<>
			<Provider>
				<Outlet />
			</Provider>
		</>
	);
}

export default App;
