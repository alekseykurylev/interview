setTimeout(() => {
  new Promise((res) => {
    console.log(3);
    res(null);
  }).then(() => console.log(4));
});

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(1));

console.log(6);

setTimeout(() => console.log(7));

console.log(2);

// ?
