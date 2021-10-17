import { getImagen } from "../../base-pruebas/11-async-await";

describe("Async-Await tests", () => {
  test("Should return url of the image", async () => {
    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
  });
});
