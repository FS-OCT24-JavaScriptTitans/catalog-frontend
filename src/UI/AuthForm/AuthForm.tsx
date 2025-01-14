import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { BaseSyntheticEvent } from 'react';

import { Button } from '../Button/Button';

import s from './Auth.module.scss';

import { Input } from '@/UI/Input/Input';
import GoogleButton from '@/components/Auth/GoogleButton';

interface AuthFormProps<T extends FieldValues> {
  fields: Array<{
    label: string;
    type: string;
    name: Path<T>;
  }>;
  onSubmit: (e?: BaseSyntheticEvent<object, unknown, unknown> | undefined) => void;
  register: UseFormRegister<T>;
  errors: Record<string, { message?: string }>;
  isValid: boolean;
  buttonLabel: string;
}

export const AuthForm = <T extends FieldValues>({
  fields,
  onSubmit,
  register,
  errors,
  buttonLabel,
}: AuthFormProps<T>) => (
  <article className={s.auth}>
    <div className={s.container}>
      <form
        className={s.form}
        onSubmit={onSubmit}
      >
        {fields.map((field) => (
          <Input
            key={field.name}
            label={field.label}
            type={field.type}
            register={register}
            name={field.name}
            err={errors[field.name]?.message || ''}
          />
        ))}

        <Button
          label={buttonLabel}
          type="submit"
        />
      </form>

      <GoogleButton />
    </div>
  </article>
);
