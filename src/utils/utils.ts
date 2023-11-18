import { DateTime } from 'luxon';
import * as yup from 'yup';

export const convertToReadableDate = (date: string) => {
  const createDate = DateTime.fromISO(date);
  return createDate.toISODate();
};

export const patientValidationSchema = yup.object({
  createdAt: yup
    .string()
    .required('Creation date is required')
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Creation date must be in the format yyyy-MM-dd'
    ),
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long'),
  avatar: yup.string().url('Avatar must be a valid URL').required(),
  website: yup.string().url('Website must be a valid URL').required(),
  description: yup
    .string()
    .max(500, 'Description must be less than 500 characters')
    .required(),
});

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error al cargar los datos');
  }
  return response.json();
};
