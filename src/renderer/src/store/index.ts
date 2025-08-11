import { NoteInfo } from '@shared/models';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { notesMock } from './mocks';

export type NoteStore = {
  notes: NoteInfo[];
  selectedNoteIndex: number | null;
  setSelectedNoteIndex: (index: number) => void;
};

export const useNoteStore = create<NoteStore>()(
  subscribeWithSelector((set) => ({
    notes: notesMock,
    selectedNoteIndex: null,
    setSelectedNoteIndex: (index) => set({ selectedNoteIndex: index }),
  }))
);
