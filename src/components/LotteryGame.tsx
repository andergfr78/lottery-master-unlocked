import LotteryBall from './LotteryBall';
import { Trophy } from 'lucide-react';
import { LotteryGame as LotteryGameType } from '../utils/lottery';

interface LotteryGameProps {
  game: LotteryGameType;
  gameNumber: number;
  type: 'powerball' | 'megamillions';
}

export default function LotteryGame({ game, gameNumber, type }: LotteryGameProps) {
  const jackpotLabel = type === 'powerball' ? 'Powerball' : 'Mega Ball';

  return (
    <div className="card-premium rounded-2xl p-6 md:p-7 hover:shadow-2xl transition-all duration-300 group">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg md:text-xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-300">
            Game {gameNumber}
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        <div className="flex gap-3 md:gap-4 flex-wrap">
          {game.mainNumbers.map((number, index) => (
            <LotteryBall key={index} number={number} type={type} />
          ))}
        </div>

        <div className="flex items-center gap-4 ml-2">
          <div className="h-12 w-0.5 bg-gradient-to-b from-yellow-400/30 to-transparent"></div>
          <div className="flex flex-col items-center gap-2">
            <LotteryBall number={game.jackpotNumber} isJackpot type={type} />
            <span className="text-xs font-poppins font-semibold text-yellow-300 tracking-wider uppercase">{jackpotLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
