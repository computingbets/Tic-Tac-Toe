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
  createdGame = data.game.id;
  $('#game-board').val(createdGame);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createSuccess,
  createdGame,
};
