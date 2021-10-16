import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("Promises tests", () => {
  test("should return a async heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
  test("should get an error if heroe doesnt exists", (done) => {
    const id = 10;

    getHeroeByIdAsync(id)
/*       .then((heroe) => {
        expect(heroe).toBe(heroes[0]);
        done();
      }) */
      .catch((err) => {
        expect(err).toBe("No se pudo encontrar el héroe");
        done();
      });
  });
});
