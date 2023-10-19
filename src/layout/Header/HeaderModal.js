import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Button from "@/components/Button";
import { navList } from "@/constants/nav";
import { main, mustard, white } from "@/styles/theme";
import backElement from "@/assets/logo/modal_element.png";

const HeaderModal = ({ setIsHeaderModal }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const navigateToMakeatPage = () => {
    router.push("/makeat");
    setIsHeaderModal(false);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    document.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("activeLink:", activeLink);

  useEffect(() => {
    const currentPath = router.pathname.replace(/^\//, "");
    setActiveLink(`/${currentPath}`);
  }, [router.pathname]);

  return (
    <HeaderModalContainer>
      <div className="back-element">
        <Image alt="로고 배경" src={backElement} />
      </div>
      <div className="header-wrapper">
        <ul>
          {navList.map((nav) => (
            <li key={nav.id}>
              <Link
                href={nav.link}
                onClick={() => setIsHeaderModal(false)}
                className={activeLink === nav.link ? "active" : ""}
              >
                {activeLink === nav.link && "＞ "}
                {nav.category}
                {console.log("nav.link:", nav.link)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-wrapper">
        <Button
          color="mustard"
          text="makeat 구매하기"
          className="only-on-mobile"
          onClick={navigateToMakeatPage}
        />
      </div>
      <div className="copyright">
        <p>Copyright © LeSIK. All Rights Reserved.</p>
      </div>
    </HeaderModalContainer>
  );
};

const HeaderModalContainer = styled.div`
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  padding: 100px 4.44vw 56px;
  background: ${main};
  z-index: 49;
  overflow: hidden;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    row-gap: 17px;
    padding: 52px 4.44vw 24px;
    overflow: scroll;
  }

  .back-element {
    position: fixed;
    bottom: -1%;
    right: 0;
    width: 50vw;
    z-index: -1;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .header-wrapper {
    ul {
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: flex-start;
      align-items: flex-start;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
      row-gap: 16px;

      li > a {
        color: ${white};
        font-size: 5.3333333333rem;
        font-weight: 700;
        font-family: "GangwonEduPowerExtraBoldA";
        line-height: 0.95;
        letter-spacing: -0.125rem;
        transition: all 0.2s ease;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 2.785rem;
          letter-spacing: 0;
        }
      }

      li > a:hover {
        color: ${mustard};
      }

      .active {
        color: ${mustard};
      }
    }
  }

  .copyright {
    color: ${white};

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      margin-left: 5px;
      font-size: 0.5rem;
    }
  }

  .button-wrapper {
    display: none;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: block;
      width: 160px;
    }
  }
`;

export default HeaderModal;
