import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './InputArea.module.scss';
import { type DetailedHTMLProps, type TextareaHTMLAttributes } from 'react';

interface IProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  className?: string;
}

/**
 *
 * @deprecated
 */
export const InputArea = (props: IProps) => {
  const { className, ...otherProps } = props;
  return <textarea className={classNames(cls.inputArea, {}, [className])} {...otherProps} />;
};
