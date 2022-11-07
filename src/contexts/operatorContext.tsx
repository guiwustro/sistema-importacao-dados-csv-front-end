import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

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
	removeFile: (id: string) => void;
	files?: IFile[];
	clients?: IClient[];
}

interface IProviderProps {
	children: React.ReactNode;
}
interface IOperatorRequest {
	name: string;
}

interface IFile {
	name: string;
	id: string;
	clients: IClient[];
}
const OperatorContext = createContext({} as IOperatorContext);

export const OperatorContextProvider = ({ children }: IProviderProps) => {
	const [operators, setOperators] = useState<IOperator[]>();
	const [files, setFiles] = useState<IFile[]>();
	const [loadingData, setLoadingData] = useState(false);
	const [clients, setClients] = useState<IClient[]>();

	const getAllOperators = () => {
		api.get("/operators").then((res) => setOperators(res.data));
	};

	const getAllFiles = () => {
		api.get("/clients/file").then((res) => {
			setFiles(res.data);
			let allClients: IClient[] = [];
			res.data.forEach((file: IFile) => {
				const clientArray = file.clients;
				allClients = [...allClients, ...clientArray];
			});
			setClients(allClients);
		});
	};

	useEffect(() => {
		getAllOperators();
		getAllFiles();
	}, []);

	const createOperator = (data: IOperatorRequest) => {
		api
			.post("/operators", data)
			.then((r) => {
				getAllOperators();
			})
			.catch((e) => toast.error("Não foi possível adicionar o operador."));
	};

	const removeOperator = (id: string) => {
		api.delete(`/operators/${id}`).then((r) => {
			getAllOperators();
			toast.error("Não foi possível remover o operador.");
		});
	};

	const uploadNewClients = (file: any) => {
		setLoadingData(true);
		api
			.post("/clients", file)
			.then(() => {
				setLoadingData(false);
				getAllOperators();
				getAllFiles();
			})
			.catch((e) => console.log(e));
	};

	const removeFile = (id: string) => {
		api
			.delete(`/clients/file/${id}`)
			.then(() => {
				getAllFiles();
				getAllOperators();
			})
			.catch(() => toast.error("Não foi possível remover o arquivo"));
	};

	return (
		<OperatorContext.Provider
			value={{
				operators,
				createOperator,
				uploadNewClients,
				removeOperator,
				removeFile,
				files,
				clients,
			}}
		>
			{children}
		</OperatorContext.Provider>
	);
};

export const useOperatorContext = () => useContext(OperatorContext);
