import cls from './Code.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useCallback } from 'react';
import { Button } from '../Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
interface IProps {
  className?: string;
  text: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Code = memo((props: IProps): JSX.Element => {
  const { className, text } = props;
  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code ?? '', {}, [className])}>
      <Button className={cls.copy_btn} onClick={onCopy}>
        <CopyIcon className={cls.copy_icon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
