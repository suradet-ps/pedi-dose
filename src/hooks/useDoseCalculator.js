import { useMemo, useState } from 'react';
import { useDrugSelector } from './useDrugSelector';
import { useManualDose } from './useManualDose';
import { calculateDoseRange, calculateManualDose } from '../utils/doseMath';

export const useDoseCalculator = () => {
  const [weight, setWeight] = useState('');
  const { selectedDrugId, selectedDrug, handleDrugChange: baseHandleDrugChange } =
    useDrugSelector();
  const { isManualMode, setIsManualMode, manualDose, setManualDose } = useManualDose();

  const handleDrugChange = (id) => {
    baseHandleDrugChange(id);
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
