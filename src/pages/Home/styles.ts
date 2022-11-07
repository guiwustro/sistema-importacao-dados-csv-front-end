import styled from "styled-components";

export const Container = styled.div`
	max-width: 1200px;
	display: flex;
	margin: 0 10px;
	@media (min-width: 1220px) {
		margin: 0 auto;
	}
`;

export const Main = styled.main`
	display: grid;
	grid-template-areas: "headerMain" "tableMain" "historic";
	padding-top: 50px;
	padding-right: 2rem;
	padding-left: 2rem;
	flex-direction: column;
	gap: 1rem;
	align-items: flex-start;
	overflow: auto;
	@media screen and (min-width: 1220px) {
		grid-template-areas: "headerMain historic" "tableMain historic";
	}
`;

export const ContainerRow = styled.div`
	grid-area: headerMain;
	display: flex;
	flex-direction: row;
	width: 90%;
	gap: 1.5rem;
	@media screen and (min-width: 768px) {
		justify-content: space-between;
	}
`;
