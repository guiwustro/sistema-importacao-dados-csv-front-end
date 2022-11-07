import styled from "styled-components";

export const ContainerMain = styled.div`
	max-width: 100%;
	overflow: auto;
`;
export const Container = styled.div`
	grid-area: tableMain;
	overflow: auto;
	max-width: 320px;
	width: 90%;
	max-width: 90%;
	min-width: 800px;
	table {
		overflow: auto;
	}
	thead {
		overflow: auto;
	}
	td {
		border: 1px solid var(--color-blue-500);
	}
	tr {
		text-align: center;
	}
`;

export const Table = styled.table`
	table-layout: fixed;
	table-layout: fixed;

	th {
		height: 35px;
		width: 100px;
		position: sticky;
	}
`;

export const THPrimaryGreen = styled.th`
	background-color: var(--color-green-500);
	font-size: 1.2rem;
`;

export const THPrimaryBlue = styled.th`
	background-color: var(--color-blue-500);
	font-size: 1.2rem;
`;

export const THeadSecondary = styled.tr`
	height: 48px;
	& > .table-th--green {
		background-color: var(--color-green-300);
		width: 200px;
	}
	& > .table-th--blue {
		background-color: var(--color-blue-300);
		width: 200px;
	}
	& > th:nth-child(3) {
		width: 250px;
	}
	& > th:nth-child(4) {
		width: 100px;
	}
	& > th:nth-child(5) {
		width: 100px;
	}
`;

export const TdOperator = styled.td`
	position: relative;
`;
export const ContainerOperatorName = styled.div`
	display: flex;
	max-width: 200px;
	gap: 0.5rem;
	text-align: center;
	justify-content: center;
	height: 100%;
	& > button {
		position: absolute;
		top: 0.2rem;
		right: 0.4rem;
		svg {
			fill: var(--color-gray-700);
			:hover {
				fill: var(--color-gray-300);
			}
		}
		font-size: 1rem;
	}
`;
