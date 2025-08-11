import { ComponentProps } from 'react';
import { LuFilePenLine, LuTrash } from 'react-icons/lu';
import { IconButton } from '../Buttons';

export const ActionRow = ({ className, ...props }: ComponentProps<'div'>): React.JSX.Element => {
  return (
    <div className={className} {...props}>
      <IconButton icon={<LuFilePenLine />} ariaLabel="New Note" />
      <IconButton icon={<LuTrash />} ariaLabel="Delete Note" />
    </div>
  );
};
