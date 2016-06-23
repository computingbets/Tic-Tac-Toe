'use strict';
const app = require('../app.js');

let createdGame = 0;


const success = (data) => {
  if(data){
    console.log(data);
} else {
    console.log('fuck yeyeah');
}
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function (data){
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = function (){
  app.user = null;
  console.log(app);
};

const createSuccess = function(data) {
  //console.log(data.game);
  app.game = data.game;
  //console.log('we up in createSuccess')
  //$('#game-board').val(createdGame);
};

const statsSuccess = function(data) {
  //console.log(data.games)
  $('.stats').append('Number of games played: ' + data.games.length);
};

const updateSuccess = function(data) {
  console.log(data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createSuccess,
  createdGame,
  statsSuccess,
  updateSuccess,
};
