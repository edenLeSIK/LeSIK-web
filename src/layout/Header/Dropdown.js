import styled from "styled-components";

const Dropdown = () => {
  return (
    <Container>
      <li>한국어</li>
      <li>English</li>
    </Container>
  );
};

const Container = styled.ul`
  li {
    list-style: none;
  }
`;

export default Dropdown;
