import { FC } from 'react';

import { IconButton } from '../IconButton/IconButton';

import s from './SearchInput.module.scss';

import Search from '@/assets/Search.svg?react';

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<Props> = ({ handleChange, value }) => (
  <div className={s.container}>
    <input
      type="text"
      placeholder="Search for a product"
      value={value}
      onChange={handleChange}
      className={s.input}
    />

    <IconButton width="30px">
      <Search fill="#313237" />
    </IconButton>
  </div>
);

export default SearchInput;
