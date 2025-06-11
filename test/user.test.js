// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app.js'); // Path to your Express app
// const expect = chai.expect;

// chai.use(chaiHttp);

// describe('User API', () => {
//   describe('POST /users/register', () => {
//     it('should register a new user', (done) => {
//       chai.request(app)
//         .post('/api/users/register')
//         .send({
//           name: 'Test User',
//           email: 'testuser@example.com',
//           password: 'password123',
//           mobileNumber: 123456777,
//           role: 'user'
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(201);
//           expect(res.body).to.have.property('user');
//           expect(res.body.user).to.have.property('email').eql('testuser@example.com');
//           done();
//         });
//     });
//   });

//   describe('POST /users/login', () => {
//     it('should log in a registered user and return a token', (done) => {
//       chai.request(app)
//         .post('/api/users/login')
//         .send({
//           email: 'testuser@example.com',
//           password: 'password123'
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           expect(res.body).to.have.property('token');
//           done();
//         });
//     });
//   });
// });
