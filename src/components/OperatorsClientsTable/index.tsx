import { useOperatorContext } from "../../contexts/operatorContext";
import {
	Container,
	ContainerOperatorName,
	Table,
	TdOperator,
	THeadSecondary,
	THPrimaryBlue,
	THPrimaryGreen,
} from "./styles";
import { BsFillTrashFill } from "react-icons/bs";

const OperatorsClientsTable = () => {
	const { operators, removeOperator } = useOperatorContext();
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
								<tr key={operator.id}>
									<TdOperator>
										<ContainerOperatorName>
											<span>{operator.name}</span>
											<button onClick={() => removeOperator(operator.id)}>
												<BsFillTrashFill />
											</button>
										</ContainerOperatorName>
									</TdOperator>
								</tr>
							);
						}
						return operator.clients?.map((client, i) => {
							return (
								<tr key={client.id}>
									{i === 0 && (
										<TdOperator rowSpan={operator.clients.length}>
											<ContainerOperatorName>
												<span>{operator.name}</span>
												<button onClick={() => removeOperator(operator.id)}>
													<BsFillTrashFill />
												</button>
											</ContainerOperatorName>
										</TdOperator>
									)}
									<td>{client.name}</td>
									<td>{client.email}</td>
									<td>R$ {client.value}</td>
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
