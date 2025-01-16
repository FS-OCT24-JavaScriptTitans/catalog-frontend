import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartProduct } from '@/types/Cart.types';
import { decreaseProductQuantity, increaseProductQuantity } from '@/utils/cart/cartQuantity';
import { Product } from '@/types/Product.type';

export interface CartState {
  cart: CartProduct[];
}

const initialState: CartState = {
  cart: [
    {
      id: 'apple-iphone-11-128gb-black',
      category: 'phones',
      namespaceId: 'apple-iphone-11',
      name: 'Apple iPhone 11 128GB Black',
      capacityAvailable: ['64GB', '128GB', '256GB'],
      capacity: '128GB',
      priceRegular: 1100,
      priceDiscount: 1050,
      colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
      color: 'black',
      images: [
        'img/phones/apple-iphone-11/black/00.webp',
        'img/phones/apple-iphone-11/black/01.webp',
        'img/phones/apple-iphone-11/black/02.webp',
        'img/phones/apple-iphone-11/black/03.webp',
        'img/phones/apple-iphone-11/black/04.webp',
      ],
      description: [
        {
          title: 'And then there was Pro',
          text: [
            'A transformative triple-camera system that adds tons of capability without complexity.',
            'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
          ],
        },
        {
          title: 'Camera',
          text: [
            'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
          ],
        },
        {
          title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
          text: [
            'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
          ],
        },
      ],
      screen: "6.1' IPS",
      resolution: '1792x828',
      processor: 'Apple A13 Bionic',
      ram: '4GB',
      camera: '12 Mp + 12 Mp + 12MP',
      zoom: 'Digital, 5x',
      cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
      quantity: 4,
    },
    {
      id: 'apple-ipad-pro-11-2021-128gb-spacegray',
      category: 'tablets',
      namespaceId: 'apple-ipad-pro-11-2021',
      name: 'Apple iPad Pro 11 (2021) 128GB Space Gray',
      capacityAvailable: ['128GB', '256GB', '512GB', '1TB', '2TB'],
      capacity: '128GB',
      priceRegular: 799,
      priceDiscount: 749,
      colorsAvailable: ['spacegray', 'silver'],
      color: 'spacegray',
      images: [
        'img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp',
        'img/tablets/apple-ipad-pro-11-2021/spacegray/01.webp',
        'img/tablets/apple-ipad-pro-11-2021/spacegray/02.webp',
      ],
      description: [
        {
          title: 'Powerful Performance',
          text: [
            'Experience incredible power and performance with the Apple iPad Pro 11. With the M1 chip, it delivers a new level of performance, making it faster and more efficient than ever before.',
            "Whether you're editing photos, designing artwork, or multitasking with demanding apps, the iPad Pro 11 handles it all with ease.",
          ],
        },
        {
          title: 'Stunning Liquid Retina Display',
          text: [
            "Enjoy a vibrant and immersive visual experience on the iPad Pro 11's Liquid Retina display. With ProMotion technology and True Tone, the display adapts to your environment, providing smooth scrolling, precise color accuracy, and incredible detail.",
            "From watching movies to editing videos, the iPad Pro 11's display brings your content to life with stunning clarity.",
          ],
        },
        {
          title: 'Versatile Camera System',
          text: [
            "Capture stunning photos and videos with the iPad Pro 11's advanced camera system. Featuring a 12MP Ultra Wide front camera and a 12MP Wide rear camera with LiDAR scanner, you can take high-quality shots and enjoy augmented reality experiences.",
            "Whether you're video calling, scanning documents, or recording 4K videos, the iPad Pro 11's camera system delivers exceptional performance.",
          ],
        },
      ],
      screen: "11' Liquid Retina",
      resolution: '2388x1668',
      processor: 'Apple M1',
      ram: '8GB',
      camera: '12MP + 12MP',
      zoom: 'Digital zoom up to 5x',
      cell: ['Not applicable'],
      quantity: 4,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, { payload }: PayloadAction<{ product: Product }>) => {
      state.cart.push({ ...payload.product, quantity: 1 });
    },

    increaseQuantity: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.cart = increaseProductQuantity(state.cart, payload.id);
    },

    removeQuantity: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.cart = decreaseProductQuantity(state.cart, payload.id);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addProductToCart, increaseQuantity, removeQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
