import Footer from '../components/Footer';
import Header from '../components/Header';
import { MOCK_PROJECTS } from './MockProjects';

type Props = {};

const ProjectsPage = (props: Props) => {
	return (
		<>
			<Header />
			<pre>{JSON.stringify(MOCK_PROJECTS, null, 2)}</pre>
			<Footer />
		</>
	);
};
export default ProjectsPage;
