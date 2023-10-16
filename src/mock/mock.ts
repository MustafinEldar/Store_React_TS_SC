import {
  AiFillHeart,
  AiFillHome,
  AiFillTag,
  AiFillWallet,
  AiFillWechat,
  AiTwotoneAppstore,
} from 'react-icons/ai'
import { BiSolidDiscount } from 'react-icons/bi'

export const arrNavMenu = [
  {
    name: 'Главная',
    icon: AiFillHome,
    pages: '/',
  },
  {
    name: 'Библиотека',
    icon: AiFillTag,
    pages: '/loading',
  },
  {
    name: 'Магазин',
    icon: AiTwotoneAppstore,
    pages: '/loading',
  },
  {
    name: 'Избранное',
    icon: AiFillHeart,
    pages: '/favourites',
  },
  {
    name: 'Скидки',
    icon: BiSolidDiscount,
    pages: '/loading',
  },
  {
    name: 'Кошелёк',
    icon: AiFillWallet,
    pages: '/loading',
  },
  {
    name: 'Друзья и чат',
    icon: AiFillWechat,
    pages: '/loading',
  },
]

type GameMenuItem = {
  name: string
  images: string
  price: number | string
  pages: string
}

export const arrGameMenu: GameMenuItem[] = [
  {
    name: 'Dota 2',
    images: '../../images/Dota2.jpg',
    price: 'Бесценно',
    pages: '/dota2',
  },

  {
    name: 'Planet of Lana',
    images: '../../images/PlanetLana.jpg',
    price: '4999 руб.',
    pages: '/loading',
  },
  {
    name: 'Overwatch 2',
    images: '../../images/Overwatch2.jpg',
    price: '4999 руб.',
    pages: '/loading',
  },
  {
    name: 'Forza Horizon 5',
    images: '../../images/ForzaHorizon.jpg',
    price: '4999 руб.',
    pages: '/loading',
  },
  {
    name: 'Naraka Bladepoint',
    images: '../../images/Naraka.jpg',
    price: '4999 руб.',
    pages: '/loading',
  },
  {
    name: 'Marvels`s Spider-Man: Miles Morales',
    images: '../../images/SpiderMan.jpg',
    price: '4999 руб.',
    pages: '/loading',
  },
  {
    name: 'Stray',
    images: '../../images/Stray.jpg',
    price: '4999 руб.',
    pages: '/loading',
  },
]

type GameRec = {
  name: string
  images: string
  price: number | string
}

export const arrGameMenuRec: GameRec[] = [
  {
    name: 'PUBG',
    images: '../../imagesrec/pubg.jpg',
    price: '2000 руб',
  },

  {
    name: 'Rust',
    images: '../../imagesrec/rust.jpg',
    price: '2000 руб',
  },
  {
    name: 'Icarus',
    images: '../../imagesrec/icarus.jpg',
    price: '2000 руб',
  },
  {
    name: 'BattleBit',
    images: '../../imagesrec/battlebit.jpg',
    price: '2000 руб',
  },
  {
    name: 'PUBG: BATTLEGROUNDS',
    images: '../../imagesrec/pubg.jpg',
    price: '2000 руб',
  },
  {
    name: 'PUBG: BATTLEGROUNDS',
    images: '../../imagesrec/pubg.jpg',
    price: '2000 руб',
  },
]
