import { ButtonPropsType } from '@/types';
import clsx from '@/utils/clsx';
import Image from 'next/image';

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  icon,
  ariaLabel,
  className,
}: ButtonPropsType) => {
  const baseStyles =
    'flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50';

  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary:
      'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    outline:
      'border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-700 dark:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {icon && <Image src={icon} alt='' width={20} height={20} className='mr-2' />}
      {children}
    </button>
  );
};

export default Button;
