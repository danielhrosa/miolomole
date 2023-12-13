import { useState } from 'react';
import * as S from './Modal.styles';

export default function Modal({ isOpen, setIsOpen, children, ...props }) {
  return (
    <S.ModalWrapper onClick={() => setIsOpen()} {...props}>
      <S.Modal>
        <S.Close className="close">+</S.Close>
        <div onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </S.Modal>
    </S.ModalWrapper>
  )
}