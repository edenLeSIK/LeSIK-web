import styled from "styled-components";
import Button from "../Button";
import { purple, contentBackground, lineColor2 } from "@/styles/theme";

const DescContent = ({
  color,
  label,
  headline,
  text,
  onClick,
  contents,
  desc,
}) => {
  return (
    <SectionContainer color={color}>
      <div className="content">
        <div className="headline-wrapper">
          <h6>{label}</h6>
          <h2 className="headline">{headline}</h2>
          <h5 className="description">{desc}</h5>
          <div className="button-wrapper web">
            {text && (
              <Button
                color="purple"
                text={text}
                onClick={onClick}
                className="hide-on-mobile"
              />
            )}
          </div>
        </div>
        <div className="content-wrapper">
          {contents.map((content) => (
            <div className="content-item" key={content.headline}>
              <h3 className="sub-headline">{content.headline}</h3>
              <p className="text">{content.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="button-wrapper mobile-button">
        {text && (
          <Button
            color="purple"
            text={text}
            onClick={onClick}
            className="only-on-mobile"
          />
        )}
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 120px 4.44vw;
  background: ${(props) => props.color === "on" && `${contentBackground}`};

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 40px 4.44vw;
  }

  .content {
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-justify-content: space-between;
    justify-content: space-between;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
      row-gap: 40px;
    }

    h6 {
      margin-left: 3px;
      color: ${purple};
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        font-size: 0.6666666667rem;
        line-height: 1;
      }
    }

    .headline-wrapper {
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: flex-start;
      align-items: flex-start;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
      width: 25vw;
      row-gap: 16px;
      white-space: normal;
      word-break: keep-all;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
      }

      .headline {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0.01rem;
        text-transform: uppercase;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 2.6666666667rem;
        }
      }

      .description {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 1rem;
          line-height: 1.25;
        }
      }
    }

    .content-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      column-gap: 2.22vw;
      row-gap: 64px;
      align-items: flex-start;
      width: 50vw;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
        grid-template-columns: 1fr;
        row-gap: 35px;
      }

      .content-item {
        position: relative;
        display: -webkit- flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        padding-left: 20px;
        border-left: 1.5px solid ${lineColor2};

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          /* margin-left: 5.5583333333vw;
          margin-right: 5.5583333333vw; */
        }

        .sub-headline {
          color: #4d4d4d;
          font-size: 2rem;
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: 0.04rem;
          text-transform: uppercase;

          @media screen and (max-width: 939px) and (min-width: 767px),
            screen and (max-width: 766px) {
            font-size: 1.3333333333rem;
          }
        }

        .text {
          margin: 40px 0 0;
          color: #808080;
          line-height: 1.7;
          white-space: normal;
          word-break: keep-all;

          @media screen and (max-width: 939px) and (min-width: 767px),
            screen and (max-width: 766px) {
            margin: 16px 0 0;
            font-size: 0.7777777778rem;
          }
        }
      }
    }
  }

  .mobile-button {
    margin: 0 auto;
  }

  .button-wrapper {
    max-width: 200px;
    margin-top: 30px;
  }

  .web {
    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: none;
    }
  }
`;

export default DescContent;
