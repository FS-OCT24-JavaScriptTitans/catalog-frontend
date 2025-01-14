import styles from './OrderForm.module.scss';

import { Input } from '@/UI/Input/Input';
import { Button } from '@/UI/Button/Button';
import { useOrderForm } from '@/hooks/useOrderForm';

const OrderForm = () => {
  const { register, handleSubmit, errors, fields, onSubmit } = useOrderForm();

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
          defaultValue={field.value || ''}
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
