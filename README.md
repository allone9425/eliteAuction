## Overview

 <br/>

> **엘리트 옥션**
<br/>
> 자신의 중고 물품을 경매형식으로 판매하는 사이트!

 <br/>

📆 프로젝트 기간: 2023. 12. 26 ~ 2024. 01. 03 (9일)

 <br/>

## 담당기능
### 1. 메인 페이지 경매 목록 및 반응형 디자인 구현
- 다양한 디바이스에서 일관된 사용자 경험을 제공하기 위해 반응형 웹 디자인을 적용
- Supabase를 활용하여 실시간으로 경매 데이터를 관리하고 사용자가 최신 경매 정보에 즉각적으로 접근할 수 있도록 구현
### 2. 경매 상태 표시 및 좋아요 기능 개발
- 경매의 현재 진행 상태를 사용자가 한눈에 파악할 수 있도록 시각적으로 구분해 표시
- Styled-components를 활용하여 경매 상태별로 다양한 스타일링 적용
- 사용자가 관심 있는 경매에 좋아요를 표시할 수 있는 기능을 구현

 <br/>

## 프로젝트 소개 <br/>
```
판매자는 경매하고 싶은 물건을 등록하고 등록 시 내용, 경매 기간, 입찰 하한가를 설정할 수 있습니다.
구매자는 경매 게시클에 입찰가를 입력할 수 있으며 이는 하한가보다 높을 떄 입력할 수 있습니다. 경매 기간 시작 전과 끝난 후에는 입찰을 할 수 없으며 남은 시간으로 표시됩니다.
사용자는 상품에 대해 등록, 찜하기, 질문 등을 할 수 있고 이는 회원가입 및 로그인 후 회원 정보가 정상적으로 등록 시 접근할 수 있습니다.
등록한 게시물 및 찜한 게시물은 프로필 페이지에서 확인할 수 있으며, 이 곳에서 등록한 게시물 삭제 및 수정 그리고 찜한 개시물을 목록에서 삭제할 수 있습니다. 프로필 수정 탭에서 회원 정보를 변경할 수 있습니다.

```

## Stack <br/>

### Enviroment   <br/>

<img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
<img src="https://img.shields.io/badge/VISUAL STUDIO CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/></a>

 <br/>

### Config  <br/>

<img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=NPM&logoColor=white"/></a>
<img src="https://img.shields.io/badge/YARN-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white"/></a>

 <br/>

### Development
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/></a>
<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/></a>
<img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=black"/></a> 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/></a>

 <br/>

### Database

<img src="https://img.shields.io/badge/SUPABASE-3FCF8E?style=for-the-badge&logo=supabase&logoColor=black"/></a>  

 <br/>

### Communication

<img src="https://img.shields.io/badge/SLACK-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/></a>
<img src="https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/></a>

 <br/>


## 화면 구성

 <br/>

- 로그인 / 회원가입 페이지

- 메인 페이지

- 상세 페이지

- 작성 페이지

## ERD <br/>

![image](https://github.com/allone9425/eliteAuction/assets/143374855/f8d5d3fc-79a9-4dac-8c7a-acb503b969b3)


 <br/>

## 파일 구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📜auction.ts
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜bid.ts
 ┃ ┣ 📜connectSupabase.ts
 ┃ ┣ 📜likes.ts
 ┃ ┣ 📜qna.ts
 ┃ ┗ 📜setAuction.ts
 ┣ 📂common
 ┃ ┣ 📜dayjs.ts
 ┃ ┣ 📜formatUtil.ts
 ┃ ┗ 📜util.ts
 ┣ 📂components
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜AuctionList.tsx
 ┃ ┃ ┣ 📜CategorySelector.tsx
 ┃ ┃ ┗ 📜LikeButton.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Avatar.tsx
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂detail
 ┃ ┃ ┣ 📂bidPopup
 ┃ ┃ ┃ ┣ 📜BidCard.tsx
 ┃ ┃ ┃ ┣ 📜BidList.tsx
 ┃ ┃ ┃ ┣ 📜BidPopUpLayout.tsx
 ┃ ┃ ┃ ┣ 📜PopupToggleButton.tsx
 ┃ ┃ ┃ ┗ 📜Title.tsx
 ┃ ┃ ┣ 📂qna
 ┃ ┃ ┃ ┣ 📜QnaButtonGroup.tsx
 ┃ ┃ ┃ ┣ 📜QnaTextArea.tsx
 ┃ ┃ ┃ ┣ 📜QnaWrapper.tsx
 ┃ ┃ ┃ ┣ 📜Question.tsx
 ┃ ┃ ┃ ┣ 📜QuestionAnswerCard.tsx
 ┃ ┃ ┃ ┣ 📜QuestionAnswerWrapper.tsx
 ┃ ┃ ┃ ┣ 📜QuestionCard.tsx
 ┃ ┃ ┃ ┣ 📜QuestionForm.tsx
 ┃ ┃ ┃ ┗ 📜QuestionList.tsx
 ┃ ┃ ┣ 📜BidButton.tsx
 ┃ ┃ ┣ 📜DetailCarousel.tsx
 ┃ ┃ ┣ 📜DetailContent.tsx
 ┃ ┃ ┣ 📜DetailInfo.tsx
 ┃ ┃ ┗ 📜DetailTimeStamp.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜Nav.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📂SocialLogin
 ┃ ┃ ┃ ┗ 📜SocialLogin.tsx
 ┃ ┃ ┣ 📜AuthFormValue.ts
 ┃ ┃ ┣ 📜LoginForm.styles.ts
 ┃ ┃ ┗ 📜LoginForm.tsx
 ┃ ┣ 📂modalCloseButton
 ┃ ┃ ┗ 📜CloseButton.tsx
 ┃ ┣ 📂profile
 ┃ ┃ ┣ 📂PostList
 ┃ ┃ ┃ ┣ 📂PostItem
 ┃ ┃ ┃ ┃ ┣ 📜PostItem.styles.ts
 ┃ ┃ ┃ ┃ ┗ 📜PostItem.tsx
 ┃ ┃ ┃ ┗ 📜PostList.tsx
 ┃ ┃ ┣ 📂ProfileMenu
 ┃ ┃ ┃ ┗ 📜ProfileMenu.tsx
 ┃ ┃ ┣ 📂UserProfile
 ┃ ┃ ┃ ┣ 📂EditProfile
 ┃ ┃ ┃ ┃ ┗ 📜EditProfile.tsx
 ┃ ┃ ┃ ┗ 📜UserProfile.tsx
 ┃ ┃ ┣ 📂WishList
 ┃ ┃ ┃ ┗ 📜WishList.tsx
 ┃ ┃ ┗ 📜MyPagePosts.styles.ts
 ┃ ┣ 📂search
 ┃ ┃ ┣ 📂SearchItem
 ┃ ┃ ┃ ┗ 📜SearchItem.tsx
 ┃ ┃ ┣ 📜Search.styles.ts
 ┃ ┃ ┗ 📜Search.tsx
 ┃ ┣ 📂setAuction
 ┃ ┃ ┣ 📂setAuctionBtn
 ┃ ┃ ┃ ┣ 📜AddAuctionBtn.tsx
 ┃ ┃ ┃ ┗ 📜UpdateAuctionBtn.tsx
 ┃ ┃ ┣ 📜PriceAndDateAlert.tsx
 ┃ ┃ ┣ 📜SetAuctionAlert.tsx
 ┃ ┃ ┣ 📜SetAuctionBtn.tsx
 ┃ ┃ ┣ 📜SetAuctionCategory.tsx
 ┃ ┃ ┣ 📜SetAuctionContent.tsx
 ┃ ┃ ┣ 📜SetAuctionDate.tsx
 ┃ ┃ ┣ 📜SetAuctionImage.tsx
 ┃ ┃ ┣ 📜SetAuctionPrice.tsx
 ┃ ┃ ┣ 📜SetAuctionProductStatus.tsx
 ┃ ┃ ┣ 📜SetAuctionShippingType.tsx
 ┃ ┃ ┗ 📜SetAuctionTitle.tsx
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📂bidCustomModal
 ┃ ┃ ┃ ┣ 📂bidForm
 ┃ ┃ ┃ ┃ ┗ 📜BidForm.tsx
 ┃ ┃ ┃ ┗ 📜BidCustomModal.tsx
 ┃ ┃ ┣ 📂customModal
 ┃ ┃ ┃ ┗ 📜CustomModal.tsx
 ┃ ┃ ┣ 📂detailWrapper
 ┃ ┃ ┃ ┗ 📜DetailWrapper.tsx
 ┃ ┃ ┗ 📜Spacer.tsx
 ┣ 📂context
 ┃ ┣ 📜AnswerContext.tsx
 ┃ ┗ 📜AuctionDetailContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAddAuctionMutation.ts
 ┃ ┣ 📜useAuctionPostData.ts
 ┃ ┣ 📜useAuctionStatus.ts
 ┃ ┣ 📜useBidListState.ts
 ┃ ┣ 📜useCloseButtonState.ts
 ┃ ┣ 📜useCustomInfinityQuery.ts
 ┃ ┣ 📜useCustomModal.ts
 ┃ ┣ 📜useCustomMutation.ts
 ┃ ┣ 📜useCustomQuery.ts
 ┃ ┣ 📜useDebounce.ts
 ┃ ┣ 📜useDeleteAuctionMutation.ts
 ┃ ┣ 📜useDetailBidState.ts
 ┃ ┣ 📜useDidMountEffect.ts
 ┃ ┣ 📜useFetchAuctionChangeStatus.ts
 ┃ ┣ 📜useFormInput.ts
 ┃ ┣ 📜useGetAuthInfo.ts
 ┃ ┣ 📜useIsUpdateState.ts
 ┃ ┣ 📜useOnClickOutSide.tsx
 ┃ ┣ 📜useQuestionTanstackQuery.ts
 ┃ ┣ 📜useSubscribeBidTable.ts
 ┃ ┣ 📜useUpdateAuctionMutation.ts
 ┃ ┗ 📜useValidAddAuction.ts
 ┣ 📂images
 ┃ ┣ 📜clock.svg
 ┃ ┣ 📜coin.svg
 ┃ ┣ 📜end.svg
 ┃ ┣ 📜flag.svg
 ┃ ┣ 📜heart.svg
 ┃ ┣ 📜heart2.svg
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜logo2.png
 ┃ ┣ 📜logo3.png
 ┃ ┣ 📜placeholder.svg
 ┃ ┣ 📜search.svg
 ┃ ┗ 📜thin_heart.svg
 ┣ 📂layout
 ┃ ┗ 📜Layout.tsx
 ┣ 📂pages
 ┃ ┣ 📜Auth.tsx
 ┃ ┣ 📜Detail.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Profile.tsx
 ┃ ┗ 📜SetAuction.tsx
 ┣ 📂query
 ┃ ┣ 📜keys.constant.ts
 ┃ ┣ 📜usePostsQuery.ts
 ┃ ┗ 📜useUsersQuery.ts
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.tsx
 ┃ ┗ 📂modules
 ┃ ┃ ┣ 📜auctionSingleDataSlice.ts
 ┃ ┃ ┣ 📜auctionTimestampSlice.ts
 ┃ ┃ ┣ 📜bidCustomModalSlice.ts
 ┃ ┃ ┣ 📜bidListSlice.ts
 ┃ ┃ ┣ 📜customModalSlice.ts
 ┃ ┃ ┣ 📜profileSlice.ts
 ┃ ┃ ┣ 📜searchSlice.ts
 ┃ ┃ ┣ 📜setAuctionSlice.ts
 ┃ ┃ ┗ 📜templateSlice.ts
 ┣ 📂share
 ┃ ┣ 📜AuthLayout.tsx
 ┃ ┗ 📜Router.tsx
 ┣ 📂styled
 ┃ ┗ 📜GlobalStyle.ts
 ┣ 📂types
 ┃ ┣ 📜databaseRetrunTypes.ts
 ┃ ┣ 📜detailTyps.ts
 ┃ ┣ 📜supabase.ts
 ┃ ┗ 📜userType.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┗ 📜supabase.ts
```
