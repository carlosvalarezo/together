const User = require('../../../models/User');

const userController = {
    userExists: email => {
        User.findOne({ email })
            .then(user => user)
            .catch((error) => error);
    }
}

module.exports = userController;