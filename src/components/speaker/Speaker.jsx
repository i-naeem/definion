import { MegaphoneFill as MegaphoneFillIcon } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useRef } from 'react';

const IconButton = styled(Button)`
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  transition: background-color 250ms ease-in-out;
  box-shadow: none !important;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 38px;
  width: 38px;
  padding: 0;

  &:hover {
    background-color: var(--bs-dark);
    color: var(--bs-white);
  }

  & .icon {
    font-size: 1.3rem;
    transform: scaleX(-1);
  }
`;

export const Speaker = ({ src }) => {
  const audioRef = useRef();

  const handlePlay = (event) => {
    audioRef.current.play();
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={src} />
      </audio>
      <IconButton variant="none" onClick={handlePlay}>
        <MegaphoneFillIcon className="icon" />
      </IconButton>
    </>
  );
};
