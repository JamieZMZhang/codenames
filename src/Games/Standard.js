import { genWordsAsync, getRnd, makeEnum } from './helper';

export const STANDARD_COLORS = makeEnum(['mine', 'red', 'blue', 'nutral']);
export const STANDARD_TILE = makeEnum(['color', 'word', 'selected']);

export default async function generateStandardAsync(width, height, dictFile) {
  const total = width * height;

  const tiles = [];
  const words = await genWordsAsync(total, dictFile);
  const colors = genColors(total);

  for (let i = 0; i < total; ++i) {
    tiles.push([
      colors[i],
      words[i],
      0
    ]);
  }

  return {
    width,
    type: "standard",
    tiles
  };
}

function genAmounts(total) {
  const amounts = [];
  amounts[STANDARD_COLORS.mine] = 1;
  amounts[STANDARD_COLORS.nutral] = Math.floor(total / 3);
  if (total % 3 === 1) {
    amounts[STANDARD_COLORS.nutral] -= 1;
  }
  const value = (total - amounts[STANDARD_COLORS.nutral]) / 2;
  const team = getRnd(1);
  amounts[team ? STANDARD_COLORS.red : STANDARD_COLORS.blue] = value;
  amounts[!team ? STANDARD_COLORS.red : STANDARD_COLORS.blue] = value - 1;
  return amounts;
}

function genColors(total) {
  const amounts = genAmounts(total);
  const colors = [];
  const tempA = [...amounts];
  do {
    const k = getRnd(4);
    if (tempA[k] > 0) {
      colors.push(k);
      tempA[k] -= 1;
    }
  } while (colors.length < total);

  // swap Mine because current way will make the Mine locate on the top very often
  const newLoc = getRnd(total - 1);
  const oldLoc = colors.findIndex(v => v === STANDARD_COLORS.mine);
  colors[oldLoc] = colors[newLoc];
  colors[newLoc] = STANDARD_COLORS.mine;
  return colors;
}
