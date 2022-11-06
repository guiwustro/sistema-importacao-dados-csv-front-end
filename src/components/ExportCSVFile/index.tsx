import { CSVLink } from "react-csv";
import { useOperatorContext } from "../../contexts/operatorContext";
import { CSVLinkStyled } from "./styles";

interface IClientCSV {
	operator: string;
	name: string;
	email: string;
	birthDate: string;
	value: number;
}

const ExportCSVFile = () => {
	const { operators } = useOperatorContext();
	// List all clients
	const clientOperatorArray: IClientCSV[] = [];
	operators?.forEach((operator) => {
		operator.clients.forEach((client) => {
			const clientOperator = {
				operator: operator.name,
				name: client.name,
				email: client.email,
				birthDate: client.birthDate,
				value: +client.value,
			};
			clientOperatorArray.push(clientOperator);
		});
	});
	const headers = [
		{ label: "Operador", key: "operator" },
		{ label: "Cliente-Nome", key: "name" },
		{ label: "Cliente-Email", key: "email" },
		{ label: "Cliente-Data de nascimento", key: "birthDate" },
		{ label: "Cliente-Valor", key: "value" },
	];

	return (
		<CSVLinkStyled
			data={clientOperatorArray}
			headers={headers}
			filename={"distribuicao-dos-clientes-e-operadores.csv"}
		>
			Exportar
		</CSVLinkStyled>
	);
};

export default ExportCSVFile;
