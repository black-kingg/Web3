import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { News } from "./pages/news/News.jsx";
import { Governance } from "./pages/governance/Governance.jsx";
import { Swap } from "./pages/swap/Swap.jsx";
import { Docs } from "./pages/docs/Docs.jsx";
import { Nav } from "./components/Nav.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<Router>
		<Nav />
		<Routes>
			<Route
				path="/"
				element={<App />}
			/>
			<Route
				path="/news"
				element={<News />}
			/>
			<Route
				path="/swap"
				element={<Swap />}
			/>
			<Route
				path="/governance"
				element={<Governance />}
			/>
			<Route
				path="/docs"
				element={<Docs />}
			/>
			{/* Other routes */}
		</Routes>
	</Router>
);
