let chai = require('chai');
let expect = chai.expect;

describe('#testok', () => {
    it("should pass", function() {
        expect("ok").to.be.equal("ok"); 
    }) ;
    
});

/**
 *  Promise testing example
		    let testPromise = new Promise(function(resolve, reject) {
		    	resolve(apiAi.query(body));
		    });

			testPromise
			.then((result) => {
		        //Show the assertion ok
		        expect(result.statusCode).to.equal(401);
		        done();
		    })
		    .catch((error) => {
		    	// show assertion error
		    	done(error);
		    })
 */