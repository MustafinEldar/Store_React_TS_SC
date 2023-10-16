import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SMainPages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`
export const SMainBgImg = styled.div`
  background-image: url('../../images/Dota2Pages.jpeg');
  filter: blur(5px);
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`

export const SGamePages = styled.div`
  display: flex;
  justify-content: center;
`

export const SGamePagesBuy = styled.div`
  height: 90%;
  width: 50%;
  background-image: url('../../images/Dota2Description.jpg');
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #c7d5e0;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;

  @media (max-width: 1600px) {
    padding: 5px 20px;
    margin: 5px;
    height: 95%;
    width: 70%;
  }
`

export const SGamePagesName = styled.h1`
  text-align: center;
  color: #66c0f4;
  font-size: 2em;
  font-weight: bold;

  @media (max-width: 1600px) {
    font-size: 1.5em;
  }
`

export const SGamePagesDescription = styled.h2`
  color: white;
  font-size: 1.5em;

  @media (max-width: 1600px) {
    font-size: 1.2em;
  }
  @media (max-width: 900px) {
    font-size: 1em;
  }
`

export const SGamePagesPrice = styled.h2`
  position: absolute;
  bottom: 40px;
  color: #66c0f4;
  font-size: 1.5em;

  @media (max-width: 1600px) {
    font-size: 1em;
    bottom: 100px;
  }
`

export const SGamePagesPayment = styled.h2`
  color: #66c0f4;
  font-size: 1.5em;
  position: absolute;
  bottom: 5px;

  @media (max-width: 1600px) {
    font-size: 1em;
    bottom: 70px;
  }
`

export const SGamePagesBtn = styled.button`
  color: white;
  background-color: #1b2838;
  border-radius: 15px;
  border: none;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  position: absolute;
  left: 300px;
  bottom: 30px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #66c0f4;
    color: black;
  }

  @media (max-width: 1600px) {
    left: 30px;
    bottom: 30px;
  }
`

export const StyledLinkBack = styled(Link)`
  width: 135px;
  height: 36px;
  font-size: 25px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: white;
  text-decoration: none;
  background: linear-gradient(
      to left,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to left,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 5px, 0 5px;
  background-position: 0 100%, 100% 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  &:hover {
    background-size: 0 5px, 100% 5px;
  }

  @media (max-width: 1600px) {
    font-size: 15px;
    width: 85px;
    height: 25px;
    bottom: 25px;
  }
`
