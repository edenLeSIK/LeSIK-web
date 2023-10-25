import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../Button";
import { background, main, white } from "@/styles/theme";

const AdsContent = () => {
  const router = useRouter();
  const navigateToInquiryPage = () => router.push("/inquiry");

  return (
    <ContentContainer>
      <div className="content-wrapper">
        <h2 className="headline cooksup">
          Ready
          <br />
          to
          <br />
          <span className="cooksup">Cooksup</span>?
        </h2>
        <div className="button-wrapper">
          <Button
            text="바로 참여하기"
            color="yellow"
            onClick={navigateToInquiryPage}
          />
        </div>
      </div>
    </ContentContainer>
  );
};

const ContentContainer = styled.section`
  padding: 100px 4.44vw;
  background: ${background};

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 48px 5.33vw;
  }

  .content-wrapper {
    position: relative;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 120px 0;
    border-radius: 24px;
    overflow: hidden;
    background: ${main};

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      padding: 64px 0;
    }

    .headline {
      width: 44.45vw;
      margin: 32px 0;
      text-align: center;
      color: ${white};
      font-size: 5rem;
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: 0.01rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 66.5933333333vw;
        font-size: 2.5rem;
      }
    }
  }

  .button-wrapper {
    width: 160px;
  }
`;

export default AdsContent;
