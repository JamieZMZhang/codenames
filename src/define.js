function makeEnum(arr) {
  const obj = {};
  arr.forEach((label, value) => {
    obj[label] = value;
    obj[value] = label;
  });
  Object.freeze(obj);
  return obj;
}

export const COLORS = makeEnum(['mine', 'red', 'blue', 'nutral']);

export const TILE = makeEnum(['color', 'word', 'selected']);
