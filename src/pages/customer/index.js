import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import DescContent from "@/components/DescContent";
import CardContent from "@/components/CardContent";
import background from "@/assets/customer/customer.png";

const Customer = () => {
  const router = useRouter();
  const { t: mainT } = useTranslation("main");
  const { t: customerT } = useTranslation("customer");

  const navigateToMakeatPage = () => router.push("/makeat");

  return (
    <CustomerContainer>
      <MainContent
        image={background}
        headline={
          <Trans
            i18nKey="customer.headline"
            components={{ span: <span className="makeat" /> }}
          >
            {mainT("customer.headline")}
          </Trans>
        }
        text={
          <Trans
            i18nKey="customer.button"
            components={{ span: <span className="makeat" /> }}
          >
            {mainT("customer.button")}
          </Trans>
        }
        onClick={navigateToMakeatPage}
        color="makeat"
      />
      <DescContent
        label={customerT("customerPageContentList.label")}
        headline={customerT("customerPageContentList.headline")}
        contents={customerT("customerPageContentList.contents", {
          returnObjects: true,
        })}
      />
      <CardContent
        list={customerT("customerMainContentList", { returnObjects: true })}
        color="on"
      />
    </CustomerContainer>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["main", "customer"])),
    },
  };
};

const CustomerContainer = styled.main``;

export default Customer;
