import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import Button from "@/components/Button";
import logoWhite from "@/assets/logo/logo_text_white.png";
import { background, lineColor, main, white, fontColor2 } from "@/styles/theme";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const navigateToMakeatPage = () => router.push("/makeat");

  const contents = t("footer.contents", { returnObjects: true }) || [];

  return (
    !(router.pathname === "/makeat") &&
    Array.isArray(contents) && (
      <FooterContainer>
        <div className="info">
          <div className="row">
            <address className="address">
              <strong className="company">{t("footer.company")}</strong>
              <ul>
                {contents.map((el) => (
                  <li key={el.content}>
                    {el.title.length > 0 && (
                      <span className="list-title">{el.title}</span>
                    )}
                    <span className="item">
                      {el.content}
                      {el.link && (
                        <a href={el.link.href} target="_blank">
                          {el.link.name}
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </address>
            <div className="right">
              <div className="button-wrapper">
                <Button
                  color="mustard"
                  borderRadius="10"
                  text={
                    <Trans
                      i18nKey="button.makeat"
                      components={{ span: <span className="makeat" /> }}
                    >
                      {t("button.makeat")}
                    </Trans>
                  }
                  onClick={navigateToMakeatPage}
                />
              </div>
              <Link href="/" className="logo">
                <Image alt="logo" src={logoWhite} className="logo-image" />
              </Link>
            </div>
          </div>
          <div className="legal">
            <p>Copyright © LeSIK. All Rights Reserved.</p>
            <div className="legal-pages">
              <a>
                <p>{t("footer.privacy_policy")}</p>
              </a>
              <a>
                <p>{t("footer.terms")}</p>
              </a>
            </div>
          </div>
        </div>
      </FooterContainer>
    )
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
};

const FooterContainer = styled.footer`
  padding: 48px 4.44vw;
  padding-bottom: 0;
  border-top: 2px solid ${white};
  background: ${background};

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 24px 5.33vw;
  }

  .info {
    display: flex;
    flex-direction: column;

    .row {
      margin-top: 1rem;

      address {
        color: ${white};
        font-size: 15px;
        font-style: normal;
        line-height: 1.6;
        white-space: pre-wrap;

        .company {
          display: block;
          padding-bottom: 16px;
          font-size: 1rem;
          font-weight: 700;
        }

        ul {
          width: 100%;

          li {
            display: flex;
            align-items: center;
            margin-bottom: 5px;

            .list-title {
              width: 10rem;
              flex: 0 0 auto;
              padding-right: 10px;
              color: ${fontColor2};

              @media screen and (max-width: 939px) and (min-width: 767px),
                screen and (max-width: 766px) {
                width: 7.475rem;
              }
            }

            .item {
              flex: 1;
            }

            .list-title,
            .item {
              @media screen and (max-width: 939px) and (min-width: 767px),
                screen and (max-width: 766px) {
                font-size: 0.6666666667rem;
                word-break: keep-all;
              }
            }

            a {
              margin-left: 0.275rem;
              vertical-align: 5%;
              font-size: 0.785rem;
              color: ${fontColor2};

              @media screen and (max-width: 939px) and (min-width: 767px),
                screen and (max-width: 766px) {
                font-size: 0.525rem;
              }
            }

            a:hover {
              color: ${main};
            }
          }
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          display: flex;
          flex-direction: row-reverse;
          margin-bottom: 2rem;
        }

        .button-wrapper {
          max-width: 200px;
          margin-left: auto;
        }

        .logo {
          display: flex;
          justify-content: flex-end;
          width: 21.115vw;
          padding: 0 0 16px;
          margin-top: 7rem;

          @media screen and (max-width: 939px) and (min-width: 767px),
            screen and (max-width: 766px) {
            display: flex;
            justify-content: flex-start;
            min-width: 45vw;
            max-width: 50vw;
            margin-top: 0;
            padding: 0;
          }

          .logo-image {
            width: 100%;
            height: auto;
          }
        }
      }
    }

    .legal {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: 20px 0;
      border-top: 1px solid ${lineColor};
      color: ${white};

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        flex-direction: column-reverse;
        row-gap: 20px;
        padding: 20px 0;
        font-size: 0.7777777778rem;
      }

      .legal-pages {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: inherit;

        a {
          color: inherit;
          cursor: pointer;
        }

        a:hover {
          color: ${main};
        }

        a + a {
          margin-left: 20px;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          justify-content: flex-start;
        }
      }
    }
  }
`;

export default Footer;
