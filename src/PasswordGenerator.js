import Charsets from './Charsets.js';
import Utils from './Utils.js';

export default class PasswordGenerator {
  constructor(length = 20, sets = ['lowerCase', 'upperCase', 'figure', 'symbols']) {
    this.length = length;
    this.sets = sets;
  }

  generate() {
    const charset = Charsets.build(this.sets);
    if (!charset) throw new Error('choose a valid character.');

    const chars = Array.from(charset);
    const result = [];

    for (const set of this.sets) {
      const s = Charsets.getSet(set);
      result.push(s[Utils.randomIndex(s.length)]);
    }

    while (result.length < this.length) {
      result.push(chars[Utils.randomIndex(chars.length)]);
    }

    return Utils.shuffle(result).join('');
  }
}
