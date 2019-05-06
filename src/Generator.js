import { COLORS } from '@/define';
import Axios from 'axios';

function getRnd(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}



export default class Generator {
  constructor(size, file) {
    this.size = size;
    this.total = this.size.x * this.size.y;
    this.file = file;
    this.dict = Axios.get(`${document.baseURI}dicts/${this.file}.txt`).then(this.procDict);
  }

  procDict(response) {
    return response.data.replace(/\r/g, '').split('\n').filter(word => word);
  }

  async generateAsync() {
    const colors = this.genColors();
    const words = await this.genWordsAsync();
    return btoa(JSON.stringify({
      colors,
      words,
      size: this.size,
      selected: Array(this.total).fill("0").join(""),
    }));
  }

  async genWordsAsync() {
    const dict = await this.dict;
    const words = new Set();
    do {
      words.add(dict[getRnd(dict.length - 1)]);
    } while (words.size < this.total);
    return [...words.values()].map(v => v[0].toUpperCase() + v.substring(1)).join(",");
  }

  genAmounts() {
    const amounts = [];
    amounts[COLORS.mine] = 1;
    amounts[COLORS.nutral] = Math.floor(this.total / 3);
    if (this.total % 3 === 1) {
      amounts[COLORS.nutral] -= 1;
    }
    const value = this.total - amounts[COLORS.nutral];
    const team = getRnd(1);
    amounts[team ? COLORS.red : COLORS.blue] = value;
    amounts[!team ? COLORS.red : COLORS.blue] = value - 1;
    return amounts;
  }

  genColors() { // BUG: wrong color amounts
    const amounts = this.genAmounts();
    const colors = [];
    const tempA = [...amounts];
    do {
      const k = getRnd(4);
      if (tempA[k] > 0) {
        colors.push(k);
        tempA[k] -= 1;
      }
    } while (colors.length < this.total);
    return colors.join("");
  }
}