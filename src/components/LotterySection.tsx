import LotteryGame from './LotteryGame';
import { LotteryGame as LotteryGameType } from '../utils/lottery';

interface LotterySectionProps {
  title: string;
  games: LotteryGameType[];
  type: 'powerball' | 'megamillions';
  description: string;
}

export default function LotterySection({ title, games, type, description }: LotterySectionProps) {
  const headerColor = type === 'powerball' ? 'from-red-600 to-red-800' : 'from-yellow-500 to-yellow-700';

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden">
      <div className={`bg-gradient-to-r ${headerColor} p-6 md:p-8`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white/90 text-sm md:text-base">{description}</p>
      </div>

      <div className="p-4 md:p-6 space-y-4">
        {games.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Click "Generate Numbers" to create your lucky numbers!</p>
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
