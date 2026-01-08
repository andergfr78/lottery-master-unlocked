interface LotteryBallProps {
  number: number;
  isJackpot?: boolean;
  type: 'powerball' | 'megamillions';
}

export default function LotteryBall({ number, isJackpot = false, type }: LotteryBallProps) {
  const getStyles = () => {
    if (isJackpot) {
      if (type === 'powerball') {
        return 'bg-gradient-to-br from-red-400 via-red-500 to-red-700 shadow-xl shadow-red-500/60 ring-2 ring-red-200 animate-pulse hover:shadow-red-500/80';
      } else {
        return 'bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-600 shadow-xl shadow-yellow-500/60 ring-2 ring-yellow-200 animate-pulse hover:shadow-yellow-500/80';
      }
    }
    return 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 shadow-lg shadow-blue-500/40';
  };

  return (
    <div
      className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl font-mono-number ${getStyles()} transition-all hover:scale-125 hover:-translate-y-2 relative`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      {number}
    </div>
  );
}
