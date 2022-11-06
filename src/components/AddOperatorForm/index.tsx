import { useState } from "react";
import { Button, Form, Input } from "./styles";

const AddOperatorForm = () => {
	const [operatorName, setOperatorName] = useState<string>();

	const addOperator = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
