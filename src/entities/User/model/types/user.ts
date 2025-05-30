import { type JsonSettings } from './jsonSettings';
import { type UserRole } from '../consts/consts';

import { type FeatureFlags } from '@/shared/types/featureFlags';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
