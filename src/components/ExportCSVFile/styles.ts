import { CSVLink } from "react-csv";
import styled from "styled-components";

export const CSVLinkStyled = styled(CSVLink)`
	background-color: var(--color-blue-700);
	color: var(--color-white);
	border-radius: 1rem;
	font-size: 1.1rem;
	padding: 0.7rem 1rem;
	font-weight: 700;
	text-decoration: none;
	position: relative;
	&:hover {
		background-color: var(--color-blue-500);
	}
	&:hover:enabled {
		background-color: var(--color-blue-500);
	}
	&::before {
		content: attr(data-hover);
		display: block;
		visibility: hidden;
		opacity: 0;
		font-size: 12px;
		/* background-color: var(--color-gray-300); */
		background-color: var(--color-blue-300);
		color: #fff;
		color: var(--color-gray-500);
		text-align: center;
		padding: 4px 10px 4px 10px;
		transition: opacity 0.5s ease-in-out;
		position: absolute;
		min-width: 267px;
		z-index: 1;
		border-radius: 1rem;
		right: -84px;
		bottom: 50px;
	}
	&:hover:before {
		opacity: 1;
		z-index: 999;

		visibility: visible;
	}
`;
