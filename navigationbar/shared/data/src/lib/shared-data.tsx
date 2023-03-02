import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedDataProps {}

const StyledSharedData = styled.div`
  color: pink;
`;

export function SharedData(props: SharedDataProps) {
  return (
    <StyledSharedData>
      <h1>Welcome to SharedData!</h1>
    </StyledSharedData>
  );
}

export default SharedData;
