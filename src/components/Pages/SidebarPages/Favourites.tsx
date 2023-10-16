import React, { useEffect, useState } from 'react'
import {
  SFavourites,
  SFavouritesBgImg,
  SFavouritesBlock,
  SFavouritesContainer,
  SFavouritesGames,
  SFavouritesImg,
  SFavouritesName,
  SFavouritesTitle,
  StyledDeleteButton,
  StyledFavouritesLink,
} from './Favourites.styled'
import { Sidebar } from '../MainPages/Sidebar/Sidebar'
import { AiFillDelete } from 'react-icons/ai'

interface FavoriteGame {
  name: string
  image: string
  page: string
}

export const Favourites = () => {
  const [favorites, setFavorites] = useState<FavoriteGame[]>([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    setFavorites(savedFavorites ? JSON.parse(savedFavorites) : [])
  }, [])

  const deleteFavorite = (game: FavoriteGame) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((f) => f.name !== game.name)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  return (
    <SFavourites>
      <Sidebar />
      <SFavouritesBgImg />
      <SFavouritesContainer>
        <SFavouritesTitle>СПИСОК ЖЕЛАЕМОГО</SFavouritesTitle>
        <SFavouritesBlock>
          {favorites.map((game) => (
            <SFavouritesGames key={game.name}>
              <SFavouritesName>{game.name}</SFavouritesName>
              <SFavouritesImg src={game.image} alt={game.name} />
              <StyledFavouritesLink to={game.page}>Купить</StyledFavouritesLink>
              <StyledDeleteButton onClick={() => deleteFavorite(game)}>
                <AiFillDelete size={20} />
              </StyledDeleteButton>
            </SFavouritesGames>
          ))}
        </SFavouritesBlock>
      </SFavouritesContainer>
    </SFavourites>
  )
}
