import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SMainSliderName = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 35px;
  font-weight: 700;
  color: white;
  @media (max-width: 1024px) {
    font-size: 25px;
    bottom: 0;
    left: 10px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    bottom: 0;
    left: 5px;
  }
`
export const SMainSliderPrice = styled.p`
  position: absolute;
  right: 60px;
  bottom: 20px;
  font-size: 25px;
  font-weight: 500;
  color: white;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
    width: 85px;
    right: 20px;
    bottom: 20px;
  }
`
export const SFavoriteButton = styled.button<{ isFavorite: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  color: ${(props) => (props.isFavorite ? 'red' : 'grey')};
  cursor: pointer;
`

export const StyledLink = styled(Link)`
  width: 110px;
  height: 30px;
  font-size: 20px;
  position: absolute;
  color: white;
  text-decoration: none;
  right: 64px;
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

  @media (max-width: 1024px) {
    font-size: 17px;
    width: 95px;
    height: 30px;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
    width: 85px;
    height: 25px;
    right: 24px;
    bottom: 20px;
  }
`

export const SMainSliderBlock = styled.div`
  position: relative;
  outline: none;
`
export const SMainSliderImg = styled.img`
  width: 100%;
  height: 580px;
  @media (max-width: 1024px) {
    height: 380px;
  }
  @media (max-width: 768px) {
    height: 280px;
  }
`

export const SMainSlider = styled.div`
  width: 100%;
  .slider {
    width: 100%;
    .slick-dots li button:before {
      content: '🎲';
      font-size: 20px;
      color: white;
    }
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }
  .slick-list {
    border-radius: 10px;
  }
`
