import { OperatorContextProvider } from "./contexts/operatorContext";
import { AppRoutes } from "./routes";
import Global from "./styles/global";
function App() {
	return (
		<OperatorContextProvider>
			<Global />
			<AppRoutes />
		</OperatorContextProvider>
	);
}

export default App;
