import LotteryGame from './LotteryGame';
import { Sparkles } from 'lucide-react';
import { LotteryGame as LotteryGameType } from '../utils/lottery';

interface LotterySectionProps {
  title: string;
  games: LotteryGameType[];
  type: 'powerball' | 'megamillions';
  description: string;
}

export default function LotterySection({ title, games, type, description }: LotterySectionProps) {
  const headerGradient = type === 'powerball'
    ? 'from-red-600 via-red-700 to-red-900'
    : 'from-yellow-500 via-amber-500 to-orange-600';

  const accentColor = type === 'powerball' ? 'text-red-400' : 'text-yellow-300';

  return (
    <div className="card-premium rounded-3xl overflow-hidden shadow-2xl">
      <div className={`bg-gradient-to-br ${headerGradient} p-8 md:p-10 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className={`w-7 h-7 md:w-8 md:h-8 ${accentColor}`} />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">
              {title}
            </h2>
          </div>
          <p className="text-white/85 text-base md:text-lg font-poppins leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-4">
        {games.length === 0 ? (
          <div className="text-center py-16">
            <Sparkles className="w-12 h-12 text-yellow-400/30 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-poppins">
              Click "Generate Numbers" to create your lucky numbers!
            </p>
          </div>
        ) : (
          games.map((game, index) => (
            <LotteryGame key={index} game={game} gameNumber={index + 1} type={type} />
          ))
        )}
      </div>
    </div>
  );
}
