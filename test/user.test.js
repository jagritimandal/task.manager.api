const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // adjust path as needed
const expect = chai.expect;

chai.use(chaiHttp);

