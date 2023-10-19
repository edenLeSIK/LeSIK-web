import { useRouter } from "next/router";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import CardContent from "@/components/CardContent";
import main from "@/assets/main/main_image.png";
import { customerMainContentList } from "@/constants/customer";

const Home = () => {
  const router = useRouter();
  const navigateToMakeatPage = () => router.push("/makeat");
  const navigateToCustomerPage = () => router.push("/customer");

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
        desc="건강을 위한, 나만을 위한 FOOD, MAKEAT!"
        onClick={navigateToMakeatPage}
        text="MAKEAT"
        color="main"
      />
      <CardContent
        list={customerMainContentList}
        text="더 알아보기"
        onClick={navigateToCustomerPage}
      />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export default Home;
