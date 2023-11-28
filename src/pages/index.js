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
  const navigateToInquiryPage = (selectedOptions) => {
    router.push({
      pathname: "/inquiry",
      query: { options: selectedOptions },
    });
  };

  return (
    <HomeContainer>
      <MainContent
        image={main}
        headline={
          <>
            <span className="cooksup">Cooksup</span>
            <br />
            맞춤형 푸드 솔루션,
            <br />
            미래의 푸드 서비스를 시작하세요.
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
        color="makeat"
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
        onClick={(selectedIndexes) => {
          if (selectedIndexes.length > 0) {
            const selectedOption = selectedIndexes.map(
              (index) => franchiseCheckContentList.equipments[index]
            );
            const optionNames = selectedOption.map((option) => option.name);
            navigateToInquiryPage(optionNames);
          }
        }}
      />
      <AdsContent onClick={navigateToInquiryPage} />
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
