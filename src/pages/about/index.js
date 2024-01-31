import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import MainSection from "@/components/MainContent";
import NewsFeed from "@/components/NewsFeed";
import about from "@/assets//about/about.png";

const About = () => {
  const { t } = useTranslation("main");
  const { t: newsT } = useTranslation("news");

  return (
    <AboutContainer>
      <MainSection
        image={about}
        headline={<Trans i18nKey="about.headline">{t("about.headline")}</Trans>}
      />
      <NewsFeed t={newsT} />
    </AboutContainer>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["main", "news"])),
    },
  };
};

const AboutContainer = styled.main`
  section {
    height: 75vh;
  }
`;

export default About;
