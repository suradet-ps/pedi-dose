// src/utils/doseMath.js
// Pure functions for pediatric dose calculation.

/** Round a number to the nearest 0.5. */
export const roundToHalf = (num) => Math.round(num * 2) / 2;

/**
 * Calculate the auto dose range (min..max) in milliliters for a given weight and drug.
 * @returns {{ min: string, max: string, totalMinMg: number, totalMaxMg: number }}
 */
export const calculateDoseRange = (weight, drug) => {
  const totalMinMg = weight * drug.minDosePerKg;
  const totalMaxMg = weight * drug.maxDosePerKg;
  const minMl = (totalMinMg * drug.volume) / drug.concentration;
  const maxMl = (totalMaxMg * drug.volume) / drug.concentration;

  return {
    min: roundToHalf(minMl).toFixed(1),
    max: roundToHalf(maxMl).toFixed(1),
    totalMinMg: totalMinMg,
    totalMaxMg: totalMaxMg,
  };
};

/**
 * Calculate the exact ml for a manually specified mg/kg/dose.
 * @returns {{ finalMl: string, totalMg: number }}
 */
export const calculateManualDose = (weight, dosePerKg, drug) => {
  const totalMg = weight * dosePerKg;
  const finalMl = (totalMg * drug.volume) / drug.concentration;
  return {
    finalMl: roundToHalf(finalMl).toFixed(1),
    totalMg: totalMg,
  };
};

/** Format a dose pair for display: "5 ml" or "5 - 7.5 ml". */
export const formatDoseRange = (min, max) => {
  if (parseFloat(min) === parseFloat(max)) return `${min} ml`;
  return `${min} - ${max} ml`;
};

/** Format an mg pair for display: "100 mg/dose" or "100 - 167 mg/dose". */
export const formatMgRange = (min, max) => {
  if (parseFloat(min) === parseFloat(max)) return `${min} mg/dose`;
  return `${min} - ${max} mg/dose`;
};
