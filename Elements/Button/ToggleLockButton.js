import LockUnlock from '../../images/js/LockUnlock';
import * as S from './Button.styles';

export default function ToggleLockButton({ isLocked, ...props }) {

  return (
    <S.ToggleLockButton {...props}>
      <LockUnlock isLocked={isLocked} />
    </S.ToggleLockButton>
  )
}