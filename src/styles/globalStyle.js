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
    .default-width {
        max-width: 1140px;
        margin: 0 auto;
    }
    h1,h2 {
        font-family: 'GangwonEduPowerExtraBoldA';
    }
    h1{
        font-size: 5.3333333333rem;
        font-weight: 700;
        line-height: .95;
        letter-spacing: .01rem;
        text-transform: uppercase;
    }
    .hide-on-mobile {
        @media screen and (max-width: 939px) {
            display: none;
        }
    }
    .only-on-mobile {
        display: none;
        
        @media screen and (max-width: 939px) {
            display: block;
        }
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media screen and (max-width: 939px) and (min-width: 767px), screen and (max-width: 766px) {
            flex-direction: column;
            row-gap: 20px;
        }
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
