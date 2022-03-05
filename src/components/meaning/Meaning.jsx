import React from 'react';

export const Meaning = (props) => {
  const { partOfSpeech, definitions } = props;

  console.log(definitions);
  return (
    <section>
      <h4>{partOfSpeech}</h4>
      {definitions.map(({ definition, example }) => {
        return (
          <article className="mx-2 mb-4">
            <h6>{definition}</h6>
            <p className="fst-italic text-muted px-2">{example}</p>
          </article>
        );
      })}
    </section>
  );
};
