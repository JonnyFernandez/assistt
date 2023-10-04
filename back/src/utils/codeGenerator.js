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

function generateCode3() {
    const letter = "A";
    const numbers = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return letter + numbers;
}

function generateCode4() {
    const letter = "P";
    const numbers = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return letter + numbers;
}

module.exports = {
    generateCode,
    generateCode2,
    generateCode3,
    generateCode4
}
