const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello nice to meet you ${name}`;

test("should add two numbers", () => {
  const result = add(3, 89);
  expect(result).toBe(92);
});

test("The result should be a string", ()=> {
  const result = generateGreeting('Tejas');
  expect(result).toBe(`Hello nice to meet you Tejas`);
});