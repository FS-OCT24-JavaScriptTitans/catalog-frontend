import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartProduct } from '@/types/Cart.types';
import { decreaseProductQuantity, increaseProductQuantity } from '@/utils/cart/cartQuantity';
import { Product } from '@/types/Product.type';

interface cartState {
  cart: CartProduct[];
}

const initialState: cartState = {
  cart: [
    {
      id: 'apple-watch-series-3-38mm-space-gray',
      category: 'accessories',
      namespaceId: 'apple-watch-series-3',
      name: 'Apple Watch Series 3 38mm Space Gray',
      capacityAvailable: ['38mm', '42mm'],
      capacity: '38mm',
      priceRegular: 199,
      priceDiscount: 169,
      colorsAvailable: ['space gray', 'silver', 'gold'],
      color: 'space gray',
      images: [
        'img/accessories/apple-watch-series-3/space-gray/00.webp',
        'img/accessories/apple-watch-series-3/space-gray/01.webp',
        'img/accessories/apple-watch-series-3/space-gray/02.webp',
      ],
      description: [
        {
          title: 'Monitor your health',
          text: [
            'The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals.',
          ],
        },
        {
          title: 'Stay connected on the go',
          text: [
            'With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free.',
          ],
        },
        {
          title: 'Stream your favorite music',
          text: [
            'With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations.',
          ],
        },
      ],
      screen: "1.3' OLED",
      resolution: '272x340',
      processor: 'Apple S3',
      ram: '768MB',
      cell: ['Wi-Fi', 'Bluetooth', 'LTE'],
      quantity: 1,
    },
    {
      id: 'apple-watch-series-3-42mm-space-gray',
      category: 'accessories',
      namespaceId: 'apple-watch-series-3',
      name: 'Apple Watch Series 3 42mm Space Gray',
      capacityAvailable: ['38mm', '42mm'],
      capacity: '42mm',
      priceRegular: 250,
      priceDiscount: 219,
      colorsAvailable: ['space gray', 'silver', 'gold'],
      color: 'space gray',
      images: [
        'img/accessories/apple-watch-series-3/space-gray/00.webp',
        'img/accessories/apple-watch-series-3/space-gray/01.webp',
        'img/accessories/apple-watch-series-3/space-gray/02.webp',
      ],
      description: [
        {
          title: 'Monitor your health',
          text: [
            'The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals.',
          ],
        },
        {
          title: 'Stay connected on the go',
          text: [
            'With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free.',
          ],
        },
        {
          title: 'Stream your favorite music',
          text: [
            'With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations.',
          ],
        },
      ],
      screen: "1.3' OLED",
      resolution: '272x340',
      processor: 'Apple S3',
      ram: '768MB',
      cell: ['Wi-Fi', 'Bluetooth', 'LTE'],
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
