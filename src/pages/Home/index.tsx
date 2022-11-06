import AddOperatorForm from "../../components/AddOperatorForm";
import Header from "../../components/Header";
import OperatorsClientsTable from "../../components/OperatorsClientsTable";
import { Container, Main } from "./styles";

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<Main>
					<AddOperatorForm />
					<OperatorsClientsTable />
				</Main>
			</Container>
		</>
	);
};

export default Home;
