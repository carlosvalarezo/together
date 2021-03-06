const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userMessages = require('../middleware/userMessages');

router.post('/registeruser', (request, response) => {
    const email = request.body.email;
    const userExists = userController.userExists({email});
    
    const validUser = userExists.then(result => {
        if(!result){
            const userCreated = userController.createUser(request.body);
            if(userCreated){
                return userCreated;
            }
        }
        return response.status(404).json(userMessages.userAlreadyExists());
    }).catch(error => response.status(400).json({error}));

    validUser.then(result => {
        const {name, avatar} = result;
        return response.status(200).json({name, avatar});
    }).catch(error => response.status(400).json({error}));
});

router.post('/login', (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    const userExists = userController.logginUser({email, password});

    userExists.then(result => {
        console.log({result});
        if(result){
            return response.status(200).json({result});          
        }
        return response.status(404).json(userMessages.userNotFound());
    }).catch(error => response.status(400).json({error}));
});


module.exports = router;