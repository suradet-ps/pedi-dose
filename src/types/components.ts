import type { Dispatch, SetStateAction } from 'react';
import type { Drug } from './drug';
import type { DoseResult } from './calculation';

export interface CalculatorProps {
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  selectedDrugId: number;
  handleDrugChange: (id: number) => void;
  isManualMode: boolean;
  setIsManualMode: Dispatch<SetStateAction<boolean>>;
  manualDose: string;
  setManualDose: Dispatch<SetStateAction<string>>;
  selectedDrug: Drug;
  result: DoseResult | null;
}

export interface ResultCardProps {
  result: DoseResult | null;
  isManualMode: boolean;
}
