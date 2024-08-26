import { Icon } from '../Icon';
import NoImage from '@/shared/assets/icons/no-image.svg';
export const ErrorFallback = (): JSX.Element => {
  return (
    <div>
      <Icon Svg={NoImage} />;
    </div>
  );
};
