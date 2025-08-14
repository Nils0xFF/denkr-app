import { useSelectedNote } from './useSelectedNote';

export const useMarkdownEditor = () => {
  const selectedNote = useSelectedNote();
  return { selectedNote };
};
