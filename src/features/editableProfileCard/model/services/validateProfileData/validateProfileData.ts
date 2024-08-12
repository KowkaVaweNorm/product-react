import { type Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
  if (profile == null) {
    return [ValidateProfileError.NO_DATA];
  }

  const { first, lastname, age, country } = profile;

  const errors: ValidateProfileError[] = [];

  if (first === undefined || first.length < 1 || lastname === undefined || lastname.length < 1) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (age === undefined || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
