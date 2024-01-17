import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import DescContent from "@/components/DescContent";
import SlideContent from "@/components/SlideContent";
import CheckContent from "@/components/CheckContent";
import background from "@/assets/franchise/franchise.png";

const Franchise = () => {
  const router = useRouter();
  const { t } = useTranslation("franchise");

  const navigateToInquiryPage = () => router.push("/inquiry");

  return (
    <FranchiseContainer>
      <MainContent
        image={background}
        headline={
          <Trans
            i18nKey="franchise.headline"
            components={{ span: <span className="cooksup" /> }}
          >
            {t("franchise.headline")}
          </Trans>
        }
        text={<Trans i18nKey="franchise.button">{t("franchise.button")}</Trans>}
        onClick={navigateToInquiryPage}
        color="main"
      />

      <DescContent
        label={t("franchisePageContentList.label")}
        headline={t("franchisePageContentList.headline")}
        contents={t("franchisePageContentList.contents", {
          returnObjects: true,
        })}
      />
      <SlideContent
        list={t("franchiseMainContentList", { returnObjects: true })}
      />
      <CheckContent
        list={t("franchiseCheckContentList", { returnObjects: true })}
        onClick={navigateToInquiryPage}
      />
    </FranchiseContainer>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["franchise", "main"])),
    },
  };
};

const FranchiseContainer = styled.main``;

export default Franchise;
