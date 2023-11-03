import React, { ReactNode, useState } from "react"
import styled from "styled-components"

const ModalMask = styled.div`
  position: fixed;
  z-index: 80;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.8);
`

const ModalContainer = styled.div`
  z-index: 80;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  background: black;
  outline: 15px solid black;
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  max-height: 70%;
`

const ModalTitle = styled.div`
  background: white;
  color: black;
  display: flex;
  justify-content: center;
`

const ModalCloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 50px;
  margin: 2px;
  font-size: 36px;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  background: black;
  color: white;
  padding: 5px;

  &:hover {
    text-decoration: underline;
  }
`

const ModalBody = styled.div`
  overflow: scroll;
  padding: 40px;
  max-height: 100%;
`

//Hook for toggling modal
export default function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    toggle,
  }
}

//Modal props
export type ModalProps = {
  title: string
  children: ReactNode
  isOpen: boolean
  toggle: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
  const handleClose = () => {
    props.toggle()
  }

  return (
    props.isOpen && (
      <ModalMask
        onClick={() => {
          handleClose()
        }}
      >
        <ModalContainer
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <ModalTitle>
            {props.title}
            <ModalCloseButton
              aria-label='Close Modal'
              onClick={() => handleClose()}
            >
              X
            </ModalCloseButton>
          </ModalTitle>
          <ModalBody>{props.children}</ModalBody>
        </ModalContainer>
      </ModalMask>
    )
  )
}
