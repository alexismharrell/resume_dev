import styled from "styled-components"
import { TechnologiesArray, Technology } from "./constants"
import { useState } from "react"
import useModal, { Modal } from "./Modal"

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

export const TechnologiesContent = () => {
  const [selectedTech, setSelectedTech] = useState<Technology>()
  const { isOpen, toggle } = useModal()

  const handleTechSectionClick = (tech: Technology) => {
    setSelectedTech(tech)
    toggle()
  }

  return (
    <>
      <TechnologiesContentContainer>
        {TechnologiesArray.map((tech: Technology) => {
          return (
            <TechnologySection
              aria-label={
                "click to learn more about " + tech.name + " experience"
              }
              onClick={() => handleTechSectionClick(tech)}
            >
              <TechnologySectionTitle>{tech.name}</TechnologySectionTitle>
              <TechnologySectionSubtext>
                {tech.shortDescriptor}
              </TechnologySectionSubtext>
            </TechnologySection>
          )
        })}
      </TechnologiesContentContainer>
      <Modal title={selectedTech?.name || ""} isOpen={isOpen} toggle={toggle}>
        <div>{selectedTech?.longDescriptor}</div>
      </Modal>
    </>
  )
}
