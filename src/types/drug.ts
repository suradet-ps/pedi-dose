export type DrugCategory =
  | 'Antibiotic'
  | 'Antihistamine'
  | 'Antiemetic'
  | 'Mucolytic'
  | 'Antipyretic';

export type DrugTiming = 'before' | 'after' | 'any';

export interface Drug {
  id: number;
  name: string;
  brand: string;
  concentration: number;
  volume: number;
  minDosePerKg: number;
  maxDosePerKg: number;
  category: DrugCategory;
  timing: DrugTiming;
  timesPerDay: number;
  maxDailyDose: string;
  notes: string;
}
