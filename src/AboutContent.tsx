import styled from "styled-components"
import { BaseContentContainer } from "./constants"

const StyledBaseContentContainer = styled(BaseContentContainer)`
  width: 100%;
  align-items: center;

  & div {
    padding: 0 32px;
    flex: 2;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 !important;
`

export function AboutContent() {
  return (
    <StyledBaseContentContainer>
      <ImageContainer>
        <img src='../me.jpg' />
      </ImageContainer>
      <div>
        <p>Hello! I'm Alexis! Pleased to meet you!</p>

        <p>
          I am a software engineer with around 10 years of experience in
          professional software development! I have worked with companies
          building training software for specialized military equipment,
          software for the sharing and moderation of sensitive data, bespoke
          commercial inventory systems, and helped build and launch Grindr Web.
          I have experience in both full-stack and front-end positions,
          including writing and maintaining SQL queries.
        </p>

        <p>
          My favorite type of work is something I can show off to friends and
          family, or something that directly interfaces with the end user. I
          love building things, and have always loved it since I was a kid
          playing with Lego sets, K`Nex, and Erector Sets. In school, I wanted
          to be an architect but found something more exciting and “in my lane”
          in Software Engineering.
        </p>

        <p>
          I am passionate about formal software engineering steps, and happily
          make suggestions and pitch ideas when it comes to planning new
          modules, products, or code modifications, and am always excited to
          participate in retrospectives and planning meetings (AGILE, SCRUM,
          Kanban, etc). My goal is to always leave the codebase in a better
          state than I found it so teammates or anyone else that inherits my
          code can easily maintain it.
        </p>
      </div>
    </StyledBaseContentContainer>
  )
}
