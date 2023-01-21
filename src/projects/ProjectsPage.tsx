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

  return (
    <>
      <Header />
      <pre>{JSON.stringify(MOCK_PROJECTS, null, 2)}</pre>
      <Footer />
    </>
  );
};
export default ProjectsPage;
