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
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: flex-start;
`;
