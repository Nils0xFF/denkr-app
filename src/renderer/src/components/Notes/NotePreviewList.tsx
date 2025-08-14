import { useNotesList } from '@renderer/hooks/useNotesList';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { NotePreview } from './NotePreview';

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onNoteSelect?: () => void;
};

export const NotePreviewList = ({
  className,
  onNoteSelect,
  ...props
}: NotePreviewListProps): React.JSX.Element => {
  const { notes, selectedNoteIndex, handleNoteClick } = useNotesList({ onSelect: onNoteSelect });

  if (notes.length === 0) {
    return (
      <ul {...props} className={twMerge('text-center pt-4', className)}>
        <span>No notes found!</span>
      </ul>
    );
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, idx) => (
        <NotePreview
          key={note.id}
          {...note}
          selected={selectedNoteIndex === idx}
          onClick={handleNoteClick(idx)}
        />
      ))}
    </ul>
  );
};
