import { useState } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';
import LotterySection from './components/LotterySection';
import { FloatingDecorations, GradientOrb } from './components/DecorativeElements';
import { generateMultipleGames, LotteryGame } from './utils/lottery';

function App() {
  const [powerballGames, setPowerballGames] = useState<LotteryGame[]>([]);
  const [megaMillionsGames, setMegaMillionsGames] = useState<LotteryGame[]>([]);

  const handleGenerate = () => {
    setPowerballGames(generateMultipleGames('powerball', 5));
    setMegaMillionsGames(generateMultipleGames('megamillions', 5));
  };

  const handleReset = () => {
    setPowerballGames([]);
    setMegaMillionsGames([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <GradientOrb />
      <FloatingDecorations />

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <header className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-3">
              <span className="text-gradient-gold">Lottery Master</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-poppins">
              Your Lucky Number Generator for Powerball & Mega Millions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={handleGenerate}
              className="button-luxury relative group flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 hover:from-emerald-600 hover:via-green-600 hover:to-teal-700 text-white font-bold font-poppins py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all text-lg"
            >
              <Sparkles className="w-6 h-6" />
              Generate Numbers
            </button>

            <button
              onClick={handleReset}
              className="button-luxury relative group flex items-center gap-3 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 text-white font-bold font-poppins py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all text-lg"
            >
              <RotateCcw className="w-6 h-6" />
              Reset / Clear
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <LotterySection
            title="Powerball"
            games={powerballGames}
            type="powerball"
            description="5 numbers (1-69) + 1 Powerball (1-26)"
          />

          <LotterySection
            title="Mega Millions"
            games={megaMillionsGames}
            type="megamillions"
            description="5 numbers (1-70) + 1 Mega Ball (1-25)"
          />
        </div>

        <footer className="mt-16 text-center text-gray-400 text-sm font-poppins">
          <p className="mb-2 text-gray-500">
            Numbers are randomly generated. Please verify with official lottery rules.
          </p>
          <p className="text-gray-500">Good luck and play responsibly!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
