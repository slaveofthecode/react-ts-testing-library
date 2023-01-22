import Footer from '../components/Footer';
import Header from '../components/Header';
import { MOCK_PROJECTS } from './MockProjects';

type Props = {};

const ProjectsPage = (props: Props) => {
	const names = {
		name: 'John',
		age: 30,
		car: null,
	};

	const a = [1, 2, 3];
	const arrayTest = [
		{
			name: 'John',
			age: 34,
			car: null,
		},
		{
			name: 'Josua',
			age: 21,
			car: null,
		},
	];

	if (a.length > 0) {
		console.log('a is not empty');
	}

	const fnTest = (a: number) => {
		return a + 9;
	};

	return (
		<>
			<Header />
			<pre>{JSON.stringify(MOCK_PROJECTS, null, 2)}</pre>
			<Footer />
		</>
	);
};
export default ProjectsPage;
