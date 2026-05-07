import './App.css';

const keys = [
  { label: 'Q', hotkeys: ['Build Barracks', 'Train Spearman'] },
  { label: 'W', hotkeys: ['Move Camera Up'] },
  { label: 'E', hotkeys: ['Select Economy Building'] },
  { label: 'A', hotkeys: ['Attack Move'] },
  { label: 'S', hotkeys: ['Stop Unit'] },
  { label: 'D', hotkeys: ['Delete Unit'] },
];

function App() {
  return (
    <main className="app">
      <h1>RTS Keymap Viewer</h1>

      <div className="keyboard">
        {keys.map((key) => (
          <div className="key" key={key.label}>
            <span>{key.label}</span>

            <div className="tooltip">
              <strong>{key.label}</strong>
              {key.hotkeys.map((hotkey) => (
                <p key={hotkey}>{hotkey}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;