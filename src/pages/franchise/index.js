import { useRouter } from "next/router";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import DescContent from "@/components/DescContent";
import SlideContent from "@/components/SlideContent";
import CheckContent from "@/components/CheckContent";
import background from "@/assets/franchise/franchise.png";
import {
  franchiseMainContentList,
  franchisePageContentList,
  franchiseCheckContentList,
} from "@/constants/franchise";

const Franchise = () => {
  const router = useRouter();
  const navigateToInquiryPage = () => router.push("/inquiry");

  return (
    <FranchiseContainer>
      <MainContent
        image={background}
        headline={
          <>
            다른 고민없이
            <br />
            음식 조리에만 집중하세요
          </>
        }
        text="입점 신청하기"
        onClick={navigateToInquiryPage}
        color="main"
      />
      <DescContent
        label={franchisePageContentList.label}
        headline={franchisePageContentList.headline}
        desc={franchisePageContentList.desc}
        contents={franchisePageContentList.contents}
      />
      <SlideContent list={franchiseMainContentList} />
      <CheckContent
        list={franchiseCheckContentList}
        onClick={navigateToInquiryPage}
      />
    </FranchiseContainer>
  );
};

const FranchiseContainer = styled.main``;

export default Franchise;
