const User = require('../../../models/User');

const userController = {
    userExists: email => {
        return User.findOne(email);
    },
    createUser: user => {
        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password,
            dateOfBirth: user.dateOfBirth,
            nickName: user.nickName,
            avatar: user.avatar
        }
        return new User(newUser).save();

    },
    logginUser: (email, password) => {
        return User.findOne({email, password}, {name:1, avatar:1});
    }
}

module.exports = userController;