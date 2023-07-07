const findCreateUser = require("../controllers/findCreateUser");

module.exports = async function(req,res) {
    try {
        const { name, email, sub, picture } = req.body;
        
        //If values are empty or undefined
        const validateValues = Object.values({ name, email, picture }).some((val) => !val);
        
        //Display error after validation
        if(validateValues){//true
            throw new Error('Faltan campos para la creación del usuario');
        };
        const dataUser = { name, email, sub, picture };
        const [user, created] = await findCreateUser(dataUser);

        res.json({user, created});
    } catch ({message}) {
        res.json({error:message});
    };
};