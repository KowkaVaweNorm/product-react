import { type ValidateProfileError } from '../consts/consts';

import { type Profile } from '@/entities/Profile';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
