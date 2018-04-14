const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {ErrorReporting} = require('@google-cloud/error-reporting');
const tpKeys = require('./typeform_config.js').tpkeys;

const errors = new ErrorReporting({
    projectId: 'el-dorado-mailing',
    keyFilename: './error_reporting_credentials.json'
});

const axios = require('axios');

// Setup the axios instance for type form: 

var typeform = axios.create({
    baseURL: 'https://api.typeform.com/forms/'+tpKeys.id,
    timeout: 1000,
    headers: {'Authorization': 'bearer '+tpKeys.token}
  });



/**
 * Get all the typeform completed responses 
 */

exports.typeformTest = functions.https.onRequest((request, response) => {
    // ToDO : Implement an answer parsing function. 
    // typeform.get('/responses?completed=true')
    // .then(function (response) {
    //     console.log(response.data.items[0].answers);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
});











// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.testFunction = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
//  errors.report('Something broke!');
// });



// /**
//  * A simple text test assertion to check it is working
//  */

// exports.test = () => {
//     return "hello";
// };

// /**
//  * Responds to any HTTP request that can provide a "message" field in the body.
//  *
//  * @param {Object} req Cloud Function request context.
//  * @param {Object} res Cloud Function response context.
//  */

// exports.helloWorld = (req, res) => {
//     if (req.body.message === undefined) {
//       // This is an error case, as "message" is required
//       res.status(400).send('No message defined!');
//     } else {
//       // Everything is ok
//       console.log(req.body.message);
//       res.status(200).end();
//     }
//   };

