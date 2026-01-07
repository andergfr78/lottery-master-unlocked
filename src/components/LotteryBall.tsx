interface LotteryBallProps {
  number: number;
  isJackpot?: boolean;
  type: 'powerball' | 'megamillions';
}

export default function LotteryBall({ number, isJackpot = false, type }: LotteryBallProps) {
  const getStyles = () => {
    if (isJackpot) {
      if (type === 'powerball') {
        return 'bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/50 ring-4 ring-red-300 animate-pulse';
      } else {
        return 'bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/50 ring-4 ring-yellow-300 animate-pulse';
      }
    }
    return 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-md';
  };

  return (
    <div
      className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl ${getStyles()} transition-all hover:scale-110`}
    >
      {number}
    </div>
  );
}
