import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface UseManualDoseResult {
  isManualMode: boolean;
  setIsManualMode: Dispatch<SetStateAction<boolean>>;
  manualDose: string;
  setManualDose: Dispatch<SetStateAction<string>>;
}

export function useManualDose(): UseManualDoseResult {
  const [isManualMode, setIsManualMode] = useState<boolean>(false);
  const [manualDose, setManualDose] = useState<string>('');

  return { isManualMode, setIsManualMode, manualDose, setManualDose };
}
