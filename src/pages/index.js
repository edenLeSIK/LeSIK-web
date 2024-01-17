import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import CardContent from "@/components/CardContent";
import SlideContent from "@/components/SlideContent";
import CheckContent from "@/components/CheckContent";
import AdsContent from "@/components/AdsContent";
import main from "@/assets/main/main_image.png";

const Home = () => {
  const router = useRouter();
  const { t: mainT } = useTranslation("main");
  const { t: customerT } = useTranslation("customer");
  const { t: franchiseT } = useTranslation("franchise");

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
          <Trans
            i18nKey="home.headline"
            components={{ span: <span className="cooksup" /> }}
          >
            {mainT("home.headline")}
          </Trans>
        }
        desc={
          <Trans
            i18nKey="home.description"
            components={{ span: <span className="cooksup" /> }}
          >
            {mainT("home.description")}
          </Trans>
        }
        onClick={navigateToMakeatPage}
        text={<span className="makeat letter-spacing">Makeat</span>}
        color="makeat"
      />
      <CardContent
        list={customerT("customerMainContentList", { returnObjects: true })}
        text="더 알아보기"
        onClick={navigateToCustomerPage}
      />
      <SlideContent
        list={franchiseT("franchiseMainContentList", {
          returnObjects: true,
        })}
        text="더 알아보기"
        onClick={navigateToFranchisePage}
      />
      <CheckContent
        list={franchiseT("franchiseCheckContentList", { returnObjects: true })}
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

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "main",
        "customer",
        "franchise",
      ])),
    },
  };
};

const HomeContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export default Home;
