import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export type ActionButtonProps = ComponentProps<'button'> & {
  ariaLabel?: string;
};

export const ActionButton = ({
  className,
  children,
  ariaLabel,
  ...props
}: ActionButtonProps): React.JSX.Element => {
  return (
    <button
      aria-label={ariaLabel}
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
