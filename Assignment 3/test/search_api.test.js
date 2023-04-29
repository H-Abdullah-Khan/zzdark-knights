import supertest from "supertest";
import { expect } from "chai";

const request = supertest('https://demo.reactstorefront.io/api')

describe('Search API', function() {
    it('GET /search?q=Large%20', function(done) {
        this.timeout(5000);
        request.get('/search?q=Large%20').end((err, res) => {
            if (err) {
                done(err);
                return;
            }
    
            expect(res.statusCode).to.equal(200);
            expect(res.body.pageData.name).to.equal("Results for \"Large \"");
            done();
        });
    });
});