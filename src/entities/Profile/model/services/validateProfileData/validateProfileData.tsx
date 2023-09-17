import { isNumber } from 'shared/lib/utils/isNumber/isNumber';
import { ValidateProfileError, type Profile } from '../../types/profile';

export const validateProfileData = (profile?: Profile): any => {
  if (profile === undefined) {
    return [ValidateProfileError.NO_DATA];
  }
  const {
    first,
    lastname,
    age,
    country
  } = profile;

  const errors: ValidateProfileError[] = [];
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if ((!first) || (!lastname)) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  };
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if ((!age) || !isNumber(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  };
  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  };
  return errors;
};
