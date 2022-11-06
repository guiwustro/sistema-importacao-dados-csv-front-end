import AddOperatorForm from "../../components/AddOperatorForm";
import Header from "../../components/Header";
import { Container, Main } from "./styles";

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<Main>
					<AddOperatorForm />
				</Main>
			</Container>
		</>
	);
};

export default Home;
