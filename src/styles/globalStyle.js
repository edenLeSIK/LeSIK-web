import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { black } from "@/styles/theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        white-space: normal;
        word-break: keep-all;
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
    input, textarea, select, a {
        text-decoration: none;
        color: ${black};
        font-family: 'Pretendard-Regular';
        resize: none;
        outline: none;
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
    .cooksup {
        font-family: "Central W01 Bold";
        letter-spacing: -2px;
    }
    .makeat {
        font-family: "Unica One";
    }
    .letter-spacing {
        letter-spacing: +0.5px;
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
    @font-face {
        font-family: "Central W01 Bold";
        src: url("https://db.onlinewebfonts.com/t/dd4320757ff990fa3d23662f08aa6f3a.eot");
        src: url("https://db.onlinewebfonts.com/t/dd4320757ff990fa3d23662f08aa6f3a.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/dd4320757ff990fa3d23662f08aa6f3a.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/dd4320757ff990fa3d23662f08aa6f3a.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/dd4320757ff990fa3d23662f08aa6f3a.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/dd4320757ff990fa3d23662f08aa6f3a.svg#Central W01 Bold")format("svg");
    }
    @font-face {
        font-family: "Unica One";
        src: url("https://db.onlinewebfonts.com/t/0fe5a27204cb9f63fc5af74d10c3d040.eot");
        src: url("https://db.onlinewebfonts.com/t/0fe5a27204cb9f63fc5af74d10c3d040.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/0fe5a27204cb9f63fc5af74d10c3d040.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/0fe5a27204cb9f63fc5af74d10c3d040.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/0fe5a27204cb9f63fc5af74d10c3d040.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/0fe5a27204cb9f63fc5af74d10c3d040.svg#Unica One")format("svg");
    }
`;
