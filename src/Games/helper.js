import Axios from 'axios';

export function getRnd(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export async function genWordsAsync(total, dictFile) {
  const dict = await Axios.get(`${document.baseURI}dicts/${dictFile}.txt`)
    .then(response => response.data.replace(/\r/g, '').split('\n').filter(word => word));
  const words = new Set();
  do {
    words.add(dict[getRnd(dict.length - 1)]);
  } while (words.size < total);
  return [...words.values()];
}

export function makeEnum(arr) {
  const obj = {};
  arr.forEach((label, value) => {
    obj[label] = value;
    obj[value] = label;
  });
  Object.freeze(obj);
  return obj;
}