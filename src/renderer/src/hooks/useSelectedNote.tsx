import { useNoteStore } from '@renderer/store';
import { NoteInfo } from '@shared/models';

export const useSelectedNote = (): NoteInfo | null =>
  useNoteStore((state) =>
    state.selectedNoteIndex !== null ? state.notes[state.selectedNoteIndex] : null
  );
