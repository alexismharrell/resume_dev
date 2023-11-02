import { useState } from "react"
import styled from "styled-components"
import { ContentArea } from "./ContentArea"

const TitleText = styled.div`
  font-size: 72px;
  justify-content: center;
  display: flex;
  margin: 10px 0;
`

const SubtitleText = styled(TitleText)`
  font-size: 24px;
  margin: 5px 0;
`

const Header = styled.div`
  display: flex;
  background-color: white;
  color: black;
  align-content: stretch;
  margin: 10px 30px;
`

const HeaderItem = styled.div<{ $isSelected: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }

  &::before {
    content: "${(props) => (props.$isSelected ? ">" : "")}";
  }

  &::after {
    content: "${(props) => (props.$isSelected ? "_" : "")}";
    animation: cursor-blink 1.5s steps(2) infinite;
  }

  &:hover {
    cursor: pointer;
  }
`

export enum CurrentPageValue {
  about = "About",
  technologies = "Technologies",
  experience = "Experience",
  contact = "Contact",
}

function App() {
  const [page, setPage] = useState(CurrentPageValue.about)

  const handleHeaderItemClick = (pageVal: CurrentPageValue) => {
    setPage(pageVal)
  }

  return (
    <>
      <TitleText>LexiSoft</TitleText>
      <SubtitleText>Delivering Software Development Excellence</SubtitleText>
      <SubtitleText>-- Mitsuhama Computer Systems --</SubtitleText>
      <SubtitleText>Copyright 1988; All rights reserved</SubtitleText>
      <Header>
        {Object.values(CurrentPageValue).map((value) => {
          return (
            <HeaderItem
              onClick={() => {
                handleHeaderItemClick(value)
              }}
              $isSelected={value === page}
            >
              {value}
            </HeaderItem>
          )
        })}
      </Header>
      <ContentArea currentPage={page} />
    </>
  )
}

export default App
