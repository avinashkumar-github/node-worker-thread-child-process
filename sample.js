let sum = (...args) => {
  return args.reduce((x, y) => x + y);
};

let total = sum(1, 2, 4, 5, 7);
console.log(total);
