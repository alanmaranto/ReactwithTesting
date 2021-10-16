import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";
import "@testing-library/jest-dom";

describe("tests in heroes functions", () => {
  test("should return a heroe by id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });
  test("should return undefined if heroe doesnt exists", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
  test("should return DC heroes array", () => {
    const DC = heroes.filter((h) => h.owner === "DC");
    console.log(DC);
    const DCHeroes = getHeroesByOwner("DC");
    expect(DCHeroes).toEqual(DC);
  });
  test("should return the length of the Marvel array", () => {
    const MarvelHeroes = getHeroesByOwner("Marvel");
    console.log(MarvelHeroes);
    expect(MarvelHeroes).toHaveLength(2);
    expect(MarvelHeroes.length).toBe(2);
  });
});
