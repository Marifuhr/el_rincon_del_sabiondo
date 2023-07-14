const { User, SellingTotal, Selling, Book, Review } = require('../db');

module.exports = async function ({ picture, sub, email, name }) {
    const [, IdUser] = sub.split('|');

    const [user, created] = await User.findOrCreate({
        where: {
            IdUser
        },
        defaults: {
            picture, name, email
        },
        include: [
            {
                model: SellingTotal,
                include: [
                    {
                        model: Selling,
                        as: 'products',
                        include:[
                            {
                                model: Book
                            }
                        ]
                    }
                ]
            },
            {
                model: Book,
                as: 'wichListBook'
            },
            {
                model: Review,
                include: {
                    model: Book
                }
            }
        ]
    });

    return [user, created];
}