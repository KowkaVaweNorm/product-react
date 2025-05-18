import { type DetailedHTMLProps, type TextareaHTMLAttributes } from 'react';

import cls from './InputArea.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

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
