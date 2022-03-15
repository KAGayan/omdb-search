import clsx from 'clsx';
import { ReactChild } from 'react';
import './index.scss';

interface Props {
  children: ReactChild[] | ReactChild;
  expand: boolean;
}
export const Card = ({ children, expand }: Props) => {
  return (
    <div className={clsx(expand && 'card-expand', 'card')}>{children}</div>
  );
};
