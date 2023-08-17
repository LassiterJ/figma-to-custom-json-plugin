import React from 'react';
import '../styles/ui.css';
import { MainLayout } from './page/Home/MainLayout';

function App() {
  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;

      if (type === 'create-json') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  const onCreateJSON = (): void => {
    console.log('onCreateJSON');
    console.log('parent: ', parent || 'No parent');
    // parent.postMessage({ pluginMessage: 'someMessage' }, '*');
    parent.postMessage({ pluginMessage: { type: 'create-json', message: 'someMessage' } }, '*');
  };

  return (
    <MainLayout>
      <div className="plugin-container">
        <header className="header">
          <h1 className="heading">Export Idol</h1>
        </header>
        <main className="main">
          <div className="json-container">
            <code className="json">
              <pre>{`{ "name": "ExportIdol", "version": "0.0.1" }`}</pre>
            </code>
          </div>
          <div className="action-bar">
            <button className="button" onClick={onCreateJSON}>
              Create JSON
            </button>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}

export default App;
