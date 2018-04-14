const functions = require('firebase-functions');
const {ErrorReporting} = require('@google-cloud/error-reporting');
const errors = new ErrorReporting({
    projectId: 'el-dorado-mailing',
    keyFilename: './error_reporting_credentials.json'
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.testFunction = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
 errors.report('Something broke!');
});



