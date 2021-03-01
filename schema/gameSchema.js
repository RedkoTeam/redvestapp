import * as yup from 'yup';

export const SCHEMA = yup.object().shape({
  email: yup
    .string()
    .required('You must enter something.'),
});