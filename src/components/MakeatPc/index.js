import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { fontColor, gray, makeatRed, makeatWhite } from "@/styles/theme";
import googlePlay from "@/assets/makeat/google_play.png";

const MakeatPc = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { t } = useTranslation("makeat");

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`?search=${search}`);
  };

  const handleQuery = (e) => setSearch(e.target.value);

  console.log(t("headline"));

  return (
    <MakeatPcContainer>
      <div className="main">
        <Link href="/" className="link">
          {t("headline")}
          <span className="makeat">Makeat</span>
        </Link>
        <form className="search-wrapper" onSubmit={onSubmit}>
          <input
            placeholder={t("search")}
            value={search}
            onChange={handleQuery}
          />
          <button type="submit">
            <div className="positioner">
              <span className="icon">
                <BsSearch />
              </span>
            </div>
          </button>
        </form>
        <div className="tag-wrapper"></div>
      </div>
      <div className="download">
        <div className="notice-wrapper">
          <div className="makeat-app makeat">Makeat</div>
          <div className="text">
            <p>{t("app-message")}</p>
            <p className="gray">{t("download-message")}</p>
          </div>
        </div>
        <div className="app-wrapper">
          <a href="https://play.google.com/store/apps" target="_blank">
            <Image alt="google-play" src={googlePlay} className="google-play" />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank">
            <Image alt="google-play" src={googlePlay} className="google-play" />
          </a>
        </div>
      </div>
    </MakeatPcContainer>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["makeat"])),
    },
  };
};

const MakeatPcContainer = styled.section`
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  min-height: 650px;
  width: 440px;
  height: 100%;
  margin-left: -457.5px;
  z-index: 1000;

  @media (max-width: 915px) {
    display: none;
  }

  .main {
    width: 310px;
    padding-top: 15px;

    .link {
      .makeat {
        margin-left: 10px;
        font-size: 2rem;
      }
    }

    .search-wrapper {
      position: relative;
      margin: 28px 0;

      input {
        display: block;
        width: 100%;
        height: 48px;
        padding: 0 55px 0 18px;
        border-radius: 23px;
        border: 1px solid #e5e5e5;
        background-color: #f7f7f7;
        font-size: 16px;
      }

      button {
        position: absolute;
        top: 0px;
        right: 5px;
        height: 100%;
        padding: 0;
        background: 0;
        border: 0;
        outline: none;
        text-align: center;

        .positioner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: ${makeatRed};
          border-radius: 50%;
        }

        svg {
          position: relative;
          display: block;
          width: 18px;
          height: 16px;
          color: ${makeatWhite};
        }
      }
    }

    .tag-wrapper {
    }
  }

  .download {
    position: absolute;
    bottom: 58px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    .notice-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 48px;

      .makeat-app {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        background: ${makeatWhite};
        border-radius: 8px;
        color: ${makeatRed};
        font-size: 0.9rem;
        font-weight: 700;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
      }

      .text {
        color: ${fontColor};
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.5;

        .gray {
          color: ${gray};
          font-size: 0.75rem;
        }
      }
    }

    .app-wrapper {
      display: flex;
      width: inherit;
      margin-top: 18px;

      a {
        width: 150px;

        .google-play {
          width: inherit;
          height: auto;
        }
      }

      a + a {
        margin-left: 10px;
      }
    }
  }
`;

export default MakeatPc;
