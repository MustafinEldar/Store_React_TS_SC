import React, { ReactNode } from 'react'
import { ModalBackground, ModalContent } from './Modal.styled'

interface ModalProps {
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackground>
  )
}
