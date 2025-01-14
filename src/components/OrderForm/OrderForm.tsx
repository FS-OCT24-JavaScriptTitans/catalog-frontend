import React from 'react';
import { useForm, Path } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './OrderForm.module.scss';

import { Input } from '@/UI/Input/Input';
import { Button } from '@/UI/Button/Button';
import { type FormData, orderSchema } from '@/utils/validation/orderSchema';

interface Field {
  label: string;
  type: string;
  name: Path<FormData>;
}

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const fields: Field[] = [
    { label: 'First Name', type: 'text', name: 'firstName' },
    { label: 'Last Name', type: 'text', name: 'lastName' },
    { label: 'Street Address', type: 'text', name: 'streetAddress' },
    { label: 'Town / City', type: 'text', name: 'city' },
    { label: 'State / County', type: 'text', name: 'state' },
    { label: 'Postcode / ZIP', type: 'text', name: 'postcode' },
    { label: 'Phone', type: 'text', name: 'phone' },
    { label: 'Email Address', type: 'email', name: 'email' },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          register={register}
          type={field.type}
          err={errors[field.name]?.message || ''}
        />
      ))}

      <Button
        label="Place Order"
        type="submit"
      />
    </form>
  );
};

export default OrderForm;
