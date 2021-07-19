const bcrypt = require('bcryptjs');
const users = [
    {
        name: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'user1',
        email: 'user1@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'user2',
        email: 'user2@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }
];

module.exports = users;