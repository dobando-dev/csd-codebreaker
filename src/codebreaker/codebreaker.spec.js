import CodeBreaker from "./codebreaker";
import RandomNumberGenerator from "./randomnumbergenerator";

describe("Codebreaker logic", () => {
  it("deberia ganar si adivina el codigo secreto", () => {
    const cb = new CodeBreaker(3);
    expect(cb.arriesgar(3)).toEqual("Ganaste!");
  });

  it("deberia reasignar correctamente el nuevo numero", () => {
    const cb = new CodeBreaker();
    cb.setNumberToGuess(10);
    expect(cb.arriesgar(10)).toEqual("Ganaste!");
  });

  it("deberia ganar usando el numero generado randomicamente", () => {
    const cb = new CodeBreaker();
    const rng = new RandomNumberGenerator(1, 100);
    cb.setNumberToGuess(rng.getNewNumber());
    expect(cb.arriesgar(rng.getLastNumber())).toEqual("Ganaste!");
  });
  
});
