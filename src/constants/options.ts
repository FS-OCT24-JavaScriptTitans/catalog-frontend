import { Option } from '@/types/Options.type';

export const sortOptions: Option<string>[] = [
  {
    id: 1,
    value: 'popularity',
    label: 'product.sort.popularity',
  },
  {
    id: 2,
    value: 'low-to-high',
    label: 'product.sort.priceHigh',
  },

  {
    id: 3,
    value: 'high-to-low',
    label: 'product.sort.priceLow',
  },
];

export const perPageOptions: Option<string>[] = [
  {
    id: 1,
    value: '16',
    label: '16',
  },
  {
    id: 2,
    value: '24',
    label: '24',
  },
  {
    id: 3,
    value: '32',
    label: '32',
  },
];
