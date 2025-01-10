import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { BaseSyntheticEvent } from 'react';

import { Button } from '../Button/Button';

import s from './Auth.module.scss';

import { Input } from '@/UI/Input/Input';
import { CustomLink } from '@/UI/Link/Link';
import { PATH } from '@/constants/path';
import GoogleButton from '@/components/Auth/GoogleButton';

interface AuthFormProps<T extends FieldValues> {
  title: string;
  fields: Array<{
    label: string;
    type: string;
    name: Path<T>;
  }>;
  onSubmit: (e?: BaseSyntheticEvent<object, unknown, unknown> | undefined) => void;
  register: UseFormRegister<T>;
  errors: Record<string, { message?: string }>;
  isValid: boolean;
  linkPath: PATH;
  linkLabel: string;
  buttonLabel: string;
}

export const AuthForm = <T extends FieldValues>({
  title,
  fields,
  onSubmit,
  register,
  errors,
  isValid,
  linkPath,
  linkLabel,
  buttonLabel,
}: AuthFormProps<T>) => (
  <article className={s.auth}>
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
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
            isValid={isValid}
          />
        ))}

        <Button
          label={buttonLabel}
          type="submit"
        />
      </form>

      <span>OR</span>

      <GoogleButton />

      <CustomLink
        path={linkPath}
        label={linkLabel}
      />
    </div>
  </article>
);
