const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure_url: true,
});

const uploadImage = async (fileBuffer, folderName) => {
    try {
        const cloudinaryResponse = await cloudinary.uploader.upload(fileBuffer, {
            folder: folderName, // Especifica el nombre de la carpeta en Cloudinary
        });
        return cloudinaryResponse;
    } catch (error) {
        throw new Error("Error al cargar la imagen a Cloudinary: " + error.message);
    }
};

module.exports = { uploadImage };
