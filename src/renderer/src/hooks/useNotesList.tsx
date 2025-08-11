import { useNoteStore } from '@/store';

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const { notes, selectedNoteIndex, setSelectedNoteIndex } = useNoteStore((state) => state);

  const handleNoteClick = (index: number) => async () => {
    setSelectedNoteIndex(index);
    if (onSelect) {
      onSelect();
    }
  };

  return {
    notes,
    selectedNoteIndex,
    handleNoteClick,
  };
};
