import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Rankings } from "./pages/Rankings.jsx";
import { Marketplace } from "./pages/Marketplace.jsx";
import { Resources } from "./pages/Resources.jsx";
import { Docs } from "./pages/Docs.jsx";
import { Nav } from "./components/Nav.jsx";
import { Swap } from "./pages/Swap.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function ConditionalNav() {
	const location = useLocation();

	// Check if the current location is not the Swap page
	if (location.pathname !== "/swap") {
		return <Nav />;
	}

	return null;
}

root.render(
	<BrowserRouter>
		<ConditionalNav />
		<Routes>
			<Route
				path="/"
				element={<App />}
			/>
			<Route
				path="/marketplace"
				element={<Marketplace />}
			/>
			<Route
				path="/rankings"
				element={<Rankings />}
			/>
			<Route
				path="/resources"
				element={<Resources />}
			/>
			<Route
				path="/docs"
				element={<Docs />}
			/>
			<Route
				path="/swap"
				element={<Swap />}
			/>
		</Routes>
	</BrowserRouter>
);
