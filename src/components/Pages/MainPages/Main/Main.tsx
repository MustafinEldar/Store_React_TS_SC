import React, { useMemo } from 'react'
import {
  SMain,
  SMainGame,
  SMainGameRec,
  SMainSliderBlock,
  SMainSliderImg,
  SMainSliderName,
  SMainSliderPrice,
} from './Main.styled'
import { Search } from '../Header/Search/Search'
import { MainSlider } from './Slider/Slider'
import { arrGameMenuRec } from '../../../../mock/mock'

type MainProps = {
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>
}

export const Main = ({ setCurrentImage }: MainProps) => {
  const recData = useMemo(
    () =>
      arrGameMenuRec.map((el) => (
        <SMainSliderBlock key={el.name}>
          <SMainSliderName>{el.name}</SMainSliderName>
          <SMainSliderImg src={el.images} alt={el.name} />
          <SMainSliderPrice>{el.price}</SMainSliderPrice>
        </SMainSliderBlock>
      )),
    [],
  )

  return (
    <SMain>
      <Search />
      <MainSlider setCurrentImage={setCurrentImage} />
      <SMainGame>RECOMMENDED FOR YOU</SMainGame>
      <SMainGameRec>{recData.slice(0, 4)}</SMainGameRec>
    </SMain>
  )
}
