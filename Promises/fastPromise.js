const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getFruit = async (id) => {
  const fruit = {
    0: "pineapple",
    1: "peach",
    2: "mango"
  };

  await delay(1000); // waits for 1 second
  return fruit[id];
};

const makeSmoothie = async () => {
  const start = Date.now(); // record start time

  const a = getFruit(0);
  const b = getFruit(2);

  const fruits = await Promise.all([a,b]);
  console.log(fruits);

  const end = Date.now(); // record end time
  console.log(`Time elapsed: ${end - start} ms`);
};

makeSmoothie();
