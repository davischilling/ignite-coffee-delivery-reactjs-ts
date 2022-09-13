import { CoffeeItem } from './reducers'

import ExpressoTradicional from '../assets/coffees/expresso-tradicional.svg'
import ExpressoAmericano from '../assets/coffees/expresso-americano.svg'
import ExpressoCremoso from '../assets/coffees/expresso-cremoso.svg'
import ExpressoGelado from '../assets/coffees/expresso-gelado.svg'
import cafeComLeite from '../assets/coffees/cafe-com-leite.svg'
import latte from '../assets/coffees/latte.svg'
import capuccino from '../assets/coffees/capuccino.svg'
import macchiato from '../assets/coffees/macchiato.svg'
import mocaccino from '../assets/coffees/mocaccino.svg'
import chocolateQuente from '../assets/coffees/chocolate-quente.svg'
import cubano from '../assets/coffees/cubano.svg'
import havaiano from '../assets/coffees/havaiano.svg'
import arabe from '../assets/coffees/arabe.svg'
import irlandes from '../assets/coffees/irlandes.svg'

export const coffeeItems: CoffeeItem[] = [
  {
    id: 'c6c30e09-ed26-491a-a6a1-3a2a86b85fef',
    img: ExpressoTradicional,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '831b1062-4114-40e0-bfd7-be0fce32e808',
    img: ExpressoAmericano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '32d6c777-16a0-4f5a-a000-bf780960d317',
    img: ExpressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '29e7bbb5-0cf2-4036-a136-7647f0e78929',
    img: ExpressoGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: '5da0b39f-74ae-411d-8f02-9e71d2cb9ca7',
    img: cafeComLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '3250879a-e174-4853-a937-c1627e4dfeca',
    img: latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '0688ad18-536a-4d24-8aa5-c75a02bcc98d',
    img: capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 'a2e46de9-7ba2-4d56-851c-9b497dd5293b',
    img: macchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '564df29a-a84b-4c94-b2ff-c23e7ea804ec',
    img: mocaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '8a0cb3bf-6063-44b5-bbf8-121cff72cc9d',
    img: chocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
    tags: ['especial', 'com leite'],
  },
  {
    id: '52e205ba-e7ad-4bb5-8746-05d8155fdb0c',
    img: cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 'b976de1c-b295-4f33-b404-2911c0e5c896',
    img: havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
    tags: ['especial'],
  },
  {
    id: 'bc38ea2d-879e-4a57-912a-5ca74f247cfc',
    img: arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
    tags: ['especial'],
  },
  {
    id: '545a0ae6-81f8-4807-b013-38c76c4e168c',
    img: irlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
    tags: ['especial', 'alcoólico'],
  },
]
