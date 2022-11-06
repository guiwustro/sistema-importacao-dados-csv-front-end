import { createContext, useContext } from "react";

interface IOperatorContext {
	test: number;
}

interface IProviderProps {
	children: React.ReactNode;
}

const OperatorContext = createContext({} as IOperatorContext);

export const OperatorContextProvider = ({ children }: IProviderProps) => {
	const test = 1;
	return (
		<OperatorContext.Provider value={{ test }}>
			{children}
		</OperatorContext.Provider>
	);
};

export const useOperatorContext = () => useContext(OperatorContext);
// value={{ test }}
