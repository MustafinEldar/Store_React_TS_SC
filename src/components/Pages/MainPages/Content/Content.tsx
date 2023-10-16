import { memo, useState } from 'react'
import { Main } from '../Main/Main'
import { Sidebar } from '../Sidebar/Sidebar'
import { SBgImg, SBgOpacity, SContent, SContentMain } from './Content.styled'
import { arrGameMenu } from '../../../../mock/mock'

type GameMenuItem = {
  name: string
  images: string
  price: number
}

const Content = () => {
  const [currentImage, setCurrentImage] = useState<GameMenuItem['images']>(
    arrGameMenu[0].images,
  )

  return (
    <SContent>
      <SBgImg image={currentImage} />
      <SBgOpacity />
      <Sidebar />
      <SContentMain>
        <Main setCurrentImage={setCurrentImage} />
      </SContentMain>
    </SContent>
  )
}

export default memo(Content)
