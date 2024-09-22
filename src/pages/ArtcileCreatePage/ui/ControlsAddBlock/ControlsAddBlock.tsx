/* eslint-disable i18next/no-literal-string */
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import cls from './ControlsAddBlock.module.scss';

interface IProps {
  className?: string;
}
export const ControlsAddBlock = (props: IProps): JSX.Element => {
  return (
    <div className={cls.wrapper_controls_add}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<>In process</>}
        off={
          <>
            <ButtonDeprecated>Добавить текст</ButtonDeprecated>
            <ButtonDeprecated>Добавить изображение</ButtonDeprecated>
            <ButtonDeprecated>Добавить код</ButtonDeprecated>
          </>
        }
      />
    </div>
  );
};
