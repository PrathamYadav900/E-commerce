import { Product } from '../types/type'
import ROG from '../assets/images/ROG.webp'
import iphone from '../assets/images/google.png'
import sonytv from '../assets/images/sonytv.webp'
import oneplus from '../assets/images/oneplus.webp'
import sonyPS5 from '../assets/images/sonyPS5.webp'
import nothing from '../assets/images/nothing.webp'


export const AllProductsdata : Product[]=[
    {
        id: 1,
        name: 'Google Pixel',
        description: 'Description of Product 1',
        price: 99,
        image: `${iphone}`,
      },
      {
        id: 2,
        name: 'ROG',
        description: 'Description of Product 2',
        price: 149,
        image: `${ROG}`,
      },
      {
        id: 3,
        name: 'Sony Tv',
        description: 'Description of Product 2',
        price: 149,
        image: `${sonytv}`,
      },
      {
        id: 4,
        name: 'OnePlue ',
        description: 'Description of Product 2',
        price: 149,
        image: `${oneplus}`,
      },
      {
        id: 5,
        name: 'Sony PS5',
        description: 'Description of Product 2',
        price: 149,
        image: `${sonyPS5}`,
      },
      {
        id: 6,
        name: 'ROG',
        description: 'Description of Product 2',
        price: 149,
        image: `${ROG}`,
      },
      {
        id: 7,
        name: 'Nothing',
        description: 'Description of Product 2',
        price: 149,
        image: `${nothing}`,
      },
]