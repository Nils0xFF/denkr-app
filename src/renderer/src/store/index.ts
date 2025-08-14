import { NoteInfo } from '@shared/models';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { notesMock } from './mocks';

export type NoteStore = {
  notes: NoteInfo[];
  selectedNoteIndex: number | null;
  setSelectedNoteIndex: (index: number) => void;
  createNote: () => void;
  deleteSelectedNote: () => void;
};

export const useNoteStore = create<NoteStore>()(
  subscribeWithSelector((set) => ({
    notes: notesMock,
    selectedNoteIndex: null,
    setSelectedNoteIndex: (index) => set({ selectedNoteIndex: index }),
    createNote: () => {
      const newNote: NoteInfo = {
        id: String(Date.now()),
        title: 'New Note',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        content: '',
      };
      set((state) => ({
        notes: [newNote, ...state.notes],
        selectedNoteIndex: 0,
      }));
    },
    deleteSelectedNote: () => {
      set((state) => ({
        notes: state.notes.filter((_, idx) => idx !== state.selectedNoteIndex),
        selectedNoteIndex: null,
      }));
    },
  }))
);
