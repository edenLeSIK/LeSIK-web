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
  const { t } = useTranslation();

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
            {t("common:home.headline")}
          </Trans>
        }
        desc={
          <Trans
            i18nKey="home.description"
            components={{ span: <span className="cooksup" /> }}
          >
            {t("common:home.description")}
          </Trans>
        }
        onClick={navigateToMakeatPage}
        text={<span className="makeat letter-spacing">Makeat</span>}
        color="makeat"
      />
      <CardContent
        list={t("customer:customerMainContentList", { returnObjects: true })}
        text={t("common:button.more")}
        onClick={navigateToCustomerPage}
      />
      <SlideContent
        list={t("franchise:franchiseMainContentList", {
          returnObjects: true,
        })}
        text={t("common:button.more")}
        onClick={navigateToFranchisePage}
      />
      <CheckContent
        list={t("franchise:franchiseCheckContentList", { returnObjects: true })}
        onClick={(selectedIndexes) => {
          if (selectedIndexes.length > 0) {
            const selectedOption = selectedIndexes.map(
              (index) =>
                t("franchise:franchiseCheckContentList", {
                  returnObjects: true,
                }).equipments[index]
            );
            const optionNames = selectedOption.map((option) => option.name);
            navigateToInquiryPage(optionNames);
          }
        }}
      />
      <AdsContent
        onClick={navigateToInquiryPage}
        button={t("common:button.right")}
      />
    </HomeContainer>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "customer",
        "franchise",
      ])),
    },
  };
};

const HomeContainer = styled.main`
  width: 100vw;
  min-height: 100vh;

  figure {
    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: flex;
      align-items: center;

      img {
        width: auto;
        object-fit: contain;
        object-position: 0 50%;
      }
    }
  }
`;

export default Home;
