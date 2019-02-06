const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');

router.post('/registeruser', (request, response) => {
    const email = request.body.email;
    const userExists = userController.userExists({email});

    userExists.then(result => {
        console.log({result});
        if(!result){
            const userCreated = userController.createUser(request.body);
            if(userCreated){
                return response.status(200).json(userMiddleware.userCreatedSucessfully());
            }            
        }
        return response.status(404).json(userMiddleware.userAlreadyExists());
    }).catch(error => response.status(400).json({error}));

    
    

});

module.exports = router;