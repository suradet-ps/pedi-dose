import { useState } from 'react';

export const useManualDose = () => {
  const [isManualMode, setIsManualMode] = useState(false);
  const [manualDose, setManualDose] = useState('');

  return { isManualMode, setIsManualMode, manualDose, setManualDose };
};
