const { User } = require('../db');

module.exports = async function ({ picture, email, name }) {
    const [user, created] = await User.findOrCreate({ 
        where:{
            email
        },
        defaults:{
            picture, name
        }
    });

    return [user, created];
}