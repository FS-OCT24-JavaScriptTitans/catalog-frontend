import * as yup from 'yup';

import email from './email';
import name from './name';
import phone from './phones';
import { city, postcode, state, streetAddress } from './adress';

import { InferFormData } from '@/types/InferFormData';

export const orderSchema = yup.object().shape({
  firstName: name,
  lastName: name,
  streetAddress,
  city,
  state,
  postcode,
  phone,
  email,
});

export type FormData = InferFormData<typeof orderSchema>;
