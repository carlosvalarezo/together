const User = require('../../../models/User');

const userController = {
    userExists: email => {
        return User.findOne(email)
            .then(user => user)
            .catch(error => error);
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
        return new User(newUser).save()
                                  .then(writeStatus => writeStatus)
                                  .catch(error => error);

    }
}

module.exports = userController;