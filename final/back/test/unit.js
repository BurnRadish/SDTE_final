let chai = require('chai');
let chaiHttp = require('chai-http');
const { describe } = require('mocha');
let server = require('../index');

chai.should();
chai.use(chaiHttp);

describe('Unit test', () => {
    describe('CRUD', () => {
        it('Read all data', ()=> {
            chai.request(server)
            .get("/")
            .end((err, res) =>{
                res.should.have.status(200);
            })
        })
    })
})