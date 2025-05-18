import cls from './popup.module.scss';
import { type DropdownDirection } from '../../../../types/ui';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft ?? '',
  'bottom right': cls.optionsBottomRight ?? '',
  'top right': cls.optionsTopRight ?? '',
  'top left': cls.optionsTopLeft ?? '',
};
