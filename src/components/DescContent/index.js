import styled from "styled-components";
import Button from "../Button";
import Desc from "./Desc";
import { purple, contentBackground } from "@/styles/theme";

const DescContent = ({
  color,
  label,
  headline,
  text,
  onClick,
  contents,
  desc,
}) => {
  const styledHeadline = headline.replace(/Makeat|cooksup/g, (match) => {
    if (match === "Makeat") {
      return '<span class="makeat">Makeat</span>';
    } else if (match === "cooksup") {
      return '<span class="cooksup">cooksup</span>';
    }
  });

  return (
    <SectionContainer color={color}>
      <div className="content">
        <div className="headline-wrapper">
          <h6>{label}</h6>
          <h2
            className="headline"
            dangerouslySetInnerHTML={{ __html: styledHeadline }}
          />
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
        <Desc contents={contents} />
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
        -webkit-align-items: center;
        align-items: center;
        width: 100%;
      }

      h6 {
        margin-left: 3px;
        color: ${purple};
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
        text-transform: uppercase;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 0.875rem;
          line-height: 1;
        }
      }

      .headline {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0.01rem;
        text-transform: uppercase;

        @media (min-width: 1280px) and (max-width: 1439px) {
          font-size: 3rem;
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          font-size: 2.85rem;
        }

        @media (min-width: 940px) and (max-width: 1023px) {
          font-size: 2.5rem;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 2rem;
          text-align: center;
        }
      }

      .makeat {
        vertical-align: text-bottom;
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
