const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const onlyUlrs = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|data:image\/(jpeg|png|gif|bmp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/;

export default function Validation(input) {
    let errors = {};

    // Name
    if (input.name) {
        if (input.name.length === 1) {
            errors.name = "Nombre Corto";
        }

        if (input.name.length === 0) {
            errors.name = "Nombre Requerido";
        }
    } else {
        errors.name = "Nombre es Requerido";
    }

    // Email
    if (!emailRegex.test(input.email)) {
        errors.email = "El correo es inválido";
    }

    if (!input.email) {
        errors.email = "Requerido";
    }

    // Address
    if (input.address === 0) {
        errors.address = "Direccion es Requerida";
    }

    // Phone
    if (input.phone === 0) {
        errors.phone = "Telefono es Requerido";
    }

    // Password
    if (!input.password) {
        errors.password = "Contraseña requerida";
    }

    if (!input.confirmPassword) {
        errors.confirmPassword = "Confirmación de contraseña requerida";
    }

    if (input.password !== input.confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
    }



    // Description
    // if (input.description.length === 0) {
    //     errors.description = "Descripcion es Requerida";
    // }

    // Category
    // if (input.category.length === 0) {
    //     errors.category = "Seleccionar al menos 1 Categoria";
    // }

    // Score
    // if (input.score === 0) {
    //     errors.score = "Sin Puntuacion";
    // }

    return errors;
}
