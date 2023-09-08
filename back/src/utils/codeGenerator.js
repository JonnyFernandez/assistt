function generateCode() {
    const letter = "H";
    const numbers = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return letter + numbers;
  }


  // console.log(generateCode);


  module.exports = generateCode