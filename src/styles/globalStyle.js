import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { black } from "@/styles/theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body{
        box-sizing: border-box;
        margin: 0 auto;
        font-family: 'Pretendard-Regular';
    }
    button {
        background: transparent;
        border:none;
        outline: none;
        color: ${black};
        font-family: inherit;
        text-decoration: none;
    }
    input, textarea, select, a{
        text-decoration: none;
        color: ${black};
        font-family: 'Pretendard-Regular';
        resize: none;
        outline: none;
    }
    @font-face {
        font-family: 'GangwonEduPowerExtraBoldA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;
