import React, { cloneElement, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { ActionButton, ActionButtonProps } from './ActionButton';

type IconElement = ReactElement<{ className?: string }>;

type IconButtonProps = ActionButtonProps & {
  icon: IconElement;
  ariaLabel?: string;
  iconClassName?: string;
};

export const IconButton = ({
  icon,
  iconClassName,
  ...props
}: IconButtonProps): React.JSX.Element => {
  const mergedIcon = cloneElement(icon, {
    className: twMerge('w-4 h-4 text-zinc-300', icon.props.className ?? '', iconClassName ?? ''),
  });

  return (
    <ActionButton {...props}>
      <span className={twMerge('w-4 h-4 text-zinc-300', iconClassName)}>{mergedIcon}</span>
    </ActionButton>
  );
};
