import LotteryBall from './LotteryBall';
import { LotteryGame as LotteryGameType } from '../utils/lottery';

interface LotteryGameProps {
  game: LotteryGameType;
  gameNumber: number;
  type: 'powerball' | 'megamillions';
}

export default function LotteryGame({ game, gameNumber, type }: LotteryGameProps) {
  const jackpotLabel = type === 'powerball' ? 'Powerball' : 'Mega Ball';

  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm md:text-base font-semibold text-gray-700">Game #{gameNumber}</h3>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <div className="flex gap-2 md:gap-3 flex-wrap">
          {game.mainNumbers.map((number, index) => (
            <LotteryBall key={index} number={number} type={type} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="h-8 w-px bg-gray-300"></div>
          <div className="flex flex-col items-center gap-1">
            <LotteryBall number={game.jackpotNumber} isJackpot type={type} />
            <span className="text-xs font-medium text-gray-600">{jackpotLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
