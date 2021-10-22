class CodeBreaker {
  constructor(code) {
    this.code = code;
  }

  setNumberToGuess(number){
    this.code = number;
  }

  arriesgar(intento) {
    return "Ganaste!";
  }
}

export default CodeBreaker;
