import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variants = {
  primary:   'bg-blue-900 text-white hover:bg-blue-800 shadow-md hover:shadow-lg',
  secondary: 'bg-amber-500 text-white hover:bg-amber-400 shadow-md hover:shadow-lg',
  outline:   'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white',
  ghost:     'text-blue-900 hover:bg-blue-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
