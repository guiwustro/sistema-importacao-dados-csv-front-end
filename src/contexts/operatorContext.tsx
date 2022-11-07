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
	uploadNewClients: (file: any) => void;
	removeOperator: (id: string) => void;
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
	const [loadingData, setLoadingData] = useState(false);

	const getAllOperators = () => {
		api.get("/operators").then((res) => setOperators(res.data));
	};

	useEffect(() => {
		getAllOperators();
	}, []);

	const createOperator = (data: IOperatorRequest) => {
		api.post("/operators", data).then((r) => {
			getAllOperators();
		});
	};

	const removeOperator = (id: string) => {
		api.delete(`/operators/${id}`).then((r) => {
			getAllOperators();
		});
	};

	const uploadNewClients = (file: any) => {
		setLoadingData(true);
		console.log("oi");
		api
			.post("/clients", file)
			.then(() => {
				setLoadingData(false);
				getAllOperators();
			})
			.catch((e) => console.log(e));
	};

	return (
		<OperatorContext.Provider
			value={{ operators, createOperator, uploadNewClients, removeOperator }}
		>
			{children}
		</OperatorContext.Provider>
	);
};

export const useOperatorContext = () => useContext(OperatorContext);
