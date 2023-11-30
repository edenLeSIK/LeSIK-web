import { useRouter } from "next/router";
import styled from "styled-components";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import InquiryForm from "@/components/InquiryForm";
import { contentBackground, main, white, darkGray } from "@/styles/theme";
import { inquiryPageContentList } from "@/constants/inquiry";

const Inquiry = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <InquiryContainer>
      <section className="headline-wrapper">
        <BsFillArrowLeftSquareFill className="icon" onClick={goBack} />
        <div className="content">
          <h1 className="headline">{inquiryPageContentList.headline}</h1>
          <h4 className="desc">{inquiryPageContentList.desc}</h4>
          <ul className="sub-desc">
            {inquiryPageContentList.contents.map((el) => (
              <li key={el.content}>{el.content}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="inquiry-content">
        <div className="left">
          <ul>
            {inquiryPageContentList.contents.map((el) => (
              <li key={el.content}>{el.content}</li>
            ))}
          </ul>
        </div>
        <div className="right">
          <InquiryForm />
        </div>
      </section>
    </InquiryContainer>
  );
};

const InquiryContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  background: ${contentBackground};

  .headline-wrapper {
    padding-left: 4.44vw;
    padding-right: 4.44vw;
    padding-top: 50px;
    padding-bottom: 48px;
    background: ${main};
    height: max-content;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      padding-top: 40px;
      padding-bottom: 30px;
      padding-left: 5.33vw;
      padding-right: 5.33vw;
    }

    .icon {
      color: ${white};
      font-size: 3.5rem;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        display: none;
      }
    }

    .icon:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    .content {
      position: relative;
      width: 44.45vw;
      padding-top: 80px;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
        padding: 40px 5.33vw 0;
        text-align: center;
      }

      .headline {
        font-size: 4rem;
        margin-bottom: 40px;
        color: ${white};
        white-space: normal;
        word-break: keep-all;

        @media screen and (max-width: 1280px) and (min-width: 940px) {
          font-size: 3.25rem;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 2.5rem;
        }
      }

      .desc {
        margin-bottom: 30px;
        color: ${white};
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.15;
        letter-spacing: -0.01rem;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          margin-bottom: 0;
          padding-bottom: 20px;
          font-size: 1rem;
          line-height: 1.25;
        }
      }

      .sub-desc {
        display: none;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          display: flex;
          flex-direction: column;
          gap: 15px;

          li {
            padding: 15px 20px;
            background: #1c977c;
            border-radius: 10px;
            color: ${white};
            font-size: 0.8rem;
            line-height: 1.25;
            opacity: 0.8;
          }
        }
      }
    }
  }

  .inquiry-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: block;
    }

    .left {
      position: sticky;
      top: 100px;
      width: 40.45vw;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        position: relative;
        width: 100%;
        padding: 0 5.33vw;
        transform: translateY(0%);
        z-index: 0;
      }

      ul {
        padding-top: 48px;
        padding-left: 6vw;
        font-size: 1.3333333333rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          display: none;
        }

        li {
          margin-bottom: 24px;
          padding: 0;
          list-style: disc;
          color: ${darkGray};
        }
      }
    }

    .right {
      transform: translateY(-25vh);

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        position: relative;
        width: 100%;
        padding: 0 6vw 40px;
        transform: translateY(0%);
        z-index: 0;
        height: 40%;
      }
    }

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      .right::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 40%;
        background: ${main};
        z-index: -1;
      }
    }
  }
`;

export default Inquiry;
