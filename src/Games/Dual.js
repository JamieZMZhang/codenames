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
  const amounts = genAmounts(total);
  const colors = [new Array(total), new Array(total)];
  let commonGreen = amounts.mine;
  amounts.green -= commonGreen;
  while (commonGreen > 0) {
    const target = getRnd(total - 1);
    if (colors[0][target] === undefined) {
      colors[0][target] = 'green';
      colors[1][target] = 'green';
      --commonGreen;
    }
  }
  colors.forEach(board => {
    const boardAmount = { ...amounts };
    for (let i = 0; i < total; ++i) {
      if (board[i] === undefined) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const color = Object.keys(boardAmount)[getRnd(3)];
          if (boardAmount[color] > 0) {
            --boardAmount[color];
            board[i] = color;
            break;
          }
        }
      }
    }
  });
  return colors;
}
