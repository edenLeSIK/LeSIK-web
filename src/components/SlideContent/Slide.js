import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { white, main, lineColor2, gray } from "@/styles/theme";

const Slide = ({ contents }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  return (
    <SliderContainer {...settings}>
      {contents.map((el, index) => (
        <div className="slide-content" key={el.headline}>
          <div className="number">{"0" + (index + 1)}</div>
          <div className="item">
            <h3 className="item-headline">{el.headline}</h3>
            <p className="text">{el.text}</p>
          </div>
        </div>
      ))}
    </SliderContainer>
  );
};

const SliderContainer = styled(Slider)`
  display: flex;
  flex-direction: row;
  width: 55vw !important;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    flex-direction: column;
    width: 70vw !important;
  }

  .slick-slide {
    position: relative;
    top: 0;
    width: 100% !important;
  }

  .slide-content {
    display: -webkit- flex !important;
    display: flex !important;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    align-items: center;
    width: auto !important;
    max-width: 900px;
    height: 250px;
    margin: 25px 20px;
    padding: 1.5rem;
    border-radius: 30px;
    background: ${white};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: grab;

    @media (min-width: 940px) and (max-width: 1439px) {
      height: 220px;
      margin: 20px 20px;
      padding: 1.25rem;
    }

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      flex-direction: column;
      height: auto;
      padding: 50px 20px;
    }

    .number {
      width: 20%;
      color: ${main};
      text-align: center;
      font-size: 2rem;

      @media (min-width: 940px) and (max-width: 1439px) {
        font-size: 1.875rem;
      }

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        margin-bottom: 20px;
        font-size: 1.75rem;
      }
    }

    .item {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      max-width: 80%;
      border-left: 1px solid ${lineColor2};
      padding-left: 30px;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        padding-top: 30px;
        padding-left: 0 !important;
        border-left: none !important;
        border-top: 1px solid ${lineColor2};
      }

      .item-headline {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 0.95;
        letter-spacing: 0.04rem;
        text-transform: uppercase;

        @media (min-width: 940px) and (max-width: 1439px) {
          font-size: 1.375rem;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 1.25rem;
          text-align: center;
        }
      }

      .text {
        color: ${gray};
        line-height: 1.5;

        @media (min-width: 940px) and (max-width: 1439px) {
          font-size: 0.9rem;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 0.875rem;
          text-align: center;
        }
      }
    }
  }

  .slick-dots {
    position: static;
    display: flex;
    justify-content: center;
    width: auto;
    margin: auto 0;
    z-index: 0;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: -webkit- flex !important;
      display: flex !important;
      flex-direction: row;
      justify-content: center;
      margin: 0;
      margin-top: 30px;
    }

    li {
      display: block;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        display: flex;
      }

      button {
        display: block;
        width: 3px;
        height: 25px;
        background: #c3e7e0;
        border-radius: 10px;
        cursor: pointer;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          width: 20px;
          height: 20px;
          margin: 0;
        }
      }

      button:before {
        display: none;
      }
    }

    li + li {
      margin-top: 20px;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        margin: 0;
        margin-left: 20px;
      }
    }

    .slick-active {
      button {
        background-color: ${main};
      }
    }
  }

  .slick-center {
    .slide-content {
      transform: scale(1);
    }

    .item {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      max-width: 80%;
      border-left: 1px solid ${lineColor2};
      padding-left: 30px;
      transform: scale(1);
    }
  }

  .slick-slide:not(.slick-center) {
    .slide-content {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;

export default Slide;
