import { useParams } from 'react-router-dom';

export const Search = (props) => {
  const { word } = useParams();
  return <h1>{word}</h1>;
};
