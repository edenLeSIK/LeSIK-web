import styled from "styled-components";
import { lineColor2 } from "@/styles/theme";

const Desc = ({ contents }) => {
  return (
    <Container>
      {contents.map((content) => (
        <div className="content-item" key={content.headline}>
          <h3 className="sub-headline">{content.headline}</h3>
          <p className="text">{content.text}</p>
        </div>
      ))}
    </Container>
  );
};

export default Desc;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 50px;
  align-items: flex-start;
  width: 55vw;

  @media screen and (min-width: 1920px) {
    width: 50vw;
  }

  @media screen and (min-width: 1800px) {
    gap: 3rem;
  }

  @media screen and (min-width: 2000px) {
    gap: 5rem;
  }

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    width: 100%;
    grid-template-columns: 1fr;
    row-gap: 35px;
  }

  .content-item {
    display: -webkit- flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    min-height: 10rem;
    padding-left: 1.5rem;
    border-left: 1.5px solid ${lineColor2};

    @media screen and (min-width: 1800px) {
      justify-content: center;
      max-width: 500px;
    }

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      min-height: 2rem;
      padding-left: 20px;
    }

    .sub-headline {
      margin-bottom: 40px;
      color: #4d4d4d;
      font-size: 2rem;
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: 0.04rem;
      text-transform: uppercase;

      @media screen and(min-width: 940px) and (max-width: 1439px) {
        font-size: 1.75rem;
      }

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        margin-bottom: 15px;
        font-size: 1.3333333333rem;
      }
    }

    .text {
      color: #808080;
      line-height: 1.7;
      white-space: normal;
      word-break: keep-all;

      @media screen and (min-width: 940px) and (max-width: 1439px) {
        font-size: 0.9rem;
      }

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        font-size: 0.7777777778rem;
      }
    }
  }
`;
