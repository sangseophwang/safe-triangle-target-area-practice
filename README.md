# Safe Triangle Target Area

<img width="790" alt="스크린샷 2024-09-04 오후 8 16 57" src="https://github.com/user-attachments/assets/c81096b2-3fc6-4f5e-948e-f8af77a86c36">

1. [Safe Triangle Target Area란? 🚀](#1-safe-triangle-target-area란-)
2. [구현 기능 📍](#2-구현-기능-)
3. [프로젝트 설치 및 실행 ✨](#3-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크](https://safe-triangle-target-area-practice.vercel.app/)

<br />

## 1. Safe Triangle Target Area란? 🚀

> [Amazon](https://bjk5.com/post/44698559168/breaking-down-amazons-mega-dropdown?ref=height-blog.ghost.io)에서 구현된 컨텍스트 메뉴 접근 방식으로, 
> 부모 메뉴와 하위 메뉴 하단에 보이지 않는 삼각형 영역을 구성해 부모 메뉴를 벗어나 대각선 형태로 마우스 커서를 옮겨도 하위 메뉴가 활성화될 수 있도록 하는 방식입니다. 

<br />

## 2. 구현 기능 📍

> 구현은 총 2가지로 구성되어 있습니다.

- 부모 메뉴 내 커서 이동 시 가변하는 target area
  - useMenu 훅을 통해 부모 메뉴 내 커서 좌표를 스타일로 전달
  - 가상 선택자와 clip-path를 활용해 하위 영역 구성
- 최소 너비로 고정된 target area
  - 커서 좌표 업데이트 함수 미전달, 초기값 설정으로 최소 너비 지정 (부모 메뉴의 1/3에 해당하는 너비)

자세한 구현 내용은 [블로그](https://sangseophwang.tistory.com/137)에서 확인하실 수 있습니다.

<br />

## 3. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/sangseophwang/safe-triangle-target-area-practice.git
```

2. 프로젝트 패키지 설치

```plaintext
$ npm install
```

3. 프로젝트 실행

```plaintext
$ npm start
```
