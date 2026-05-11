import './App.css';

type Keybind = {
  label: string;
  hotkeys: string[];
  width?: number;
  spacer?: boolean;
};

// each row should be 15 width
const keyRows: Keybind[][] = [
  [
    { label: '`', hotkeys: ['Cancel'], },
    { label: '1', hotkeys: ['Build Barracks'] },
    { label: '2', hotkeys: ['Move Camera Up'] },
    { label: '3', hotkeys: ['Select Economy Building'] },
    { label: '4', hotkeys: ['Repair'] },
    { label: '5', hotkeys: ['Camera Modifier'], },
    { label: '6', hotkeys: ['Camera Modifier'], },
    { label: '7', hotkeys: ['Camera Modifier'], },
    { label: '8', hotkeys: ['Camera Modifier'], },
    { label: '9', hotkeys: ['Camera Modifier'], },
    { label: '0', hotkeys: ['Camera Modifier'], },
    { label: '-', hotkeys: ['Camera Modifier'], },
    { label: '=', hotkeys: ['Camera Modifier'], },
    { label: 'Backspace', hotkeys: ['Camera Modifier'], width: 2 },
  ],
  [
    { label: 'Tab', hotkeys: ['Cycle Selection'], width: 1.5 },
    { label: 'Q', hotkeys: ['Build Barracks'] },
    { label: 'W', hotkeys: ['Move Camera Up'] },
    { label: 'E', hotkeys: ['Select Economy Building'] },
    { label: 'R', hotkeys: ['Repair'] },
    { label: 'T', hotkeys: ['Repair'] },
    { label: 'Y', hotkeys: ['Repair'] },
    { label: 'U', hotkeys: ['Repair'] },
    { label: 'I', hotkeys: ['Repair'] },
    { label: 'O', hotkeys: ['Repair'] },
    { label: 'P', hotkeys: ['Repair'] },
    { label: '[', hotkeys: ['Repair'] },
    { label: ']', hotkeys: ['Repair'] },
    { label: '\\', hotkeys: ['Repair'], width: 1.5},
  ],
  [
    { label: 'Caps Lock', hotkeys: ['Toggle Grid Mode'], width: 1.85 },
    { label: 'A', hotkeys: ['Attack Move'] },
    { label: 'S', hotkeys: ['Stop Unit'] },
    { label: 'D', hotkeys: ['Delete Unit'] },
    { label: 'F', hotkeys: ['Formation'] },
    { label: 'G', hotkeys: ['Formation'] },
    { label: 'H', hotkeys: ['Formation'] },
    { label: 'J', hotkeys: ['Formation'] },
    { label: 'K', hotkeys: ['Formation'] },
    { label: 'L', hotkeys: ['Formation'] },
    { label: ';', hotkeys: ['Formation'] },
    { label: "'", hotkeys: ['Formation'] },
    { label: 'Enter', hotkeys: ['Formation'], width: 2.35 },

  ],
  [
    { label: 'Shift', hotkeys: ['Queue Command'], width: 2.7 },
    { label: 'Z', hotkeys: ['Patrol'] },
    { label: 'X', hotkeys: ['Cancel'] },
    { label: 'C', hotkeys: ['Control Group'] },
    { label: 'V', hotkeys: ['Villager Action'] },
    { label: 'B', hotkeys: ['Formation'] },
    { label: 'N', hotkeys: ['Formation'] },
    { label: 'M', hotkeys: ['Formation'] },
    { label: ',', hotkeys: ['Formation'] },
    { label: '.', hotkeys: ['Formation'] },
    { label: '/', hotkeys: ['Formation'] },
    { label: 'Shift', hotkeys: ['Formation'], width: 2.7 },
  ],
  [
    { label: 'Ctrl', hotkeys: ['Control Group Modifier'], },
    { label: 'Fn', hotkeys: ['Camera Modifier'], },
    { label: 'Super', hotkeys: ['Camera Modifier'], },
    { label: 'Alt', hotkeys: ['Camera Modifier'], },
    { label: 'Space', hotkeys: ['Jump to Event'], width: 8 },
    { label: 'Alt', hotkeys: ['Camera Modifier'] },
    { label: 'UP', hotkeys: ['Control Group Modifier'] },
    { label: 'Ctrl', hotkeys: ['Formation'] },
  ],
  [
    { label: '', hotkeys: [], spacer: true, width: 13},
    { label: 'LEFT', hotkeys: ['Move Camera Left'] },
    { label: 'DOWN', hotkeys: ['Move Camera Down'] },
    { label: 'RIGHT', hotkeys: ['Move Camera Right'] },
  ],
];

function App() {
  return (
    <main className="app">
      <h1>RTS Keymap Viewer</h1>

      <div className="keyboard">
        {keyRows.map((row, rowIndex) => (
          <div className="keyboard-row" key={rowIndex}>
            {row.map((key, keyIndex) => {
              const width = `${(key.width ?? 1) * 64}px`;

              if (key.spacer) {
                return (
                  <div
                    key={`spacer-${rowIndex}-${keyIndex}`}
                    style={{ width }}
                  />
                );
              }

              return (
                <div
                  className="key"
                  key={`${key.label}-${rowIndex}-${keyIndex}`}
                  style={{ width }}
                >
                  <span>{key.label}</span>

                  <div className="tooltip">
                    <strong>{key.label}</strong>
                    {key.hotkeys.map((hotkey) => (
                      <p key={hotkey}>{hotkey}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;