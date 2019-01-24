/*var expect = require("chai").expect;
var mongoose = require("mongoose");
var authorModel = require("../models/author");
var Promise = require("bluebird");

function resetAuthors() {
    return new Promise( function(resolve,reject) {
    mongoose.connection.collections['authors'].drop(resolve, reject);
    });
}

var connectDB = Promise.promisify(mongoose.connect, mongoose);

function findAuthors(query) {
    return Promise.cast(mongoose.model('Author').find(query).exec());
}


//mongoose.connect('mongodb://localhost/codebabeldashboard');

describe("get authors", function(){
 it("should never be empty since authors are seeded", function(done){
    connectDB('mongodb://localhost/codebabeldashboard')
    .then(resetAuthors)
    .then(authorModel.seedAuthors)
    .then(findAuthors)
    .then(function(authorsList) {

        // findAuthors({}).then(function(jobsList) {

            //mongoose.model('Author').find({}).exec(function(error, authorsList) {
                //res.send(collection);
            
            //authorsList = [];    
            expect(authorsList.length).to.be.at.least(1);
            done();
            });
        });
       
    }); */



    var expect = require("chai").expect;
    var mongoose = require("mongoose");
    var authorModel = require("../models/author");

    //function resetAuthors(callback) {
       // mongoose.connection.collections['authors'].drop(callback);
    //}

    //mongoose.connect('mongodb://localhost/codebabeldashboard');
    describe("get authors", function(){
        it("should never be empty since authors are seeded", function(done){ 
            //mongoose.connect('mongodb://localhost/codebabeldashboard', function(){
            mongoose.connect('mongodb://userdev1:userdev1@ds153394.mlab.com:53394/codebabeldashboard', function(){
                //resetAuthors(function(){
                    //authorModel.seedAuthors(function() {
                        mongoose.model('Author').find({}).exec(function(error, authorsList) {
                            expect(authorsList.length).to.be.at.least(1);
                            done();
                        });
                    //});
                //});
            });
        });
    }); 
