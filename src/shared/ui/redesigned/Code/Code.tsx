import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import CopyIconNew from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';
import { Button, ButtonTheme } from '../../deprecated/Button';
import { Icon as IconDeprecated } from '../../deprecated/Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon clickable onClick={onCopy} className={cls.copyBtn} Svg={CopyIconNew} />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
            <IconDeprecated className={cls.copyIcon} Svg={CopyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
