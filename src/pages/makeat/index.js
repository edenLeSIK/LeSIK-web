import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import MakeatPc from "@/components/MakeatPc";
import MakeatMobile from "@/components/MakeatMobile";

const Makeat = () => {
  const { t } = useTranslation("makeat");

  return (
    <MakeatContainer>
      <MakeatPc
        headline={t("headline")}
        searchText={t("search")}
        appText={t("app_text")}
        downloadText={t("download_text")}
      />
      <MakeatMobile />
    </MakeatContainer>
  );
};
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["makeat"])),
    },
  };
};

const MakeatContainer = styled.main``;

export default Makeat;
