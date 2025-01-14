import * as yup from 'yup';

export type InferFormData<T extends yup.AnySchema> = yup.InferType<T>;
