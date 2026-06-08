import { useEffect, useMemo, useState } from 'react';
import { drugList } from '@/data/drugData';
import type { Drug } from '@/types/drug';

const STORAGE_KEY = 'pedi-dose:lastDrugId';

export interface UseDrugSelectorResult {
  selectedDrugId: number;
  selectedDrug: Drug;
  handleDrugChange: (id: number) => void;
}

export function useDrugSelector(): UseDrugSelectorResult {
  const [selectedDrugId, setSelectedDrugId] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null && drugList.some((d) => d.id === Number(saved))) {
      return Number(saved);
    }
    return drugList[0].id;
  });

  const selectedDrug = useMemo<Drug>(() => {
    const found = drugList.find((d) => d.id === selectedDrugId);
    return found ?? drugList[0];
  }, [selectedDrugId]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(selectedDrugId));
  }, [selectedDrugId]);

  const handleDrugChange = (id: number): void => {
    setSelectedDrugId(id);
  };

  return { selectedDrugId, selectedDrug, handleDrugChange };
}
