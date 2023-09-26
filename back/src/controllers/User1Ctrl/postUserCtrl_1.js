const { User1, Entity } = require( '../../db' );
const bcrypt = require( "bcryptjs" );
const { generateCode } = require('../../utils/codeGenerator');

const createUser1 = async ( cuit, name, address, email, phone, password, entity ) => {
    let usercode = generateCode()
    try { // Buscar la entidad en la base de datos
        const EntityDB = await Entity.findAll( {
            where: {
                name: entity
            }
        } );

        if ( ! EntityDB ) { // Si no se encuentra la entidad, lanzar un error con un mensaje descriptivo
            throw new Error( `La entidad "${ entity }" no existe en la base de datos` );
        }

        name = name.toUpperCase();
        email = email.toLowerCase();

        const userExists = await User1.findOne( { where: {
                email
            } } );
        if ( userExists ) 
            throw new Error( "Este correo electrónico ya está registrado" );
        

        const passwordHash = await bcrypt.hash( password, 10 );
        const userData = {
            usercode,
            cuit,
            name,
            address,
            email,
            phone,
            password: passwordHash
        };

        const newUser1 = await User1.create( userData );

        // Asociar al usuario con la entidad encontrada
        await newUser1.addEntity( EntityDB );

        return `Usuario creado`;
    } catch ( error ) { // Capturar el error y enviar una respuesta de error al cliente
        return { error: error.message };
    }
};


module.exports = createUser1;
