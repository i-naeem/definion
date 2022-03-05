import { Speaker } from '../speaker/Speaker';

export const Phonetic = ({ text, audio }) => {
  return (
    <section className="d-flex align-items-center">
      <h5 className="text-muted fs-4 mb-0 mx-2">{text}</h5>
      <Speaker src={audio} />
    </section>
  );
};
