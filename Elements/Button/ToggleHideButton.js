import HideIcon from '../../images/js/HideIcon';
import * as S from './Button.styles';

export default function ToggleHideButton({ ishidden, ...props }) {

  return (
    <S.ToggleHideButton {...props}>
      <HideIcon ishidden={ishidden} />
    </S.ToggleHideButton>
  )
}