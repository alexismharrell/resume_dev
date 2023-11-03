import styled from "styled-components"
import { Experience, ExperienceArray } from "./constants"
import useModal, { Modal } from "./Modal"
import { useState } from "react"

const ExperienceContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px 32px;
`

const ExperienceSection = styled.div`
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

const ExperienceSectionTitleContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;
  border-bottom: 2px white solid;

  > #title {
    font-weight: bold;
  }

  > #location {
    filter: brightness(75%);
  }
`

const ExperienceSectionSummary = styled.div`
  display: flex;
  align-content: center;
`

const ResponsibilityList = styled.ul``

const ResponsibilityListItem = styled.li``

export const ExperienceContentComponent = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience>()
  const { isOpen, toggle } = useModal()

  const handleExperienceClick = (exp: Experience) => {
    setSelectedExperience(exp)
  }

  return (
    <>
      <ExperienceContentContainer>
        {ExperienceArray.map((exp: Experience) => {
          return (
            <ExperienceSection
              onClick={() => {
                handleExperienceClick(exp)
                toggle()
              }}
            >
              <ExperienceSectionTitleContainer>
                <div id='title'>{exp.company}</div>
                <div id='location'>{exp.location}</div>
                <div>{exp.employedDates}</div>
              </ExperienceSectionTitleContainer>
              <ExperienceSectionSummary>{exp.summary}</ExperienceSectionSummary>
            </ExperienceSection>
          )
        })}
      </ExperienceContentContainer>
      <Modal
        title={selectedExperience?.company || ""}
        isOpen={isOpen}
        toggle={toggle}
      >
        <ExperienceSectionSummary>{selectedExperience?.summary}</ExperienceSectionSummary>
        <ResponsibilityList>
          {selectedExperience?.responsibilities.map((resp: string) => {
            return <ResponsibilityListItem>{resp}</ResponsibilityListItem>
          })}
        </ResponsibilityList>
      </Modal>
    </>
  )
}
