const sendMessages = {
    userNotFound : () => { return {message: 'user not found'} },
    userAlreadyExists : () => { return {message: 'user already exists'}},
    userCreatedSucessfully: () => { return {message: 'user created successfully'}}
}

module.exports = sendMessages;