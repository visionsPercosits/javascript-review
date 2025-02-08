const createHelloWorld = () => {
  function helloWorld() {
      return 'Hello World';
  }

  return helloWorld;
};

const helloWorld = createHelloWorld();

console.log(helloWorld());

