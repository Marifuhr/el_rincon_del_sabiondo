const { validate } = require("uuid");
const updateBookController = require("../controllers/updateBookController");

module.exports = async function(req,res){
    try {
        const {IdBook} = req.params;
        const { title, description, image, publisher, numberPages, price, stock, isActive} = req.body;
        
        //Validate if the Id is UUID
        if(!validate(IdBook)) throw new Error("El Id no tiene un formato válido");
        
        const objValues = { title, description, image, publisher, numberPages, price, stock, isActive};
        const validValues = Object.entries(objValues).filter(([k,v]) => {
            if(k === 'isActive') return v?.toString();
            return v;
        });

        if(!validValues.length) throw new Error('No hay valores válidos para actualizar el libro');
        
        const objFinalValues = Object.fromEntries(validValues);
        const UpdatedBook = await updateBookController(IdBook, objFinalValues);
        
        res.json(UpdatedBook);
    } catch ({message}) {
        res.json({error:message});
    };
};