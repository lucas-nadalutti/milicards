/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

// var bcrypt = require('bcrypt');

module.exports = {

    attributes: {
        provider: 'STRING',
        uid: 'STRING',
        name: 'STRING',
        email: 'STRING',
        firstname: 'STRING',
        lastname: 'STRING'
    }
    // beforeCreate: function(user, cb) {
    //     bcrypt.genSalt(10, function(err, salt) {
    //         bcrypt.hash(user.password, salt, function(err, hash) {
    //             if (err) {
    //                 console.log(err);
    //                 cb(err);
    //             }
    //             else {
    //                 user.password = hash;
    //                 cb();
    //             }
    //         });
    //     });
    // }
};

