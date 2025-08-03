const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // adjust path as needed
const expect = chai.expect;

chai.use(chaiHttp);

let server;
let token;
let testEmail = 'admin_' + Date.now() + '@test.com';

before((done) => {
  server = app.listen(4000, async () => {
    try {
      // Register admin user
      await chai.request(server)
        .post('/user/registerUser')
        .send({
          name: 'Test Admin',
          email: testEmail,
          password: 'password123',
          mobileNumber: '1234567890',
          role: 'admin'
        });

      // Login admin user
      const res = await chai.request(server)
        .post('/user/login')
        .send({
          email: testEmail,
          password: 'password123'
        });

      token = res.body.token;
      done();
    } catch (err) {
      done(err);
    }
  });
});

after(() => {
  server.close();
});

describe('User API', () => {
  it('should register a new user', (done) => {
    chai.request(server)
      .post('/user/registerUser')
      .send({
        name: 'Jagriti',
        email: 'jagriti_' + Date.now() + '@test.com',
        password: 'password123',
        mobileNumber: '9876543210',
        role: 'user'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return a list of users for admin only', (done) => {
    chai.request(server)
      .get('/user/getAllUsers')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

