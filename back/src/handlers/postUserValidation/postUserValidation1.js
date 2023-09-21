const getUserValidation1 = require('../../controllers/User1Ctrl/postUserValidationCrtl1')

const handlerPostUserValidation1 = async (req, res) => {
  const { cuit, name, address, email, phone, password} = req.body;

  try {
   if (password) { 
      const response = await getUserValidation1({ cuit, name, address, email, phone, password }); // Pasa 'image' como parámetro
      return res.status(200).json(response);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = handlerPostUserValidation1;