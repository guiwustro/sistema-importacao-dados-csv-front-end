import { useState } from "react";

import { useDropzone } from "react-dropzone";
import { useOperatorContext } from "../../contexts/operatorContext";
import {
	ButtonUpload,
	DropzoneContainer,
	UploadContainer,
	UploadMessage,
} from "./styles";
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
		onDropAccepted(files) {
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

	const submitButton = () => {
		const data = new FormData();
		if (!uploadedFiles.length) return;

		const file = uploadedFiles[0];
		data.append("file", file.file, file.name);
		uploadNewClients(data);
	};

	return (
		<UploadContainer>
			<DropzoneContainer
				{...getRootProps({ className: "dropzone" })}
				data-hover="O arquivo importado deve possuir quatro tipo de colunas: nome, data de nascimento, email e valor."
			>
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
			</DropzoneContainer>
			<ButtonUpload
				data-hover="O arquivo importado deve possuir quatro tipo de colunas: nome, data de nascimento, email e valor."
				disabled={!uploadedFiles[0] ? true : false}
				onClick={() => submitButton()}
			>
				Upload
			</ButtonUpload>
		</UploadContainer>
	);
};

export default UploadCSVFile;
