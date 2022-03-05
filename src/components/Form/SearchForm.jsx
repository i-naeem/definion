import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const SearchForm = ({ onSearch }) => {
  const params = useParams();
  const [word, setWord] = useState(() => params.word || '');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (word === '') return;

    onSearch(word);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          size="lg"
          value={word}
          placeholder="Enter a word such as 'love'"
          onChange={(event) => setWord(event.target.value)}
        />

        <Button type="submit" size="lg">
          Define
        </Button>
      </InputGroup>
    </Form>
  );
};
