import { FC } from 'react';

import { IconButton } from '../IconButton/IconButton';

import s from './SearchInput.module.scss';

import Close from '@/assets/Close.svg?react';

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
}

const SearchInput: FC<Props> = ({ handleChange, value, onClickSearch }) => (
  <div className={s.container}>
    <input
      type="text"
      placeholder="Search for a product"
      value={value}
      onChange={handleChange}
      className={s.input}
    />

    <IconButton
      width="30px"
      onClick={onClickSearch}
    >
      <Close fill="#313237" />
    </IconButton>
  </div>
);

export default SearchInput;
