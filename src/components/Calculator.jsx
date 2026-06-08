import { drugList } from '../data/drugData';
import { ResultCard } from './ResultCard';

export const Calculator = ({
  weight,
  setWeight,
  selectedDrugId,
  handleDrugChange,
  isManualMode,
  setIsManualMode,
  manualDose,
  setManualDose,
  selectedDrug,
  result,
}) => {
  return (
    <section className="calc" aria-label="เครื่องคำนวณขนาดยา">
      <h1 className="calc__title">คำนวณขนาดยาน้ำเด็ก</h1>

      <form className="calc__form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label className="field__label" htmlFor="drug-select">
            เลือกยา
          </label>
          <div className="select-wrap">
            <select
              id="drug-select"
              className="field__input"
              value={selectedDrugId}
              onChange={(e) => handleDrugChange(Number(e.target.value))}
            >
              {drugList.map((drug) => (
                <option key={drug.id} value={drug.id}>
                  {drug.name} · {drug.concentration}mg/{drug.volume}ml
                </option>
              ))}
            </select>
            <svg
              className="select-wrap__icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="field">
          <div className="field__row">
            <label className="field__label" htmlFor="weight">
              น้ำหนัก (kg)
            </label>
            <button
              type="button"
              className="field__manual-toggle"
              onClick={() => setIsManualMode(!isManualMode)}
              aria-expanded={isManualMode}
            >
              {isManualMode ? 'ปิด' : 'ระบุเอง'}
            </button>
          </div>
          <input
            type="number"
            id="weight"
            className="field__input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="0.0"
            step="any"
            min="0"
            inputMode="decimal"
          />
        </div>

        {isManualMode && (
          <div className="field field--manual">
            <label className="field__label" htmlFor="manual-dose">
              mg/kg/dose
            </label>
            <input
              type="number"
              id="manual-dose"
              className="field__input"
              value={manualDose}
              onChange={(e) => setManualDose(e.target.value)}
              placeholder={`${selectedDrug.minDosePerKg} - ${selectedDrug.maxDosePerKg}`}
              step="any"
              min="0"
              inputMode="decimal"
            />
          </div>
        )}

        <ResultCard result={result} />
      </form>
    </section>
  );
};
