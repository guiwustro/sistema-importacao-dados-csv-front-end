import { useOperatorContext } from "../../contexts/operatorContext";
import { BsFillTrashFill } from "react-icons/bs";
import { ContainerFileHistoric, NoFileMessage } from "./styles";

const FileHistoric = () => {
	const { files, removeFile } = useOperatorContext();
	return (
		<ContainerFileHistoric>
			<h3>Arquivos adicionados</h3>
			{files?.length === 0 && (
				<NoFileMessage>Nenhum arquivo CSV foi importado. </NoFileMessage>
			)}
			<ul>
				{files?.map((e) => {
					return (
						<li className="historic__file" key={e.id}>
							<p>{e.name}</p>
							<button onClick={() => removeFile(e.id)}>
								<BsFillTrashFill />
							</button>
						</li>
					);
				})}
			</ul>
		</ContainerFileHistoric>
	);
};

export default FileHistoric;
