import { useState } from 'react';
import { Sparkles, RotateCcw, DollarSign, Trophy } from 'lucide-react';
import LotterySection from './components/LotterySection';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Lottery Master Unlocked
            </h1>
            <DollarSign className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Your Lucky Number Generator for Powerball & Mega Millions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleGenerate}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg"
            >
              <Sparkles className="w-6 h-6" />
              Generate Numbers
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg"
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

        <footer className="mt-12 text-center text-gray-400 text-sm">
          <p className="mb-2">
            Numbers are randomly generated. Please verify with official lottery rules.
          </p>
          <p>Good luck and play responsibly!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
