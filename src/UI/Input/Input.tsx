import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import cn from 'classnames';
import { memo } from 'react';

import s from './Input.module.scss';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  type: string;
  err: string;
  isValid: boolean;
}

const FormInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, label, register, type, err } = props;

  return (
    <div>
      <label
        htmlFor={name}
        className={cn(s.label, '.uppercase-text')}
      >
        <span> {label}</span>
        <input
          className={cn(s.input, {
            [s.inputInvalid]: err,
            [s.inputValid]: !err,
          })}
          type={type}
          id={name}
          {...(register ? register(name) : { name })}
        />
      </label>
      <p
        className={cn(s.inputError, 'primary-text', {
          invisible: !err,
        })}
      >
        {err}
      </p>
    </div>
  );
};

export const Input = memo(FormInput) as <T extends FieldValues>(props: Props<T>) => React.ReactNode;
