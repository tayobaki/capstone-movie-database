import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./components/Nav.jsx";
import { StateContext } from "./context/StateContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className="bg-[#1E2129] min-h-screen">
			<StateContext>
				<Nav />
				<App />
			</StateContext>
		</div>
	</StrictMode>
);
