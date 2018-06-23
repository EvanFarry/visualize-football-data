//old unit testing 
/*
'use strict';

//import local files
var hello = require('../index.js');
var fun = require('../fun.js');

//supertest
var supertest = require('supertest');

//chai imports
var chai = require('chai');
var expect = require('chai').expect;
var should = require('chai').should();

//
var server = supertest.agent('http://localhost:3000');

describe('fun.js', () => {
  it('should return "foo"', () => {
    fun.foo().should.equal('foo');
  })
})

describe('yell', () => {
  it('should add ! to a string', (done) => {
    server.get('/yell')
    .query({ name : 'evan'})
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      res.status.should.equal(200);
      res.body.name.should.equal('EVAN!');
      done();
    })
  })
})

//start unit testing
describe('sample test', function(){

  //--------------
  // home route
  //--------------
  it('should have status 200', function(done){ //pass done
    server.get('/').end(function(err, res){
      res.status.should.equal(200);
      done();
    });
  });//end home route


  //--------------
  // add route
  //--------------
  it('should add two numbers', (done) => {
    server.post('/add')
    .send({num1 : 10, num2 : 5})
    .expect("Content-type", /json/)
    .expect(200)
    .end((err,res)=>{
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.data.should.equal(15);
      done();
    })
  })//end add route


  //--------------
  // 404 route
  //--------------
  it('should return 404', (done) => {
    server.get('/random')
    .expect(404)
    .end((err,res) => {
      res.status.should.equal(404);
      done();
    })
  })

});//end describe


//________________________________________
// Demo for unit testing
//________________________________________
describe('hello()', function(){
  it('should say hello world', function(){
    expect(hello()).to.equal('hello world!');
  })//end it
})//end describe
*/
