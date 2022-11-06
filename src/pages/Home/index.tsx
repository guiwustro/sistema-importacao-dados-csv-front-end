import AddOperatorForm from "../../components/AddOperatorForm";
import Header from "../../components/Header";
import OperatorsClientsTable from "../../components/OperatorsClientsTable";
import { Container, ContainerRow, Main } from "./styles";
import UploadCSVFile from "../../components/UploadCSVFile";
import ExportCSVFile from "../../components/ExportCSVFile";

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<Main>
					<ContainerRow>
						<AddOperatorForm />
						<UploadCSVFile />
						<ExportCSVFile />
					</ContainerRow>
					<OperatorsClientsTable />
				</Main>
			</Container>
		</>
	);
};

export default Home;
