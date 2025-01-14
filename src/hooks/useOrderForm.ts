import { useForm, Path } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { type FormData, orderSchema } from '@/utils/validation/orderSchema';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectUser } from '@/redux/selectors';
import { postOrder } from '@/api/firebase/db/order/postOrder';
import { addOrder } from '@/redux/slices/orders/orders.slice';
import { clearCart } from '@/redux/slices/cart/carrt.slice';
import notification from '@/utils/notification';
import { PATH } from '@/constants/path';

interface Field {
  label: string;
  type: string;
  name: Path<FormData>;
  value?: string;
}

export const useOrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(orderSchema),
  });

  const user = useAppSelector(selectUser, shallowEqual);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fields: Field[] = [
    { label: 'First Name', type: 'text', name: 'firstName', value: user ? user.name : '' },
    { label: 'Last Name', type: 'text', name: 'lastName' },
    { label: 'Street Address', type: 'text', name: 'streetAddress' },
    { label: 'Town / City', type: 'text', name: 'city' },
    { label: 'State / County', type: 'text', name: 'state' },
    { label: 'Postcode / ZIP', type: 'text', name: 'postcode' },
    { label: 'Phone', type: 'text', name: 'phone', value: '+38' },
    { label: 'Email Address', type: 'email', name: 'email', value: user ? user.email : '' },
  ];

  const onSubmit = async (order: FormData) => {
    if (isValid) {
      const newOrder = await postOrder({ ...order, postcode: Number(order.postcode) });

      if (typeof newOrder !== 'string') {
        dispatch(addOrder({ order: newOrder }));
        dispatch(clearCart());
        notification('success', 'An order was placed');
        navigate(PATH.ORDERS);
      } else {
        notification('error', newOrder);
      }
    }
  };

  return { register, handleSubmit, errors, fields, onSubmit };
};
