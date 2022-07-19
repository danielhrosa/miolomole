import { useState } from 'react';
import HideIcon from '../../images/js/HideIcon';
import * as S from './Button.styles';

export default function ToggleHideButton({ isHidden, ...props }) {
  return (
    <S.ToggleHideButton {...props}>
      <HideIcon isHidden={isHidden} />
    </S.ToggleHideButton>
  )
}