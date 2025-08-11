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

const App = (): React.JSX.Element => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <>
      <TopBar />
      <AppLayout>
        <Sidebar className="p-2">
          <ActionRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <NoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </AppLayout>
    </>
  );
};

export default App;
