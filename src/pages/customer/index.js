import { useRouter } from "next/router";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import DescContent from "@/components/DescContent";
import CardContent from "@/components/CardContent";
import background from "@/assets/customer/customer.png";
import {
  customerPageContentList,
  customerMainContentList,
} from "@/constants/customer";

const Customer = () => {
  const router = useRouter();
  const navigateToMakeatPage = () => router.push("/makeat");

  return (
    <CustomerContainer>
      <MainContent
        image={background}
        headline={
          <>
            당신에게 맞춘 건강식단,
            <br />
            <span className="makeat">Makeat</span>
          </>
        }
        text={<span className="makeat">Makeat</span>}
        onClick={navigateToMakeatPage}
        color="makeat"
      />
      <DescContent
        label={customerPageContentList.label}
        headline={customerPageContentList.headline}
        desc={customerPageContentList.desc}
        contents={customerPageContentList.contents}
      />
      <CardContent list={customerMainContentList} color="on" />
    </CustomerContainer>
  );
};

const CustomerContainer = styled.main``;

export default Customer;
