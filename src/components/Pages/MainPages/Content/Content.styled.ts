import styled from 'styled-components'

type SBgImgProps = {
  image: string
}

export const SContent = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
`
export const SContentMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  @media (max-width: 1600px) {
    overflow-y: scroll;
  }
`

export const SBgImg = styled.div<SBgImgProps>`
  background-image: url(${(props) => props.image});
  filter: blur(6px);
  width: 101vw;
  height: 101vh;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`
export const SBgOpacity = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`
