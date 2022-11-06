import { useOperatorContext } from "../../contexts/operatorContext";
import {
	Container,
	Table,
	THeadSecondary,
	THPrimaryBlue,
	THPrimaryGreen,
} from "./styles";

const OperatorsClientsTable = () => {
	const { operators } = useOperatorContext();
	console.log(operators);

	return (
		<Container>
			<Table>
				<thead>
					<tr>
						<THPrimaryGreen>Operador</THPrimaryGreen>
						<THPrimaryBlue colSpan={4}>Cliente</THPrimaryBlue>
					</tr>
					<THeadSecondary>
						<th className="table-th--green">Nome</th>
						<th className="table-th--blue">Nome</th>
						<th className="table-th--blue">E-mail</th>
						<th className="table-th--blue">Valor</th>
						<th className="table-th--blue">Data de nascimento</th>
					</THeadSecondary>
				</thead>
				<tbody>
					{operators?.map((operator) => {
						if (operator.clients.length === 0) {
							return (
								<tr>
									<td>{operator.name}</td>
								</tr>
							);
						}
						return operator.clients?.map((client, i) => {
							return (
								<tr>
									{i === 0 && (
										<td rowSpan={operator.clients.length}>{operator.name}</td>
									)}
									<td>{client.name}</td>
									<td>{client.email}</td>
									<td>{client.value}</td>
									<td>{client.birthDate}</td>
								</tr>
							);
						});
					})}
				</tbody>
			</Table>
		</Container>
	);
};

export default OperatorsClientsTable;
