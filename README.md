# woonge.github.io

개인 포트폴리오 및 이력서 웹사이트입니다.

**Live:** https://woonge.github.io

## Features

- 한국어/영어 이중 언어 지원 (i18n)
- 경력 상세 페이지 (Content Collections 기반)
- SEO 최적화 (Sitemap, RSS, Open Graph)
- 반응형 디자인
- GitHub Actions 자동 배포

## Tech Stack

- **Framework:** [Astro](https://astro.build) v5
- **Runtime:** [Bun](https://bun.sh)
- **Language:** TypeScript (strict mode)
- **Integrations:** MDX, Sitemap, RSS

## Project Structure

```text
├── .github/workflows/
│   └── deploy.yml           # GitHub Pages 배포
├── public/                   # 정적 파일 (favicon, fonts)
├── src/
│   ├── assets/              # 이미지 (최적화 대상)
│   ├── components/          # Astro 컴포넌트
│   │   ├── BaseHead.astro   # SEO 메타 태그
│   │   ├── Header.astro     # 네비게이션 + 언어 전환
│   │   ├── HeaderLink.astro # 활성 링크 표시
│   │   └── Footer.astro
│   ├── content/
│   │   └── careers/         # 경력 콘텐츠 (Markdown)
│   ├── layouts/
│   │   └── ResumeLayout.astro
│   ├── pages/
│   │   ├── index.astro      # 홈 (한국어)
│   │   ├── about.astro      # 이력서 (한국어)
│   │   ├── career/[...slug].astro
│   │   └── en/              # 영어 페이지
│   ├── styles/global.css
│   ├── consts.ts
│   └── content.config.ts    # Content Collections 스키마
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

| Command       | Action                              |
| :------------ | :---------------------------------- |
| `bun install` | 의존성 설치                         |
| `bun dev`     | 개발 서버 시작 (`localhost:4321`)   |
| `bun build`   | 프로덕션 빌드 (`./dist/`)           |
| `bun preview` | 빌드 미리보기                       |

## Adding Career Content

`src/content/careers/` 디렉토리에 Markdown 파일을 추가합니다.

**Frontmatter 스키마:**

```yaml
---
title: "프로젝트 제목"
company: "회사명"
role: "역할"
startDate: "2024.01"
endDate: "Present"
lang: "ko"  # 또는 "en"
order: 10   # 정렬 순서 (높을수록 상단)
summary: "한 줄 요약"
---
```

## Deployment

`main` 브랜치에 push하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.
