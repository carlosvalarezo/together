const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const faker = require('faker');
const userController = require('../../routes/api/controllers/userController');

const User = require('../../models/User');

describe('register user endpoint', () => {

    // it('should return a User given an email after querying the database', (done) => {
    //     const findOneStub = sinon.stub(User, 'findOne')
    //                             .yields(null, fakeUser);

    //     const emailForSearch = fakeUser.email;
        
    //     const validUser = userController.checkUser(emailForSearch);
        
    //     expect(validUser).to.be.equal(fakeUSer);
    // });

    // it('should return null if a given User email does not exist in the database', () => {
    //     const fakeUser = {
    //         name: faker.fake("{{name.firstName}}, {{name.lastName}}"),
    //         email: faker.fake("{{internet.email}}"),
    //         password: faker.fake("{{internet.password}}"),
    //         dateOfBirth: faker.fake("{{date.past}}")
    //     } 

    //     const findOneStub = sinon.stub(User, 'findOne').yields(null, fakeUser, function(){console.log('hola callback')});

    //     console.log({findOneStub});

    //     const emailForSearch = fakeUser.email;

    //     const validUser = userController.checkUser(emailForSearch);

    //     console.log({validUser});

    //     expect(validUser).to.be.equal(null);
        
    // });



});