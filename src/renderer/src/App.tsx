function App(): React.JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-blue-500">Welcome to Denkr</h1>
    </div>
  );
}

export default App;
