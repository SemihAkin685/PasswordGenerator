export default class Charsets {
  static sets = {
    lowerCase: 'abcdefghijkmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
    figure: '23456789',
    symbols: '!@#$%^&*()-_=+[]{};:,.?'
  };

  static getSet(name) {
    return this.sets[name] || '';
  }

  static build(selected) {
    return selected.map(s => this.getSet(s)).join('');
  }
}