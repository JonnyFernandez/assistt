const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function LoginValidation(input) {
    let errors = {};


    // Email
    if (!emailRegex.test(input.email)) {
        errors.email = "El correo es inválido";
    }

    if (!input.email) {
        errors.email = "Requerido";
    }

  
    // Password
    if (!input.password) {
        errors.password = "Contraseña requerida";
    }


    return errors;
}
