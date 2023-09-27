const supertest = require("supertest");
const request = supertest("http://localhost:3009");

test("Deve responder na porta 3009", () => {
  // Acessar a url http://localhost:3009
  // Verificar se a respota é 200. (OK)
  return request.get("/").then((res) => expect(res.status).toBe(200));
});
