'use strict';
const gameLogic = require('../../../gameLogic.js');
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

const onMove = function (event) {
  event.preventDefault();
  let id = $(event.target).attr("id");
  let val = $(event.target).val();
  gameLogic.setTileValue();
  api.updateGame();
  gameLogic.addToArray();
  return id;
};
//addToArray uses this return



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('.col-xs-4').on('click', onMove);
};

const boardValue = {0:"", 1:"", 2: "", 3: "",
4:"", 5:"", 6:"", 7: "", 8: ""};

const gameWinner = if ((boardValue[0] === boardValue[1]) && :"", 1:"", 2:""})

const addToArray = function (onMove) {
  id = onMove();
  boardValue[id][value];
  console.log(id);
};
let turn = 0;
const setTileValue = function (tileId) {
  event.preventDefault();
  let tileId = onMove();
  if (turn % 2 === 0) {
   tileId.text('X');
  } else  {
   $('#tileId').text('O');
  }
  turn++;
};
//tileId also was event.target $()

//next -> getTileValue
module.exports = {
  addHandlers,
};
