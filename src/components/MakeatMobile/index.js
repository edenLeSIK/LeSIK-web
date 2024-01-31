import styled from "styled-components";

const MakeatMobile = () => {
  return (
    <MakeatMobileContainer>
      <div className="header">
        <header>
          <div></div>
          <div></div>
        </header>
      </div>
      <div className="app-main">
        <iframe
          src="https://lesik01.cafe24.com/product/%EB%A9%94%EC%9D%B4%ED%82%B7/15/category/1/display/3/"
          sandbox="allow-same-origin allow-scripts allow-popups"
        >
          이 브라우저는 iframe을 지원하지 않습니다.
        </iframe>
      </div>
      <div className="navigation"></div>
    </MakeatMobileContainer>
  );
};

const MakeatMobileContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 475px;
  padding-bottom: 60px;
  box-sizing: border-box;

  @media (min-width: 475px) {
    left: 50%;
    margin-left: -237.5px;
  }

  @media (min-width: 915px) {
    max-width: 475px;
    margin-left: -17.5px;
  }

  .header {
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 10000;
    background: rgb(255, 255, 255);
  }

  .app-main {
    position: fixed;
    top: -1px;
    bottom: 0;
    left: 50%;
    width: 100%;
    max-width: 475px;
    height: 100vh;
    border: 1px solid #e7e7e7;
    z-index: 10000;

    @media screen and (max-width: 915px) {
      position: static;
    }

    iframe {
      width: 100%;
      height: 100%;
    }
  }
`;

export default MakeatMobile;
