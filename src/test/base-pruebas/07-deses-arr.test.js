import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Tests in desestructuring", () => {
  test("should return a string and number", () => {
    const arr = retornaArreglo(); // 'ABC', 123
    expect(arr).toEqual(["ABC", 123]);
    //or 
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);
    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')
  });
});
