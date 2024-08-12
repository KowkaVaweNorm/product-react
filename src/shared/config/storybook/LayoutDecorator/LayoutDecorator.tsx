// eslint-disable-next-line kowka-vn-plugin/layer-imports
import { type Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type StoryFn } from '@storybook/react';
import cls from './LayoutDecorator.module.scss';
type IProps = {
  inverted?: boolean;
};

export const LayoutDecorator = (props: IProps) => (StoryComponent: StoryFn) => {
  const { inverted } = props;
  return (
    <div
      className={classNames(cls.primary, {
        [cls.inverted ?? '']: inverted,
      })}
    >
      <StoryComponent />
    </div>
  );
};
