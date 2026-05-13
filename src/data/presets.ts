// src/data/presets.ts

import { defaultPresets } from "./defaultPresets";

export type Keybind = {
  label: string;
  hotkeys: string[];
  width?: number;
  spacer?: boolean;
};

export type KeyboardPreset = {
  id: string;
  name: string;
  game: string;
  rows: Keybind[][];
};

const STORAGE_KEY = "keyboard-presets";

export function loadPresets(): KeyboardPreset[] {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultPresets;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return defaultPresets;
  }
}

export function savePresets(presets: KeyboardPreset[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
}