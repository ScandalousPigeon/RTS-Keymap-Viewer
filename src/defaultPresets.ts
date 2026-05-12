// src/data/defaultPresets.ts

import type { KeyboardPreset } from "./presets.ts";

export const defaultPresets: KeyboardPreset[] = [
  {
    id: "aoe4-default",
    name: "Age of Empires IV Default",
    game: "Age of Empires IV",
    rows: [
      [
        { label: "Q", hotkeys: ["Build House", "Select Barracks"] },
        { label: "W", hotkeys: ["Build Farm"] },
        { label: "E", hotkeys: ["Build Landmark"] },
        { label: "R", hotkeys: ["Repair"] },
      ],
      [
        { label: "A", hotkeys: ["Attack Move"] },
        { label: "S", hotkeys: ["Stop"] },
        { label: "D", hotkeys: ["Patrol"] },
        { label: "F", hotkeys: ["Formation"] },
      ],
    ],
  },
];