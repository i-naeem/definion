import { SearchForm } from '../components/Form/SearchForm';
import { Outlet, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export const Home = (props) => {
  const navigate = useNavigate();

  const onSearch = (searchWord) => {
    navigate('/search/' + searchWord);
  };

  return (
    <Container className="p-5 ">
      <section className="mb-3">
        <h1>Definion</h1>
        <p>A simple dictionary to see the defination of a word.</p>
      </section>

      <section className="mb-3">
        <SearchForm onSearch={onSearch} />
      </section>

      <section className="mb-3">
        <Outlet />
      </section>
    </Container>
  );
};
