'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create([{
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    role: 'admin'
  },
    {
      provider: 'local',
      name: 'admin',
      email: 'admin@quizzo.com',
      password: 'admin123',
      role: 'admin'
    },
    {
      provider: 'local',
      name: 'player1',
      email: 'player1@quizzo.com',
      password: 'player123',
      role: 'player'
    },
    {
      provider: 'local',
      name: 'player2',
      email: 'player2@quizzo.com',
      password: 'player223',
      role: 'player'
    },
    {
      provider: 'local',
      name: 'moderator',
      email: 'moderator@quizzo.com',
      password: 'moderator123',
      role: 'moderator'
    }],
    function() {
      console.log('finished populating test');
    });
});
