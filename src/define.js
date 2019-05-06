export const COLORS = {
  mine: 0,
  red: 1,
  blue: 2,
  nutral: 3,
};

Object.keys(COLORS).forEach(k => {
  COLORS[COLORS[k]] = k;
});

Object.freeze(COLORS);