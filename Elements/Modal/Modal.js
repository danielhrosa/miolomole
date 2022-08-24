import { useState } from 'react';
import * as S from './Modal.styles';

export default function Modal({ isOpen, setIsOpen, children }) {
  return (
    <S.ModalWrapper onClick={() => setIsOpen()}>
      <S.Modal>
        <S.Close>+</S.Close>
        <div onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </S.Modal>
    </S.ModalWrapper>
  )
}