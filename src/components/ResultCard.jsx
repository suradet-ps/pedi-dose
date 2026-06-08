import { formatDoseRange, formatMgRange } from '../utils/doseMath';

export const ResultCard = ({ result, isManualMode }) => {
  if (!result) {
    const message = isManualMode
      ? 'กรุณากรอกขนาดยา (mg/kg/dose)'
      : 'กรุณากรอกน้ำหนัก';
    return <p className="result__empty">{message}</p>;
  }

  const isAuto = result.mode === 'auto';
  const ml = isAuto ? formatDoseRange(result.min, result.max) : `${result.finalMl} ml`;
  const mg = isAuto
    ? formatMgRange(result.totalMinMg, result.totalMaxMg)
    : `${result.totalMg} mg/dose`;

  return (
    <div className="result" role="status" aria-live="polite">
      <div className="result__value">{ml}</div>
      <div className="result__secondary">{mg}</div>
      <p className="result__notes">
        <span className="result__notes-label">คำแนะนำ</span>
        {result.notes}
      </p>
    </div>
  );
};
