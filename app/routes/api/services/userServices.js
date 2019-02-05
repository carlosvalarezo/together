const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');

router.post('/registeruser', (request, response) => {
    const email = request.body.email;
    const user = userController.userExists({email});

    if(!user){
        return response.json(userMiddleware.userNotFound());
    }

    return response(user);

});

module.exports = router;