import {
  ActionRow,
  AppLayout,
  Content,
  MarkdownEditor,
  NotePreviewList,
  NoteTitle,
  Sidebar,
  TopBar,
} from '@/components';
import { useRef } from 'react';

const App = (): React.JSX.Element => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  const contentContainerRef = useRef<HTMLDivElement>(null);

  const resetScrollPosition = (): void => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scroll(0, 0);
    }
  };

  return (
    <>
      <TopBar />
      <AppLayout>
        <Sidebar className="p-2">
          <ActionRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onNoteSelect={resetScrollPosition} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <NoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </AppLayout>
    </>
  );
};

export default App;
