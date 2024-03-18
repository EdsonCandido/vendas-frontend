import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  border-top: 5px solid transparent;
  border-right: 5px solid #da2f37;
  border-left: 5px solid #da2f37;
  border-bottom: 5px solid #da2f37;
  border-radius: 50%;
  z-index: 15;
  animation: spin 0.8s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <Container/>
};

export default Spinner;
