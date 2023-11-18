import { DateTime } from 'luxon';
import { Patient } from '../interface/patient';

export const API_GET_PATIENT =
  'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users';
export const DEFAULT_PATIENT: Patient = {
  avatar: '',
  createdAt: DateTime.now().toISO() || '',
  description: '',
  name: '',
  website: '',
  id: '',
};
