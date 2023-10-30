import { useRouter } from "next/router";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import CardContent from "@/components/CardContent";
import SlideContent from "@/components/SlideContent";
import AdsContent from "@/components/AdsContent";
import main from "@/assets/main/main_image.png";
import { customerMainContentList } from "@/constants/customer";
import {
  franchiseMainContentList,
  franchiseCheckContentList,
} from "@/constants/franchise";
import CheckContent from "@/components/CheckContent";

const Home = () => {
  const router = useRouter();
  const navigateToMakeatPage = () => router.push("/makeat");
  const navigateToCustomerPage = () => router.push("/customer");
  const navigateToFranchisePage = () => router.push("/franchise");
  const navigateToInquiryPage = () => router.push("/inquiry");

  return (
    <HomeContainer>
      <MainContent
        image={main}
        headline={
          <>
            <span className="cooksup">Cooksup</span>
            <br />
            새로운 푸드 솔루션,
            <br />
            미래의 혁신적인 푸드서비스
          </>
        }
        desc={
          <>
            <span className="cooksup letter-spacing">Cooksup</span> 솔루션을
            통해 구축된 헬스 & 웰니스 푸드 브랜드를 소개합니다.
          </>
        }
        onClick={navigateToMakeatPage}
        text={<span className="makeat letter-spacing">Makeat</span>}
        color="main"
      />
      <CardContent
        list={customerMainContentList}
        text="더 알아보기"
        onClick={navigateToCustomerPage}
      />
      <SlideContent
        list={franchiseMainContentList}
        text="더 알아보기"
        onClick={navigateToFranchisePage}
      />
      <CheckContent
        list={franchiseCheckContentList}
        onClick={navigateToInquiryPage}
      />
      <AdsContent />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  width: 100vw;
  min-height: 100vh;

  figure {
    display: flex;
    align-items: center;

    img {
      width: auto;
      object-fit: contain;
      object-position: 0 50%;
    }
  }
`;

export default Home;
