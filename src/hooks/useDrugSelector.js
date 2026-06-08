import { useEffect, useMemo, useState } from 'react';
import { drugList } from '../data/drugData';

const STORAGE_KEY = 'peddi-dose:lastDrugId';

export const useDrugSelector = () => {
  const [selectedDrugId, setSelectedDrugId] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && drugList.some((d) => d.id === Number(saved))) {
      return Number(saved);
    }
    return drugList[0].id;
  });

  const selectedDrug = useMemo(
    () => drugList.find((d) => d.id === selectedDrugId) ?? drugList[0],
    [selectedDrugId],
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(selectedDrugId));
  }, [selectedDrugId]);

  const handleDrugChange = (id) => {
    setSelectedDrugId(id);
  };

  return { selectedDrugId, selectedDrug, handleDrugChange };
};
