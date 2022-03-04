import styled from 'styled-components';

export const AppLayout = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;

  & main {
    flex-grow: 1;
  }
`;
