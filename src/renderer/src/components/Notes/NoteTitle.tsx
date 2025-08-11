import { useSelectedNote } from '@renderer/hooks/useSelectedNote';
import { twMerge } from 'tailwind-merge';

export const NoteTitle = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element | null => {
  const selectedNote = useSelectedNote();

  if (!selectedNote) return null;

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  );
};
