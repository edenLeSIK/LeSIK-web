import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { white, main, lineColor2, gray } from "@/styles/theme";

const ResponsiveSlide = ({ contents }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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

const PrevArrow = (props) => (
  <RiArrowLeftSLine {...props} className="arrow prev" data-custom="true" />
);

const NextArrow = (props) => (
  <RiArrowRightSLine {...props} className="arrow next" data-custom="true" />
);

const SliderContainer = styled(Slider)`
  width: 60vw;

  .arrow {
    color: ${gray};
    font-size: 3rem;
    cursor: pointer;

    @media (min-width: 320px) and (max-width: 479px) {
      font-size: 1.5rem;
    }
  }

  .arrow.prev {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    left: -50px;
  }

  .arrow.next {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    right: -50px;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-content {
    display: -webkit- flex !important;
    display: flex !important;
    -webkit-flex-direction: row;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    justify-content: space-between;
    width: auto !important;
    max-width: 300px;
    height: 100%;
    min-height: 300px;
    margin: 25px 10px;
    padding: 50px 20px;
    border-radius: 30px;
    background: ${white};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: grab;

    @media (min-width: 320px) and (max-width: 479px) {
      justify-content: center;
      margin: 20px 5px;
      padding: 40px 10px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .number {
      width: 20%;
      margin-bottom: 20px;
      color: ${main};
      text-align: center;
      font-size: 1.75rem;

      @media (min-width: 320px) and (max-width: 479px) {
        font-size: 1.375rem;
      }
    }

    .item {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      max-width: 80%;
      padding-top: 30px;
      border-top: 1px solid ${lineColor2};

      .item-headline {
        font-size: 1.25rem;
        text-align: center;
        font-weight: 700;
        line-height: 0.95;
        letter-spacing: 0.04rem;
        text-transform: uppercase;

        @media (min-width: 320px) and (max-width: 479px) {
          font-size: 1.125rem;
        }
      }

      .text {
        color: ${gray};
        font-size: 0.875rem;
        text-align: center;
        line-height: 1.5;

        @media (min-width: 320px) and (max-width: 479px) {
          font-size: 0.8rem;
        }
      }
    }
  }

  .slick-dots {
    position: static;
    display: -webkit- flex !important;
    display: flex !important;
    justify-content: center;
    flex-direction: row;
    width: auto;
    margin: auto 0;
    margin-top: 30px;

    @media (min-width: 320px) and (max-width: 479px) {
      margin-top: 20px;
    }

    li {
      display: flex;
      width: auto;

      button {
        display: block;
        width: 30px !important;
        height: 7px !important;
        margin: 0;
        background: #c3e7e0;
        border-radius: 10px;
        cursor: pointer;

        @media (min-width: 320px) and (max-width: 479px) {
          width: 10px !important;
        }
      }

      button:before {
        display: none;
      }
    }

    li + li {
      margin-left: 20px;
    }

    .slick-active {
      button {
        background-color: ${main};
      }
    }
  }
`;

export default ResponsiveSlide;
