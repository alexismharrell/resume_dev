import React from "react"
import styled from "styled-components"

const ModalContainer = styled.div``

const ModalTitle = styled.div`
`

const ModalBody = styled.div`
`

export type ModalProps = {
    isOpen: boolean,
    title: string
}

export class Modal extends React.Component (props: ModalProps) {
    return (
        <ModalContainer>
            <ModalTitle></ModalTitle>
            <ModalBody>
                {...props.children}
            </ModalBody>
        </ModalContainer>
    )
}