const { getUser, getUsuarioActivo } = require("../../base-pruebas/05-funciones");

describe("Pruebas en 05-funciones", () => {
  test("getUser should return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest)
  });

  test("getActiveUser should return an object", () => {
    const name = "Alan"
    const userTest = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toEqual(userTest)
  });
});
