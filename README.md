# 🏢 래식 웹페이지 개발 프로젝트

## 📋 프로젝트 개요

이 프로젝트는 래식 웹페이지 리뉴얼 개발을 목표로 했으며, 다양한 컴포넌트 기반으로 설계되었습니다. 다국어 지원, API 호출, 재사용 가능한 컴포넌트 등이 주요 기능입니다.

---

## 🛠️ 기술 스택

- **프레임워크**: Next.js
- **언어**: JavaScript
- **스타일링**: Styled-Components, SCSS, Sass
- **다국어 지원**: `i18next`, `next-i18next`
- **환경 설정**: `.env` 파일을 통해 환경 변수 관리
- **버전 관리**: Git

---

## 📁 디렉토리 트리 구조 및 설명

```bash
lesik-web
├── .vscode/                # VSCode 설정 파일
├── public/                 # 정적 파일 저장 디렉토리
│   ├── locales/            # 다국어 지원을 위한 번역 파일 디렉토리
│   │   ├── en/             # 영어 번역 파일 디렉토리
│   │   │   ├── common.json       # 공통 영어 번역 텍스트
│   │   │   ├── customer.json     # 고객 관련 영어 번역
│   │   │   ├── franchise.json    # 프랜차이즈 관련 영어 번역
│   │   │   ├── inquiry.json      # 문의 관련 영어 번역
│   │   │   ├── main.json         # 메인 페이지 영어 번역
│   │   │   ├── makeat.json       # 특정 서비스 관련 영어 번역
│   │   │   └── news.json         # 뉴스 관련 영어 번역
│   │   └── ko/             # 한국어 번역 파일 디렉토리
│   │       ├── common.json       # 공통 한국어 번역 텍스트
│   │       ├── customer.json     # 고객 관련 한국어 번역
│   │       ├── franchise.json    # 프랜차이즈 관련 한국어 번역
│   │       ├── inquiry.json      # 문의 관련 한국어 번역
│   │       ├── main.json         # 메인 페이지 한국어 번역
│   │       ├── makeat.json       # 특정 서비스 관련 한국어 번역
│   │       └── news.json         # 뉴스 관련 한국어 번역
│   └── favicon.png         # 브라우저 탭에 표시되는 아이콘
├── src/                    # 메인 소스 코드 디렉토리
│   ├── api/                # API 호출 함수들이 정의된 디렉토리
│   ├── assets/             # 이미지, 아이콘 등 에셋 파일 디렉토리
│   │   ├── about/              # 회사 소개 이미지
│   │   ├── customer/           # 고객 관련 이미지
│   │   ├── franchise/          # 프랜차이즈 이미지 혹은 아이콘
│   │   ├── inquiry/            # 문의 페이지 이미지
│   │   ├── logo/               # 회사 로고 이미지 파일
│   │   ├── main/               # 메인 페이지 이미지
│   │   ├── makeat/             # makeat 서비스 이미지
│   │   ├── menu/               # 트레이너스 밀 메뉴 이미지
│   ├── components/         # 재사용 가능한 UI 컴포넌트 디렉토리
│   │   ├── AdsContent/          # 광고 콘텐츠 컴포넌트
│   │   ├── Button/              # 공통 버튼 컴포넌트
│   │   ├── CardContent/         # 카드 형태의 콘텐츠 컴포넌트
│   │   ├── CheckContent/        # 체크박스 및 검증 관련 콘텐츠 컴포넌트
│   │   ├── DescContent/         # 설명 관련 콘텐츠 컴포넌트
│   │   ├── InquiryForm/         # 문의 양식 컴포넌트
│   │   ├── MainContent/         # 메인 페이지 콘텐츠 컴포넌트
│   │   ├── MakeatMobile/        # makeat 모바일용 서비스 컴포넌트
│   │   ├── MakeatPc/            # makeat 데스크탑용 서비스 컴포넌트
│   │   ├── NewsFeed/            # 뉴스 피드 컴포넌트
│   │   └── SlideContent/        # 슬라이드쇼 관련 컴포넌트
│   ├── layout/             # 레이아웃 관련 컴포넌트
│   │   ├── Footer/              # 공통 푸터 레이아웃
│   │   ├── Header/              # 공통 헤더 레이아웃
│   │   └── index.js             # 레이아웃 설정 파일
│   ├── pages/              # Next.js의 app router 디렉토리
│   │   ├── about/               # 회사 소개 페이지
│   │   ├── customer/            # 고객 관련 페이지
│   │   ├── franchise/           # 프랜차이즈 관련 페이지
│   │   ├── inquiry/             # cooksup 문의 페이지
│   │   ├── makeat/              # 특정 서비스 관련 페이지
│   │   ├── menu/                # (임시) 트레이너스밀 메뉴 안내 페이지
│   │   ├── _app.js              # Next.js 전체 앱 설정 파일
│   │   ├── _document.js         # HTML 문서 설정 파일
│   │   └── index.js             # 메인 엔트리 페이지
│   ├── styles/             # 글로벌 스타일 및 테마 설정 파일들
│   │   ├── globalStyle.js       # 글로벌 CSS 스타일 정의
│   │   └── theme.js             # 테마 설정 파일
├── .babelrc                # Babel 설정 파일
├── .editorconfig           
├── .env.local              # 로컬 환경 변수 파일 (추후 .gitignore 추가)
├── .eslintrc.json          # ESLint 설정 파일 (코드 품질 관리)
├── .gitignore              # Git에서 제외할 파일들 목록
├── jsconfig.json           # JavaScript 프로젝트 설정 파일
├── next-i18next.config.js  # 다국어 지원 설정 파일
├── next.config.js          # Next.js 설정 파일
└── README.md               

```

---

## 🌐 다국어 지원

프로젝트는 `i18next` 및 `next-i18next`를 사용해 다국어를 지원합니다. 번역 파일들은 `public/locales/` 폴더에 있으며, 각 언어별로 JSON 파일로 관리됩니다.

---

## 📦 설치 및 실행

### 1. 의존성 설치

프로젝트에서 의존성 설치는 `pnpm`을 사용합니다. `pnpm`이 설치되어 있지 않다면, 다음 명령어로 먼저 설치하세요:

```bash
npm install -g pnpm
```

의존성 설치는 다음 명령어로 진행합니다:

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 웹페이지를 확인할 수 있습니다.

### 3. 프로덕션 빌드

```bash
pnpm run build
```

---

## 🛠️ 주요 기능

- **다국어 지원**: 영어와 한국어로 텍스트를 자동 전환하며, `i18next`로 번역 관리를 쉽게 할 수 있음
- **컴포넌트 재사용성**: 모듈화된 컴포넌트들이 페이지 전반에 걸쳐 재사용되어 유지보수가 용이
- **Next.js 라우팅**: app 라우팅을 활용해 각 페이지로 쉽게 접근할 수 있습니다.

---

## ⚠️ 문제 해결

- `i18next`다국어 지원 라이브러리를 사용하게 되며 layout 파일과의 호환성 문제가 있음

---
