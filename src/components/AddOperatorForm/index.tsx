import { useState } from "react";
import { Button, Input } from "./styles";

const AddOperatorForm = () => {
	const [operatorName, setOperatorName] = useState<string>();

	const addOperator = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div>
			<form onSubmit={(e) => addOperator(e)}>
				<Input
					placeholder="Nome do operador"
					value={operatorName}
					onChange={(e) => setOperatorName(e.target.value)}
				/>
				<Button type="submit">Adicionar</Button>
			</form>
		</div>
	);
};

export default AddOperatorForm;
