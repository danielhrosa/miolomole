import styled from 'styled-components';

export const RPlayer = styled.div`
  width: 100%;
  max-width: 800px;
  .video-react {
    color: #fbb040;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2.5;
    font-size: 14px;
    transition: all 0.5s ease-in-out;

    border-radius: 4px;
    
    >button{ color: ${({ theme: { color: { brand } } }) => brand}; }

    .video-react-control{
      color: #ffffff;
      width: 3em;
      transition: all 0.4s ease;

      &:hover{ color: #fbb040 }
      &:focus{ text-shadow: 0em 0em 0.5em #fff, 0em 0em 0.5em #fff }
    }

    .video-react-control-bar{ border-radius: 0 0px 4px 4px }
    .video-react-video{ border-radius: 4px }
    .video-react-poster{ border-radius: 4px }
    .video-react-fluid{ border-radius: 4px }
    .video-react-time-divider{ padding-left: 0.5em }
    .video-react-time-control{ padding-left: 0.5em; padding-right: 0.5em }
    .video-react-play-progress{ background-color: #fbb040 }
    .video-react-slider{ transition: all 0.5s ease-in-out; &:focus, &:hover{ box-shadow: 0 0 0.5em #ffffff90 } }

    .video-react-big-play-button{
      border-color: #fbb040;
      background-color: #00000020;
      transition: all 0.5s ease-in-out;
    }

    &:hover{
      background-color: #ffffff20;
      >button{ border-color: ${({ theme: { color: { brand } } }) => brand};; color: #fbb040; }
    }

    .video-react-progress-holder{ border-radius: 4px}
    .video-react-load-progress{
      border-radius: 4px;
      >div{ border-radius: 4px }
    }
  }

  @media (min-width: 1024px){ padding: 30px }

`
