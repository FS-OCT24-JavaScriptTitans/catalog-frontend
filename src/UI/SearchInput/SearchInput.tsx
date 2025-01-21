import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '../IconButton/IconButton';

import s from './SearchInput.module.scss';

import Close from '@/assets/Close.svg?react';
import Search from '@/assets/Search.svg?react';

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
  handleSubmit: (value: string) => void;
}

const SearchInput: FC<Props> = ({ handleChange, value, onClickSearch, handleSubmit }) => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <input
        type="text"
        placeholder={t('search')}
        value={value}
        onChange={handleChange}
        className={s.input}
      />

      <IconButton
        width="30px"
        onClick={() => handleSubmit(value)}
      >
        <Search fill="#313237" />
      </IconButton>

      <IconButton
        width="30px"
        onClick={onClickSearch}
      >
        <Close fill="#313237" />
      </IconButton>
    </div>
  );
};

export default SearchInput;
