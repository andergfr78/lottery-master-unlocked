export interface LotteryGame {
  mainNumbers: number[];
  jackpotNumber: number;
}

export function generateUniqueNumbers(count: number, min: number, max: number): number[] {
  const numbers = new Set<number>();

  while (numbers.size < count) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNum);
  }

  return Array.from(numbers).sort((a, b) => a - b);
}

export function generatePowerballGame(): LotteryGame {
  const mainNumbers = generateUniqueNumbers(5, 1, 69);
  const jackpotNumber = Math.floor(Math.random() * 26) + 1;

  return { mainNumbers, jackpotNumber };
}

export function generateMegaMillionsGame(): LotteryGame {
  const mainNumbers = generateUniqueNumbers(5, 1, 70);
  const jackpotNumber = Math.floor(Math.random() * 25) + 1;

  return { mainNumbers, jackpotNumber };
}

export function generateMultipleGames(
  gameType: 'powerball' | 'megamillions',
  count: number
): LotteryGame[] {
  const games: LotteryGame[] = [];
  const generator = gameType === 'powerball' ? generatePowerballGame : generateMegaMillionsGame;

  for (let i = 0; i < count; i++) {
    games.push(generator());
  }

  return games;
}
