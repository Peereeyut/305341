//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken=""; // put access token
const student = {
  student_id: '63364543',
  name: 'Peereeyut Nunti', // replace with your full name.
  age: 20, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: 'Bearer ${accessToken}'
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}


// exports.login = request: function(resource, options) {
//   return $.ajax(options);
exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}