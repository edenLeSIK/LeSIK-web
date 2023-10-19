import MainContent from "@/components/MainContent";
import CardContent from "@/components/CardContent";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <MainContent />
      <CardContent />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export default Home;
