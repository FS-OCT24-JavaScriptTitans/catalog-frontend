import * as yup from 'yup';

export const streetAddress = yup.string().required('Street Address is required');

export const city = yup.string().required('Town/City is required');

export const state = yup.string().required('State/County is required');

export const postcode = yup
  .string()
  .matches(/^\+38\d{10}$/, 'Phone must start with +38 and contain 10 digits')
  .required('Phone is required');
