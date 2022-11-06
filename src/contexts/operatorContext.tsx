import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IOperator {
	name: string;
	id: string;
	clients: IClient[];
}

interface IClient {
	id: string;
	name: string;
	birthDate: string;
	email: string;
	value: string;
}

interface IOperatorContext {
	operators?: IOperator[];
	createOperator: (data: IOperatorRequest) => void;
}

interface IProviderProps {
	children: React.ReactNode;
}
interface IOperatorRequest {
	name: string;
}
const OperatorContext = createContext({} as IOperatorContext);

export const OperatorContextProvider = ({ children }: IProviderProps) => {
	const [operators, setOperators] = useState<IOperator[]>();

	const getAllOperators = () => {
		api.get("/operators").then((res) => setOperators(res.data));
	};

	useEffect(() => {
		getAllOperators();
	}, []);

	const createOperator = (data: IOperatorRequest) => {
		api.post("/operators", data).then(() => getAllOperators());
	};

	return (
		<OperatorContext.Provider value={{ operators, createOperator }}>
			{children}
		</OperatorContext.Provider>
	);
};

export const useOperatorContext = () => useContext(OperatorContext);
// value={{ test }}
