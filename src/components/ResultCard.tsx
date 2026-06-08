import { formatDoseRange, formatMgRange } from '@/utils/doseMath';
import type { ResultCardProps } from '@/types/components';

export function ResultCard({ result, isManualMode }: ResultCardProps) {
  if (!result) {
    const message = isManualMode
      ? 'กรุณากรอกขนาดยา (mg/kg/dose)'
      : 'กรุณากรอกน้ำหนัก';
    return <p className="result__empty">{message}</p>;
  }

  if (result.mode === 'auto') {
    const ml = formatDoseRange(result.min, result.max);
    const mg = formatMgRange(result.totalMinMg, result.totalMaxMg);
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
  }

  const ml = `${result.finalMl} ml`;
  const mg = `${result.totalMg} mg/dose`;
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
}
