import { genWordsAsync, getRnd } from './helper';

export default async function generateDualAsync(width, height, dictFile) {
  const total = width * height;

  const tiles = [];
  const words = await genWordsAsync(total, dictFile);
  const colors = genColors(total);

  for (let i = 0; i < total; ++i) {
    tiles.push({
      word: words[i],
      colorA: colors[0][i],
      colorB: colors[1][i],
      selectedA: 0,
      selectedB: 0,
    });
  }

  return {
    width,
    type: "dual",
    tiles,
    guessingTeam: "A"
  };
}

function genAmounts(total) {
  const unit = Math.ceil(Math.sqrt(total)) - 2;
  const amounts = {};

  amounts.mine = unit;
  amounts.green = unit * unit;
  amounts.nutral = total - unit * (unit + 1);
  return amounts;
}

function genColors(total) {
  const GREEN = 'green';
  const NUTRAL = 'nutral';
  const MINE = 'mine';

  const amounts = genAmounts(total);
  const colors = [new Array(total).fill(NUTRAL), new Array(total).fill(NUTRAL)];
  let totalGreen = amounts.green * 2 - amounts.mine;
  const _greens = new Set();
  while (_greens.size < totalGreen) {
    _greens.add(getRnd(total - 1));
  }
  const greens = [..._greens];

  for (let i = 0; i < amounts.mine; ++i) {
    const index = greens[i];
    colors[0][index] = colors[1][index] = GREEN;
  }
  for (let j = 0; j < 2; ++j) {
    for (let i = 0; i < amounts.green; ++i) {
      const index = greens[amounts.mine + amounts.green * j + i];
      colors[j][index] = GREEN;
    }
  }

  colors.forEach(board => {
    let mines = 0;
    while (mines < amounts.mine) {
      const target = getRnd(total - 1);
      if (board[target] === NUTRAL) {
        board[target] = MINE;
        ++mines;
      }
    }
  });
  return colors;
}
