import Image from "next/image";
import styled from "styled-components";
import { lightGray, white } from "@/styles/theme";

const Card = ({ contents }) => {
  return (
    <Container>
      {contents.map((el) => (
        <div className="content-item" key={el.headline}>
          <div className="icon">
            <Image alt="icon" src={el.icon} width={100} height={100} />
          </div>
          <h3 className="sub-headline">{el.headline}</h3>
          <p className="text">{el.text}</p>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  column-gap: 2.22vw;
  row-gap: 30px;
  align-items: flex-start;
  width: 50vw;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    width: 100%;
    grid-template-columns: 1fr;
  }

  .content-item {
    position: relative;
    display: -webkit- flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    min-width: 10rem;
    padding: 30px;
    border: 1px solid ${lightGray};
    background: ${white};

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      max-width: 400px;
      margin-left: 5.5583333333vw;
      margin-right: 5.5583333333vw;
      padding: 20px;
    }

    .icon {
      max-width: 120px;
      height: auto;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .sub-headline {
      font-size: 1.75rem;
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
      margin: 20px 0 0;
      color: #4a4a5a;
      text-align: center;
      line-height: 1.2;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        margin: 16px 0 0;
        font-size: 0.7777777778rem;
      }
    }
  }
`;

export default Card;
