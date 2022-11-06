import styled from "styled-components";

export const Container = styled.div`
	background-color: var(--color-blue-700);
	height: 90px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.div`
	font-style: normal;
	font-weight: 700;
	color: var(--color-white);
	text-align: center;
	font-size: 1.5rem;
	@media (min-width: 768px) {
		font-size: 2rem;
	}
`;
