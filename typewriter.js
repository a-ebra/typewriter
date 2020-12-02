const sentence = "hello there from lighthouse labs";

let x = 0 

for (let char of sentence) {
  setTimeout (() => {
    process.stdout.write(`${char}`);
  }, x);
  x += 50;
}

x += sentence.length - 1 * 50

setTimeout (() => {
  process.stdout.write(`\n`)
}, x)