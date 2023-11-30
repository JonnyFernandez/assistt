export function codeToOrder() {
    const letter = "OR-";
    const numbers = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return letter + numbers;
}
export function codeToProd(data) {
    const letter = data === "almacen"
        ? "AL-"
        : data === "libreria"
            ? "LB-"
            : data === "medico"
                ? "ME-"
                : data === "limpieza"
                    ? "LI-"
                    : data === "otros"
                        ? "OT-"
                        : ''

    const numbers = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return letter + numbers;
}





// console.log(generateCode);


