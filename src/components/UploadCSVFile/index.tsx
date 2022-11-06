import { useState } from "react";

import { useDropzone } from "react-dropzone";
import { useOperatorContext } from "../../contexts/operatorContext";
import { ButtonUpload, UploadContainer, UploadMessage } from "./styles";
interface FileProps {
	file: File;
	name: string;
}
const UploadCSVFile = () => {
	const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
	const { uploadNewClients } = useOperatorContext();

	const fileName20Characters = () => {
		const fileName = uploadedFiles[0].file.name;
		if (fileName.length > 20) {
			return `${fileName.slice(0, 13)}....csv`;
		}
		return fileName;
	};

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		accept: {
			"text/csv": [".csv"],
		},
		onDropAccepted(files, event) {
			submitFile(files);
		},
	});
	function submitFile(files: File[]): void {
		const uploadFiles = files.map((file) => ({
			file,
			name: file.name,
		}));
		setUploadedFiles(uploadFiles);
	}
	const submit = () => {
		const data = new FormData();
		console.log(!uploadedFiles[0]);
		if (!uploadedFiles.length) return;

		const file = uploadedFiles[0];
		data.append("file", file.file, file.name);
		// uploadNewClients(data);
	};

	// hover => O arquivo CSV deve possuir quatro tipo de colunas: nome, data de nascimento, email e valor
	// hover => O export gerará um arquivo CSV contendo as inforrmações do cliente com uma coluna indicando o operador responsável.
	return (
		<UploadContainer>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				{isDragAccept && <UploadMessage>Solte o arquivo aqui</UploadMessage>}
				{isDragReject && (
					<UploadMessage type="error">Arquivo não suportado.</UploadMessage>
				)}
				{!isDragActive && !uploadedFiles[0] && (
					<UploadMessage type="success">Importe um arquivo CSV</UploadMessage>
				)}
				{!!uploadedFiles[0] && (
					<UploadMessage>{fileName20Characters()}</UploadMessage>
				)}
			</div>
			<ButtonUpload
				disabled={!uploadedFiles[0] ? true : false}
				onClick={() => submit()}
			>
				Upload
			</ButtonUpload>
		</UploadContainer>
	);
};

export default UploadCSVFile;
