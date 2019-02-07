const messages = {
    userNotFound : () => { return {message: 'user not found'} },
    userAlreadyExists : () => { return {message: 'user already exists'}},
    userCreatedSucessfully: () => { return {message: 'user created successfully'}},
    userLoggedIn: () => { return {message: 'user logged in'}}
}

module.exports = messages;