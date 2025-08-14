import { useNoteStore } from '@/store';
import { ComponentProps } from 'react';
import { LuFilePenLine, LuTrash } from 'react-icons/lu';
import { IconButton } from '../Buttons';

export const ActionRow = ({ className, ...props }: ComponentProps<'div'>): React.JSX.Element => {
  const createNote = useNoteStore((state) => state.createNote);
  const deleteNote = useNoteStore((state) => state.deleteSelectedNote);

  const handleDeleteNote = (): void => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote();
    }
  };

  return (
    <div className={className} {...props}>
      <IconButton onClick={createNote} icon={<LuFilePenLine />} ariaLabel="New Note" />
      <IconButton onClick={handleDeleteNote} icon={<LuTrash />} ariaLabel="Delete Note" />
    </div>
  );
};
