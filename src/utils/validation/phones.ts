import * as yup from 'yup';

const phone = yup
  .string()
  .trim()
  .matches(/^\+38\d{10}$/, 'Phone must start with +38 and contain 10 digits')
  .required('Phone is required');

export default phone;
