import { ChangeEvent, FC, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

import s from './SearchInput.module.scss';

import Search from '@/assets/Search.svg?react';

interface Props {
  handleSearch: (query: string) => void;
}

const SearchInput: FC<Props> = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const debouncedHandleSearch = debounce((query: string) => handleSearch(query), 300);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value.trim());
      debouncedHandleSearch(e.target.value.trim());
    },
    [debouncedHandleSearch],
  );

  return (
    <div className={s.container}>
      <input
        type="text"
        placeholder="Search for a product"
        value={query}
        onChange={handleChange}
        className={s.input}
      />
      <Search />
    </div>
  );
};

export default SearchInput;
