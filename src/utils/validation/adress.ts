import * as yup from 'yup';

export const streetAddress = yup.string().trim().required('Street Address is required');

export const city = yup.string().trim().required('Town/City is required');

export const state = yup.string().trim().required('State/County is required');

export const postcode = yup
  .string()
  .trim()
  .matches(/^\d+$/, 'Postcode must be numeric')
  .required('Postcode/ZIP is required');
