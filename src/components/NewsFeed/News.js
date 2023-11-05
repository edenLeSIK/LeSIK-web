import styled from "styled-components";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { darkGray, gray, main } from "@/styles/theme";

const News = ({ news }) => {
  return (
    <Styler>
      <NewsContainer>
        <a href={news.link} target="_blank">
          <h6 className="date">{news.date}</h6>
          <div className="contents">
            <h5 className="title">{news.title}</h5>
            <div className="info">
              <span className="magazine">{news.magazine}</span> -{" "}
              <span className="summary">{news.summary}</span>
            </div>
          </div>
          <FaArrowAltCircleRight className="icon" />
        </a>
      </NewsContainer>
    </Styler>
  );
};

const Styler = styled.div`
  &:hover {
    opacity: 0.7;
  }

  &:hover .icon {
    fill: ${main};
    transform: rotate(-45deg);
  }
`;

const NewsContainer = styled.article`
  border-bottom: 1px solid ${gray};

  a {
    display: grid;
    grid-template: auto auto/1fr auto 1fr;
    padding: 32px 0;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      grid-template: auto auto/auto auto 1fr;
      padding: 16px 0;
    }

    .date {
      margin: 5px 8px 0 0;
      align-self: start;
      justify-self: start;
      color: ${gray};
      font-size: 0.8888888889rem;
      font-weight: 400;
      line-height: 1.5 !important;
      letter-spacing: 0.1rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
        font-size: 0.6666666667rem;
      }

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
        font-size: 0.6666666667rem;
      }
    }

    .contents {
      width: 44.45vw;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 62.2266666667vw;
      }

      .title {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 최대 표시할 줄 수 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 1rem;
          line-height: 1.25;
        }
      }

      .info {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 24px 0 0;
        color: ${gray};
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.25;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 0.6666666667rem;
          line-height: 1.5;
          -webkit-line-clamp: 2;
        }
      }

      .magazine {
        margin-bottom: 24px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.35;
        letter-spacing: 0;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-weight: 400;
          font-size: 0.6666666667rem;
          line-height: 1.5;
        }
      }

      .summary {
        color: ${darkGray};
      }
    }
  }

  .icon {
    width: 50px;
    height: 50px;
    justify-self: end;
    align-self: start;
    margin-right: 8px;
    fill: #4a4a5a;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export default News;
