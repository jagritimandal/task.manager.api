const chai = require('chai');
const app = require('../app'); // Adjust the path if your app.js is located elsewhere
const expect = chai.expect;

describe('Task API', () => {
  let token = '';

  before((done) => {
    chai.request(app)
      .post('/users/login')
      .send({ email: 'jagriti@gmail.com', password: '123456' })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  it('should create a task', (done) => {
    chai.request(app)
      .post('/task/createTask')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "title":"Task1",
        "description":"this task is for testing",
        "status":"To Do",
        "priority":"Medium",
        "owner":"6846f422617276b36508bfde"
    })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('title').eql('New Task');
        done();
      });
  });
});
