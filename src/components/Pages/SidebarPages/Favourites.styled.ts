import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SFavourites = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`
export const SFavouritesContainer = styled.div`
  width: 100%;

  @media (max-width: 1600px) {
    overflow-y: scroll;
  }
`
export const SFavouritesTitle = styled.h1`
  color: white;
  text-align: center;
`

export const SFavouritesBgImg = styled.div`
  background-image: url('../../images/Gamestore.jpg');
  filter: blur(4px);
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`

export const SFavouritesGames = styled.div`
  position: relative;
  height: 250px;
  width: 355px;
  margin: 4px 8px;

  @media (max-width: 1600px) {
    height: 200px;
    width: 300px;
  }
`

export const SFavouritesImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

export const SFavouritesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 5px;
`

export const SFavouritesName = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 20px;
  font-weight: 700;
  color: white;
  padding: 0 20px;

  @media (max-width: 1600px) {
    font-size: 15px;
  }
`

export const StyledFavouritesLink = styled(Link)`
  width: 70px;
  height: 31px;
  font-size: 20px;
  position: absolute;
  color: white;
  text-decoration: none;
  right: 30px;
  bottom: 20px;

  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 5px, 0 5px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover {
    background-size: 0 5px, 100% 5px;
  }

  @media (max-width: 1600px) {
    font-size: 15px;
    width: 50px;
    height: 25px;
    right: 25px;
    bottom: 15px;
  }
`
export const StyledDeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: gray;
  cursor: pointer;

  &:hover {
    color: white;
  }
`
