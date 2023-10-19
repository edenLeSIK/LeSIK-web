import styled from "styled-components";
import MainSection from "@/components/MainContent";
import NewsFeed from "@/components/NewsFeed";
import about from "@/assets//about/about.png";

const About = () => {
  return (
    <AboutContainer>
      <MainSection
        image={about}
        headline={
          <>
            안녕하세요.
            <br />
            주식회사 래식입니다
          </>
        }
      />
      <NewsFeed />
    </AboutContainer>
  );
};

const AboutContainer = styled.main`
  section {
    height: 75vh;
  }
`;

export default About;
