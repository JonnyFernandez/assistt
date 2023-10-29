const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const onlyUlrs = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|data:image\/(jpeg|png|gif|bmp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/;

export default function Validation(input) {
    let errors = {};
    //-----------------------name
    // if((input.name).length === 1) errors.name = "Nombre Corto";

    // if((input.name).length === 0) errors.name = "Nombre es Requerido";
    //-----------------------Empresa    
    if ((input.company).length === 0) errors.company = "Empresa es Requerida";
    //-----------------------image
    // if(!onlyUlrs.test(input.image)) errors.image = "Solo Urls"

    //if(!input.image) errors.image = "Imagen es Requerido";
    //-----------------------unit
    if (input.address == 0) errors.address = "Direccion es Requerida";
    //-----------------------telefono
    if (input.phone == 0) errors.phone = "Telefono es Requerido";
    //-----------------------description
    // if((input.description).length === 0) errors.description = "Descripcion es Requerida"
    //-----------------------category    
    // if(input.category.length === 0) errors.category = "Selecionar al menos 1 Categoria";
    //-----------------------score
    // if(input.score === 0) errors.score = "Sin Puntuacion"

    return errors
}