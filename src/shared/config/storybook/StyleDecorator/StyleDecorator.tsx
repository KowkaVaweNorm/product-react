import { type ReactNode } from 'react';
import '@/app/styles/index.scss';

interface StyleProps {
  children: ReactNode
}

export const StyleDecorator = (props: StyleProps): JSX.Element => {
  return (
      <>
          {props.children}
      </>
  );
};
