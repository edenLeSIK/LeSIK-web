import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import {
  slideBackground,
  cardBackground,
  main,
  lightGray,
} from "@/styles/theme";

const Check = ({ contents, onClick }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleOption = (i) => {
    if (activeIndexes.includes(i)) {
      setActiveIndexes((prevIndexes) =>
        prevIndexes.filter((index) => index !== i)
      );
    } else {
      setActiveIndexes((prevIndexes) => [...prevIndexes, i]);
    }
  };

  const isButtonDisabled = activeIndexes.length === 0;

  return (
    <CheckContainer>
      {contents.map((option, i) => (
        <div
          key={i}
          className={`option ${activeIndexes.includes(i) ? "active" : ""}`}
          onClick={() => toggleOption(i)}
        >
          <Image alt="icon" src={option.icon} className="icon" />
          <span className="option-name">{option.name}</span>
        </div>
      ))}
      <div
        className={`option next-btn ${isButtonDisabled ? "disabled" : ""}`}
        onClick={
          isButtonDisabled
            ? null
            : () => {
                if (!isButtonDisabled) {
                  onClick(activeIndexes);
                }
              }
        }
      >
        <span className="text">NEXT</span>
        <FiArrowRight />
      </div>
    </CheckContainer>
  );
};

const CheckContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 30px;
  width: 55vw;

  @media screen and (min-width: 1920px) {
    width: 50vw;
    gap: 50px;
  }

  @media screen and (min-width: 2000px) {
    gap: 60px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1439px) {
    gap: 20px;
    width: auto;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    width: auto;
  }

  @media screen and (min-width: 940px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    width: 80vw;
  }

  .option {
    display: -webkit- flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    padding: 20px;
    border-radius: 16px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
    cursor: pointer;

    @media screen and (min-width: 1024px) and (max-width: 1600px) {
      width: 180px;
      height: 180px;
      padding: 10px;
    }

    @media screen and (min-width: 940px) and (max-width: 1023px) {
      width: 160px;
      height: 160px;
    }

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: -webkit- flex;
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: space-around;
      justify-content: space-around;
      width: auto;
      height: unset;
      padding: 25px 20px;
      margin: 0 0 16px 0;
      border: 3px solid transparent;
    }

    .icon {
      width: auto;
      height: 4.5rem;

      @media screen and (min-width: 1280px) and (max-width: 1600px) {
        height: 4rem;
      }

      @media screen and (min-width: 940px) and (max-width: 1023px) {
        height: 3.5rem;
      }

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        height: 3rem;
      }
    }

    .option-name {
      margin-top: 20px;
      font-size: 0.875rem;
      text-align: center;

      @media screen and (max-width: 1440px) {
        margin-top: 15px;
      }

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        margin: 0;
        margin-left: 10px;
        text-align: end;
      }
    }
  }

  .option:hover {
    background: ${slideBackground};
  }

  .active {
    border: 3px solid ${main};
  }

  .next-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${cardBackground};
    font-size: 1.5rem;

    .text {
      font-size: inherit;
    }

    svg {
      margin-top: 10px;
      color: ${main};
      font-size: 1.5rem;
    }

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      justify-content: center;
      flex-direction: row;
      font-size: 1.125rem;

      svg {
        margin: 0;
        margin-left: 10px;
      }
    }
  }

  .disabled {
    background: ${lightGray};
    cursor: not-allowed;

    &.disabled {
      background: ${lightGray};
      cursor: not-allowed;
    }
  }
`;

export default Check;
