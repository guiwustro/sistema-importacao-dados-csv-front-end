import { OperatorContextProvider } from "./contexts/operatorContext";
import { AppRoutes } from "./routes";
import Global from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<OperatorContextProvider>
			<Global />
			<AppRoutes />
			<ToastContainer />
		</OperatorContextProvider>
	);
}

export default App;
