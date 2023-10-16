import React, { useCallback, useMemo, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {
  SFavoriteButton,
  SMainSlider,
  SMainSliderBlock,
  SMainSliderImg,
  SMainSliderName,
  SMainSliderPrice,
  StyledLink,
} from './Slider.styled'
import { arrGameMenu } from '../../../../../mock/mock'
import { AiFillHeart } from 'react-icons/ai'

type MainSliderProps = {
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>
}

export const MainSlider = ({ setCurrentImage }: MainSliderProps) => {
  type FavoriteGame = {
    name: string
    image: string
    page: string
  }

  const [favorites, setFavorites] = useState<FavoriteGame[]>(() => {
    const savedFavorites = localStorage.getItem('favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const toggleFavorite = useCallback((game: FavoriteGame) => {
    setFavorites((prev) => {
      let newFavorites
      const favorite = prev.find((f) => f.name === game.name)
      if (favorite) {
        newFavorites = prev.filter((f) => f.name !== game.name)
      } else {
        newFavorites = [...prev, game]
      }
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }, [])

  const sliderSettings = {
    className: 'slider',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (current: any, next: number) => {
      setCurrentImage(arrGameMenu[next].images)
    },
  }

  const sliderData = useMemo(
    () =>
      arrGameMenu.map((game) => (
        <SMainSliderBlock key={game.name}>
          <SMainSliderName>{game.name}</SMainSliderName>
          <StyledLink to={game.pages}>Приобрести</StyledLink>
          <SMainSliderImg src={game.images} alt={game.name} />
          <SMainSliderPrice>{game.price}</SMainSliderPrice>
          <SFavoriteButton
            isFavorite={favorites.some((f) => f.name === game.name)}
            onClick={() =>
              toggleFavorite({
                name: game.name,
                image: game.images,
                page: game.pages,
              })
            }>
            <AiFillHeart />
          </SFavoriteButton>
        </SMainSliderBlock>
      )),
    [favorites, toggleFavorite],
  )

  return (
    <div>
      <SMainSlider>
        <Slider {...sliderSettings}>{sliderData}</Slider>
      </SMainSlider>
    </div>
  )
}
