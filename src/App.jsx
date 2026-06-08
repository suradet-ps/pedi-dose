import { Header } from './components/Header';
import { Calculator } from './components/Calculator';
import { Footer } from './components/Footer';
import { useDoseCalculator } from './hooks/useDoseCalculator';

function App() {
  const {
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
  } = useDoseCalculator();

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">ข้ามไปยังเนื้อหาหลัก</a>
      <Header />
      <main className="app__main" id="main-content">
        <Calculator
          weight={weight}
          setWeight={setWeight}
          selectedDrugId={selectedDrugId}
          handleDrugChange={handleDrugChange}
          isManualMode={isManualMode}
          setIsManualMode={setIsManualMode}
          manualDose={manualDose}
          setManualDose={setManualDose}
          selectedDrug={selectedDrug}
          result={result}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
