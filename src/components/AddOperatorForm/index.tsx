import { useState } from "react";
import { useOperatorContext } from "../../contexts/operatorContext";
import { Button, Form, Input } from "./styles";

const AddOperatorForm = () => {
	const [operatorName, setOperatorName] = useState<string>();
	const { createOperator } = useOperatorContext();
	const addOperator = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!!operatorName?.length) {
			const operatorObject = {
				name: operatorName,
			};
			createOperator(operatorObject);
		}
	};

	return (
		<div>
			<Form onSubmit={(e) => addOperator(e)}>
				<Input
					placeholder="Nome do operador"
					value={operatorName}
					onChange={(e) => setOperatorName(e.target.value)}
				/>
				<Button type="submit">Adicionar</Button>
			</Form>
		</div>
	);
};

export default AddOperatorForm;
