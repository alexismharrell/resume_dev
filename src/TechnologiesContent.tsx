import styled from "styled-components"
import { TechnologiesArray, Technology } from "./constants"
import { useState } from "react"

const TechnologiesContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px 32px;
`

const TechnologySection = styled.div`
  border: 2px white solid;
  padding: 16px;
  display: flex;
  flex-flow: column;
  align-content: center;

  &:hover {
    background: white;
    border: 2px black solid;
    color: black;
    cursor: pointer;
  }
`

const TechnologySectionTitle = styled.div`
  font-size: 40px;
  flex: 1;
`

const TechnologySectionSubtext = styled.div`
  font-size: 32px;
  flex: 2;
`

export function TechnologiesContent() {
  const [selectedTech, setSelectedTech] = useState<Technology>()
  const [isOpen, setIsOpen] = useState(false)

  const handleTechSectionClick = (tech: Technology) => {
    setSelectedTech(tech)
    setIsOpen(true)
  }

  return (
    <>
      <TechnologiesContentContainer>
        {TechnologiesArray.map((tech: Technology) => {
          return (
            <TechnologySection onClick={() => handleTechSectionClick(tech)}>
              <TechnologySectionTitle>{tech.name}</TechnologySectionTitle>
              <TechnologySectionSubtext>
                {tech.shortDescriptor}
              </TechnologySectionSubtext>
            </TechnologySection>
          )
        })}
      </TechnologiesContentContainer>
    </>
  )
}
