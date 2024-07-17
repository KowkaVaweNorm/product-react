import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { type ProfileSchema } from "../../types/editableProfileCardSchema";
import { type Profile } from "@/entities/Profile";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
};
const loadingState: ProfileSchema = {
  readonly: true,
  isLoading: true,
  error: undefined,
  data: undefined
};

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'admin213'
};

const filledState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: profile
};

export const testDataEditableProfileCard = {
  initialState,
  loadingState,
  filledState
};
