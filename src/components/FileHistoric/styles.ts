import styled from "styled-components";

export const ContainerFileHistoric = styled.div`
	grid-area: historic;
	width: 220px;
	border: 1px solid var(--color-blue-700);
	border-radius: 1rem;

	padding: 0.5rem 1rem;
	& > ul > .historic__file {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		/* border: 1px solid var(--color-blue-700); */
		padding: 0.6rem;
		border-radius: 1rem;
		height: 70px;
		position: relative;
		& > p {
			width: 90%;
			text-align: center;
			word-wrap: break-word;
		}
		& > button {
			position: absolute;
			top: 26px;
			right: 0;
			& > svg {
				fill: var(--color-gray-700);
				:hover {
					fill: var(--color-gray-300);
				}
			}
		}
	}
`;

export const NoFileMessage = styled.p`
	text-align: center;
`;
