import PasswordGenerator from './PasswordGenerator.js';

function parseArgs() {
  const argv = process.argv.slice(2);
  const lenArg = argv.find(a => a.startsWith('--len='));
  const setsArg = argv.find(a => a.startsWith('--sets='));
  const countArg = argv.find(a => a.startsWith('--count='));

  const len = lenArg ? Number(lenArg.split('=')[1]) : 20;
  const sets = setsArg ? setsArg.split('=')[1].split(',') : ['lowerCase','upperCase','figure','symbols'];
  const count = countArg ? Number(countArg.split('=')[1]) : 1;

  return { len, sets, count };
}

function main() {
  const { len, sets, count } = parseArgs();
  const gen = new PasswordGenerator(len, sets);

  for (let i = 0; i < count; i++) {
    console.log(gen.generate());
  }
}

main();
