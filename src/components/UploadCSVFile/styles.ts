import styled from "styled-components";

interface UploadProps {
	isDragActive: boolean;
	isDragReject: boolean;
	refKey?: string;
	[key: string]: any;
	type?: "error" | "success" | "default";
}

const messageColors = {
	default: "var(--color-blue-700)",
	error: "var( --color-red)",
	success: "var(--color-blue-700)",
};

export const UploadContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	height: 48px;
`;

export const DropzoneContainer = styled.div`
	position: relative;
	&::before {
		content: attr(data-hover);
		display: block;
		visibility: hidden;
		opacity: 0;
		font-size: 12px;
		background-color: var(--color-blue-300);
		color: var(--color-gray-500);
		text-align: center;
		padding: 4px 10px 4px 10px;
		transition: opacity 0.5s ease-in-out;
		position: absolute;
		min-width: 280px;
		font-weight: 700;
		z-index: 1;
		border-radius: 1rem;
		right: -97px;
		bottom: 50px;
	}
	&:hover:before {
		opacity: 1;
		z-index: 1;
		visibility: visible;
	}
`;
export const UploadMessage = styled.p`
	display: flex;
	font-size: 0.8rem;
	text-align: center;
	font-weight: 500;
	height: 100%;
	cursor: pointer;
	padding: 0 2rem;
	border-radius: 1rem;
	background-color: var(--color-blue-300);
	color: ${({ type }: UploadProps) => messageColors[type || "default"]};
	width: 150px;
	justify-content: center;
	align-items: center;
`;

export const ButtonUpload = styled.button`
	background-color: var(--color-blue-700);
	color: var(--color-white);
	border-radius: 1rem;
	font-size: 1.1rem;
	padding: 0.7rem 1rem;
	font-weight: 700;
	position: relative;
	:disabled {
		cursor: not-allowed;
	}
	&:hover:enabled {
		background-color: var(--color-blue-500);
	}
`;
