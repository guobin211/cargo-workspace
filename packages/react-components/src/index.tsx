import { ClassAttributes, ButtonHTMLAttributes } from 'react';

const Button = (
  props: JSX.IntrinsicAttributes & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>,
) => <button {...props}></button>;

export { Button };
