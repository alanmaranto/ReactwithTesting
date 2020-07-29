import "@testing-library/jest-dom";
import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("should return a greeting with name and sign", () => {
    const name = "Alan";

    const greeting = getSaludo(name);

    expect(greeting).toBe(`Hola ${name}!`);
  });

  test("should return greeting without name argument", () => {
      const greeting = getSaludo()
      expect(greeting).toBe('Hola Alan!')
  })
});
