function generateCode() {
    const letter = "H";
    const numbers = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return letter + numbers;
  }

  function generateCode2() {
    const letter = "R";
    const numbers = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return letter + numbers;
  }


  // console.log(generateCode);


  module.exports = {generateCode, generateCode2}