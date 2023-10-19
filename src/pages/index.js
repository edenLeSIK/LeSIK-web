import { useRouter } from "next/router";
import MainContent from "@/components/MainContent";
import CardContent from "@/components/CardContent";
import styled from "styled-components";
import main from "@/assets/main/main_image.png";

const Home = () => {
  const router = useRouter();
  const navigateToMakeatPage = () => router.push("/makeat");

  return (
    <HomeContainer>
      <MainContent
        image={main}
        headline={
          <>
            건강식의 개념을 바꾸다!
            <br />
            ​가장 진보한 미래의
            <br />
            개인화 헬스케어 푸드 서비스
          </>
        }
        desc="건강을 위한, 나만index을 위한 FOOD, MAKEAT!"
        onClick={navigateToMakeatPage}
        text="MAKEAT"
        color="main"
      />
      <CardContent />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export default Home;
