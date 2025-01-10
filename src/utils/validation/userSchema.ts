import * as yup from 'yup';

import email from './email';
import password from './password';
import name from './name';

export const SignUpSchema = yup.object().shape({
  name,
  email,
  password,
});

export const SignInSchema = yup.object().shape({
  email,
  password,
});
