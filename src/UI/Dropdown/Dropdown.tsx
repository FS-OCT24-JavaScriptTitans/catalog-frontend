import { useState } from 'react';
import cn from 'classnames';

import { Arrow } from '../Arrow/Arrow';

import s from './Dropdown.module.scss';

import { Option } from '@/types/Options.type';

interface Props<T> {
  options: Option<T>[];
  onChange?: (value: T) => void;
  width?: string;
  hasBorder?: boolean;
}

export const Dropdown = <T,>({ options, onChange, width, hasBorder }: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const [option, setOption] = useState<Option<T>>(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleChangeOption = (opt: Option<T>) => () => {
    setOption(opt);
    setIsOpen(false);
    onChange?.(opt.value);
  };

  return (
    <div
      className={cn(s.dropdown, 'button-text', { [s.border]: hasBorder })}
      style={{ width }}
    >
      <button
        className={s.button}
        onClick={toggleDropdown}
      >
        {String(option.label)}
        {isOpen ?
          <Arrow direction="up" />
        : <Arrow direction="down" />}
      </button>
      {isOpen && (
        <ul className={s.list}>
          {options.map(({ value, id, label }) => (
            <li
              key={id}
              className={cn('primary-text', s.item)}
              onClick={handleChangeOption({ value, id, label })}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
