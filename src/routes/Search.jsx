import { Card } from 'react-bootstrap';
import { useSearch } from '../hooks/useSearch';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/loader/Loader';
import { Error } from '../components/error/Error';
import { Speaker } from '../components/speaker/Speaker';
import { Phonetic } from '../components/phonetic/Phonetic';

export const Search = (props) => {
  const { word } = useParams();
  const { loading, data: results, error } = useSearch(word);

  if (loading) return <Loader />;

  if (error) {
    return <Error message={error.message} />;
  }

  let result = {};
  let phonetic = {};

  if (results) {
    result = results[0];
    phonetic.text = result.phonetics.find((p) => p.text)?.text;
    phonetic.audio = result.phonetics.find((p) => p.audio)?.audio;
  }

  return (
    <Card>
      <Card.Header className="bg-white ">
        <h1 className="mx-2 mb-0 d-inline-block display-2">{result?.word}</h1>
        <Phonetic {...phonetic} />
      </Card.Header>
    </Card>
  );
};
