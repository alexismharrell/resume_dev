import styled from "styled-components"
import { CurrentPageValue } from "./App"
import { AboutContent } from "./AboutContent"
import { TechnologiesContent } from "./TechnologiesContent"
import React from "react"
import { ExperienceContentComponent } from "./ExperienceContent"

const ContentAreaMain = styled.div`
  display: flex;
  flex: 1;
  margin: 16px 30px;
  padding: 16px 32px;

  --b: 5px; /* thickness of the border */
  --c: white; /* color of the border */
  --w: 200px; /* width of border */

  border: var(--b) solid #0000; /* space for the border */

  --_g: #0000 90deg, var(--c) 0;
  --_p: var(--w) var(--w) border-box no-repeat;

  background: conic-gradient(
        from 90deg at top var(--b) left var(--b),
        var(--_g)
      )
      0 0 / var(--_p),
    conic-gradient(from 180deg at top var(--b) right var(--b), var(--_g)) 100% 0 /
      var(--_p),
    conic-gradient(from 0deg at bottom var(--b) left var(--b), var(--_g)) 0 100% /
      var(--_p),
    conic-gradient(from -90deg at bottom var(--b) right var(--b), var(--_g))
      100% 100% / var(--_p);
`

export type ContentAreaProps = {
  currentPage: CurrentPageValue
}

export const ContentArea: React.FC<ContentAreaProps> = (props) => {
  return (
    <ContentAreaMain>
      {props.currentPage === CurrentPageValue.about && <AboutContent />}
      {props.currentPage === CurrentPageValue.technologies && (
        <TechnologiesContent />
      )}
      {props.currentPage === CurrentPageValue.experience && (
        <ExperienceContentComponent />
      )}
    </ContentAreaMain>
  )
}
