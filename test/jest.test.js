test("O valor deve ser nulo", () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  number = 10;
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test("Devo saber trabalhar com objetos", () => {
  const obj = { name: "jhon", email: "jhon@doe.com" };
  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("name", "jhon");
  expect(obj.name).toBe("jhon");

  const obj2 = { name: "jhon", email: "jhon@doe.com" };
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj);
});
