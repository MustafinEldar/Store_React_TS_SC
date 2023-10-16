import React, { useState } from 'react'
import {
  SSearch,
  SSearchForm,
  SSearchInput,
  SSearchResults,
  SSearchResultLink,
  SSearchIcon,
} from './Search.styled'
import { arrGameMenu } from '../../../../../mock/mock'

export const Search = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const filteredRoutes = searchInput
    ? arrGameMenu.filter((route) =>
        route.name.toLowerCase().includes(searchInput.toLowerCase()),
      )
    : []

  return (
    <SSearch>
      <SSearchForm>
        <SSearchInput
          placeholder="Название игры"
          type="text"
          onChange={handleSearchInput}
        />
        <SSearchIcon />
        {filteredRoutes.length > 0 && (
          <SSearchResults>
            {filteredRoutes.map((route) => (
              <SSearchResultLink key={route.pages} to={route.pages}>
                {route.name}
              </SSearchResultLink>
            ))}
          </SSearchResults>
        )}
      </SSearchForm>
    </SSearch>
  )
}
