const { User, SellingTotal, Book, Review } = require('../db');

module.exports = async function ({ picture, sub, email, name }) {
    const [,IdUser] = sub.split('|');
    
    const [user, created] = await User.findOrCreate({ 
        where:{
            IdUser
        },
        defaults:{
            picture, name, email
        },
        include:[
            {
                model: SellingTotal
            },
            {
                model: Book,
                as:'wichListBook'
            },
            {
                model: Review
            }
        ]
    });

    return [user, created];
}