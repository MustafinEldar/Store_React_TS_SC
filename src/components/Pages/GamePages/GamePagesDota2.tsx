import React, { useState } from 'react'
import {
  SGamePages,
  SGamePagesBtn,
  SGamePagesBuy,
  SGamePagesDescription,
  SGamePagesName,
  SGamePagesPayment,
  SGamePagesPrice,
  SMainBgImg,
  SMainPages,
  StyledLinkBack,
} from './GamePagesDota2.styled'
import { Sidebar } from '../MainPages/Sidebar/Sidebar'
import { Modal } from './Modal'

export const GamePagesDota2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <SMainPages>
        <Sidebar />
        <SMainBgImg />
        <SGamePages>
          <SGamePagesBuy>
            <SGamePagesName>Наименование игры: Dota 2 </SGamePagesName>
            <SGamePagesDescription>
              Описание: Dota 2(Defense of the Ancient (от англ. «защита
              древнего»)) – это многопользовательская командная компьютерная
              экшен-игра в жанре MOBA. На сегодняшний день в этой игре 124
              героя, обладающих минимум по 4 способности. Также в игре 136
              предметов,и большую часть из них может купить каждый игрок. Суть
              игры заключается в уничтожение главного здания противника -
              вражеского ancient. Для того чтобы понимать, что происходит во
              время игры и как в неё играть, нужно знать каждую способность
              героев (примерно 500) и что даёт каждый предмет (их 136). Во время
              игры часто возникают ситуации, в которых нужно принять решение за
              доли секунды, также следует обдумывать, как будут действовать твои
              противники. Кроме того, примерно раз в 2 недели происходит
              незначительные изменения баланса, а раз в 3-4 месяца выпускаются
              крупные изменения, из-за этого игра не стоит на месте и постепенно
              меняется.{' '}
            </SGamePagesDescription>
            <SGamePagesPrice>Цена: Личная жизнь </SGamePagesPrice>
            <SGamePagesPayment>Тип оплаты: Душа</SGamePagesPayment>
            <SGamePagesBtn onClick={handleButtonClick}>Оплатить</SGamePagesBtn>
            <StyledLinkBack to={'/'}>На главную</StyledLinkBack>
          </SGamePagesBuy>
        </SGamePages>
      </SMainPages>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          Ваша душа успешно продана
        </Modal>
      )}
    </>
  )
}
