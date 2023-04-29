import supertest from "supertest";
import { expect } from "chai";

const request = supertest('https://demo.reactstorefront.io/api')

describe('Session API', function() {
    it('GET /session', function(done) {
        this.timeout(5000);
        request.get('/session').end((err, res) => {
            if (err) {
                done(err);
                return;
            }
    
            expect(res.statusCode).to.equal(200);
            expect(res.body.name).to.equal("Mark");
            done();
        });
    });
});