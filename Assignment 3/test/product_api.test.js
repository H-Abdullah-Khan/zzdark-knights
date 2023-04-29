import supertest from "supertest";
import { expect } from "chai";

const request = supertest('https://demo.reactstorefront.io/api')

describe('Product API', function() {
    it('GET /p/1', function(done) {
        this.timeout(5000);
        request.get('/p/1').end((err, res) => {
            if (err) {
                done(err);
                return;
            }
    
            expect(res.statusCode).to.equal(200);
            expect(res.body.pageData.product).to.not.be.empty;
            done();
        });
    });
});