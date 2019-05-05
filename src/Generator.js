import Axios from 'axios';

function getRnd(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const mine = 0;
const red = 1;
const blue = 2;
const nutral = 3;

export default class Generator {
  constructor(size, file) {
    this.size = size;
    this.total = this.size.x * this.size.y;
    this.file = file;
    this.dict = Axios.get(`${document.baseURI}dicts/${this.file}.txt`).then(this.procDict);
  }

  procDict(response) {
    return response.data.replace(/\r/, '').split('\n').filter(word => word);
  }

  async generateAsync() {
    const colors = this.genColors();
    const words = await this.genWordsAsync();
    return btoa(JSON.stringify({
      colors,
      words,
      size: this.size
    }));
  }

  async genWordsAsync() {
    const dict = await this.dict;
    const words = new Set();
    do {
      words.add(dict[getRnd(dict.length - 1)]);
    } while (words.size < this.total);
    return [...words.values()].join(",");
  }

  genAmounts() {
    const amounts = [];
    amounts[mine] = 1;
    amounts[nutral] = Math.floor(this.total / 3);
    if (this.total % 3 === 1) {
      amounts[nutral] -= 1;
    }
    const value = this.total - amounts[nutral];
    const team = getRnd(1);
    amounts[team ? red : blue] = value;
    amounts[!team ? red : blue] = value - 1;
    return amounts;
  }

  genColors() {
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