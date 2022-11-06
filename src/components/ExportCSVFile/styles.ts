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
	&:hover {
		background-color: var(--color-blue-500);
	}
`;
