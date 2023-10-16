import styled from 'styled-components'

export const SMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1500px;
  margin: auto;
  overflow: hidden;
  padding: 20px;
`

export const SMainGame = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0;
  background-image: url('../images/iconsrec.png');
  background-repeat: no-repeat;
  background-position: right;
  width: 280px;

  @media (max-width: 1600px) {
    margin-top: 30px;
  }
`

export const SMainGameRec = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SMainSliderName = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 20px;
  font-weight: 700;
  color: white;
  padding: 10px 20px;
`
export const SMainSliderPrice = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 15px;
  font-weight: 500;
  color: white;
  padding: 10px 20px;
`

export const SMainSliderBlock = styled.div`
  position: relative;
  margin: 7px;
  width: 360px;
  height: 225px;
`
export const SMainSliderImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
