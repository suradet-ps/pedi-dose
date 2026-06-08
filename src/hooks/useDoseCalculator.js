import { useEffect, useMemo, useState } from 'react';
import { drugList } from '../data/drugData';
import { calculateDoseRange, calculateManualDose } from '../utils/doseMath';

const STORAGE_KEY = 'peddi-dose:lastDrugId';

export const useDoseCalculator = () => {
  const [weight, setWeight] = useState('');
  const [selectedDrugId, setSelectedDrugId] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && drugList.some((d) => d.id === Number(saved))) {
      return Number(saved);
    }
    return drugList[0].id;
  });
  const [isManualMode, setIsManualMode] = useState(false);
  const [manualDose, setManualDose] = useState('');

  const selectedDrug = useMemo(
    () => drugList.find((d) => d.id === selectedDrugId) ?? drugList[0],
    [selectedDrugId],
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(selectedDrugId));
  }, [selectedDrugId]);

  const handleDrugChange = (id) => {
    setSelectedDrugId(id);
    setManualDose('');
  };

  const result = useMemo(() => {
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return null;

    if (isManualMode) {
      const d = parseFloat(manualDose);
      if (isNaN(d) || d <= 0) return null;
      const { finalMl, totalMg } = calculateManualDose(w, d, selectedDrug);
      return {
        mode: 'manual',
        finalMl,
        totalMg: totalMg.toFixed(1),
        notes: selectedDrug.notes,
      };
    }

    const { min, max, totalMinMg, totalMaxMg } = calculateDoseRange(w, selectedDrug);
    return {
      mode: 'auto',
      min,
      max,
      totalMinMg,
      totalMaxMg,
      notes: selectedDrug.notes,
    };
  }, [weight, selectedDrug, isManualMode, manualDose]);

  return {
    weight,
    setWeight,
    selectedDrugId,
    handleDrugChange,
    selectedDrug,
    isManualMode,
    setIsManualMode,
    manualDose,
    setManualDose,
    result,
  };
};
