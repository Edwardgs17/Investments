const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Helper = require('../Helper');
const app = require('../../index');

chai.use(chaiHttp);
const API = '/api/investments-ms/investments';


describe('Endpoints Investments ', () => {
  before(async () => {
    Helper.migrate();
  });

  after(async () => {
    await Helper.clear();
  });


  it('Send Investment', () => chai
    .request(app)
    .post(API)
    .send({
      idUser: 1, idProject: 1, status: true, idRewards: 1,
    })
    .then(async (res) => {
      const { body, status } = res;
      console.log(body);
      assert.equal(status, 200);
    }));

  it('empty test', () => chai
    .request(app)
    .post(API)
    .send({})
    .then(assert.fail)
    .catch((error) => {
      assert(error, 500);
    }));

  it('second test', () => chai
    .request(app)
    .get(`${API}/project/1`)
    .then(async (res) => {
      const { body, status } = res;
      console.log(body);
      assert.equal(status, 200);
    }));


  it('third test', () => chai
    .request(app)
    .get(`${API}/user/1`)
    .then(async (res) => {
      const { body, status } = res;
      console.log(body);
      assert.equal(status, 200);
    }));

  it('Send Id User & Projects', () => chai
    .request(app)
    .get(`${API}/user/1/project/1`)
    .then(async (res) => {
      const { body, status } = res;
      assert.equal(status, 200);
      console.log(body);
    }));

  it('Send False Params', () => chai
    .request(app)
    .get(`${API}/user/1/project/1/investments/1`)
    .then(assert.fail)
    .catch((error) => {
      assert(error, 500);
    }));
});
