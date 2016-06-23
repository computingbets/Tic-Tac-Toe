'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

let boardValue = ["", "", "", "",
"", "", "", "", ""];
let winner = false;
let boardValueIndex = "";
let turn = 0;

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

//This is supposed to get the div # and
// get x or o and put that into db
const onUpdateGame = function () {
  let index = event.target.id;
  let val = $(event.target).text();
  let gameId = $('#game-board').val();
  //  console.log('THE INDEX IS' + index);
  //  console.log('THE VALUE IS'+val);
  api.updateGame(index, val, gameId)
    .done(ui.updateSuccess)
    .fail(ui.failure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
  .done(ui.createSuccess)
  .fail(ui.failure);
  // winner = false;
  // boardValue = ['', '', '', '', '', '', '', '', ''];
  // turn = 0;
  // boardValueIndex = '';
  // console.log('newgame');
  // $('.col-xs-4').text("");
  // $('.col-xs-4').removeClass('gameOver');
  // $('.gameOver').on('click', onMove);
};

const onStats = function (event) {
  event.preventDefault();
  // console.log('StatS!');
  api.getStats()
  .done(ui.statsSuccess)
  .fail(ui.failure);
};

const onGameOver = function () {
  $('.col-xs-4').off('click');
  // console.log('gameoverstarts');
  api.gameOver()
  .done(ui.success)
  .fail(ui.failure);
  // console.log('gameOverEnds');
};

const onNewGame = function (event) {
  event.preventDefault();
  $('.col-xs-4').on('click', onMove);
  winner = false;
    boardValue = ['', '', '', '', '', '', '', '', ''];
    turn = 0;
    boardValueIndex = '';
  $('.col-xs-4').text('');
  $('.col-xs-4').removeClass('gameOver');
  //addHandlers();
  api.createGame()
  .done(ui.createSuccess)
  .fail(ui.failure);
};

const setTileValue = function (tileId) {
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

  setTileValue(id);
  let val = $(event.target).text();
  addToArray(id, val);
  onUpdateGame();
  referee(boardValue);
  moveTaken(id, val);
  // boardOff();
  // keepBoardOff();
  //onGameOver();
  return [id, val];
};

const moveTaken = function (id, val) {
  let tile = parseInt(id);
  let value = val;
  let takenTile = (event.target);
  if (boardValue[tile] !== '') {
      $(takenTile).off('click');
    // console.log(value + 'already has this spot!');
  } else {
      boardValue[tile] = value;
    }
};
//addToArray uses this return




//addToArray uses this return

const addToArray = function (id, val) {
boardValue[id]=val;
//app.game.cells[id] = val;
//console.log(app.game.cells);
};

const referee = function (boardValue) {
//  event.preventDefault();
  if (
      ((boardValue[0] === boardValue[1]) && (boardValue[2] === boardValue[0]) && boardValue[0]==='X') ||
      ((boardValue[3] === boardValue[4]) && (boardValue[5] === boardValue[3]) && boardValue[3] ==='X') ||
      ((boardValue[6] === boardValue[7]) && (boardValue[8] === boardValue[6]) && boardValue[6] ==='X') ||
      ((boardValue[0] === boardValue[3]) && (boardValue[6] === boardValue[0]) && boardValue[0] ==='X') ||
      ((boardValue[1] === boardValue[4]) && (boardValue[7] === boardValue[1]) && boardValue[1] ==='X') ||
      ((boardValue[2] === boardValue[5]) && (boardValue[8] === boardValue[2]) && boardValue[2] ==='X') ||
      ((boardValue[0] === boardValue[4]) && (boardValue[8] === boardValue[0]) && boardValue[0] ==='X') ||
      ((boardValue[2] === boardValue[4]) && (boardValue[6] === boardValue[2]) && boardValue[2] ==='X')) {
        //console.log("winner_x");
          winner = true;
          window.alert("X wins!");
          onGameOver();
          //$('.col-xs-4').off('click');
          // console.log("The winner is: x");
          // console.log("Winner value " + winner);
        } else if (((boardValue[0] === boardValue[1]) && (boardValue[2] === boardValue[0]) && boardValue[0] ==='O') ||
      ((boardValue[3] === boardValue[4]) && (boardValue[5] === boardValue[3]) && boardValue[3] ==='O') ||
      ((boardValue[6] === boardValue[7]) && (boardValue[8] === boardValue[6]) && boardValue[6] ==='O') ||
      ((boardValue[0] === boardValue[3]) && (boardValue[6] === boardValue[0]) && boardValue[0] ==='O') ||
      ((boardValue[1] === boardValue[4]) && (boardValue[7] === boardValue[1]) && boardValue[1] ==='O') ||
      ((boardValue[2] === boardValue[5]) && (boardValue[8] === boardValue[2]) && boardValue[2] ==='O') ||
      ((boardValue[0] === boardValue[4]) && (boardValue[8] === boardValue[0]) && boardValue[0] ==='O') ||
      ((boardValue[2] === boardValue[4]) && (boardValue[6] === boardValue[2]) && boardValue[2] ==='O')) {
          winner = true;
          // console.log("The winner is: o");
           window.alert("O wins!");
           onGameOver();
        } else if (boardValue.indexOf('') === -1) {
          window.alert("Cats' game");
          onGameOver();
        } else {


        }

        //
        //   }
        //}
//      console.log(gameBoard);
//    return winner;
};

// const boardOff =  function () {
//   // let game = 'fun';
//   if (winner) {
//   $('.col-xs-4').addClass('gameOver');
// //   console.log($('.col-xs-4'));
//
// //  } else {
// //    let game = 'funn';
//  }
//  };

// const keepBoardOff = function () {
//   if ($('.col-xs-4').hasClass('gameOver')){
//    $('.gameOver').off('click');
//  }
// };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('.col-xs-4').on('click', onMove);
  // $('.col-xs-4').on('click', onUpdateGame);
  $('#create-game').on('click', onCreateGame);
  $('#new-game').on('click', onNewGame);
  $('#stats').on('click', onStats);
};
 // $('.col-xs-4').text("");
module.exports = {
  addHandlers,
};
