import { HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  type: 'primary' | 'secondary' | 'error' | 'loading';
};

export const Button = (props: ButtonProps) => {
  const { type, className, ...rest } = props;
  const cls = `button ${type} ${className}`;
  return <button {...rest} className={cls} />;
};
