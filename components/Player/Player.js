import * as S from './Player.styles';
import * as P from 'video-react';
import Container from '../Container';

export default function Player({ src, poster, ...props }){
  return(
    <S.RPlayer>
      <P.Player
        fluid={true}
        width='auto'
        height={485}
        src={src}
        poster={poster}
      >
        <P.BigPlayButton position='center' />
        <P.LoadingSpinner />
        <P.ControlBar autoHide={true} >
          <P.PlayToggle order={1} onClick={(e) => e.stopPropagation()}/>
          <P.ForwardControl seconds={10} order={2} disabled/>
          <P.VolumeMenuButton disabled/>
          <P.ProgressControl order={2}/>
          <P.CurrentTimeDisplay order={3.1}/>
          <P.TimeDivider order={3.2}/>
          <P.DurationDisplay order={3.3}/>
          <P.FullscreenToggle order={4}/>
        </P.ControlBar>
      </P.Player>  
    </S.RPlayer>
  )
}