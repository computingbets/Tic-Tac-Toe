'use strict';
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data =  getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data =  getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.signOutSuccess);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data =  getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onUpdateGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateGame(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
  .done(ui.success)
  .fail(ui.failure);
};

let turn = 0;
const setTileValue = function (tileId) {
  //console.log('setting value');
  if (turn % 2 === 0) {
   $('#'+tileId).text('X');
  } else  {
   $('#'+tileId).text('O');
  }
  turn++;
};
const onMove = function (event) {
  event.preventDefault();
  let id = $(event.target).attr("id");
  //console.log('id is' + id);

  setTileValue(id);
  let val = $(event.target).text();
  console.log(val);
  addToArray(id, val);
  //api.updateGame(val);
  return [id, val];
};
//addToArray uses this return



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('.col-xs-4').on('click', onMove);
  $('#update-game').on('click', onUpdateGame);
  $('#create-game').on('click', onCreateGame);
};
//
 const boardValue = {0 :"", 1 :"", 2 :"", 3 :"",
4 : "", 5 :"", 6 :"", 7 :"", 8 :""};



const addToArray = function (id, val) {
// let together = onMove();
// console.log(together);
// let id = together[0];
// let val = together[1];
boardValue[id]=val;
console.log(boardValue);
};

//addToArray();
// console.log(boardValue);
// const gameWinner = if ((boardValue[0] === boardValue[1]) &&
// (boardValue[1] === boardValue[2]) && , 1:"", 2:""})


//



//tileId also was event.target $()

//next -> getTileValue
module.exports = {
  addHandlers,
};
