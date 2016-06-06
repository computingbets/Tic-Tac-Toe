'use strict';
const gameLogic = require('../../../gameLogic.js');
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

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


// const onMove = function (event) {
//   event.preventDefault();
//   let id = $(event.target).attr("id");
//   let val = $(event.target).val();
//   gameLogic.setTileValue();
//   api.updateGame();
//   gameLogic.addToArray();
//   return id;

const onUpdateGame = function (event) {
 let index = event.target.id;
let val = $(event.target).text();
let gameId = $('#game-board').val();
  // console.log('THE INDEX IS' + index);
  // console.log('THE VALUE IS'+val);
  api.updateGame(index, val, gameId)
    .done(ui.createSuccess)
    .fail(ui.failure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
  .done(ui.createSuccess)
  .fail(ui.failure);
  $('.col-xs-4').text("");
};


const setTileValue = function (tileId) {
  //console.log('setting value');
  if (turn % 2 === 0) {
   $('#'+tileId).text('X');
  } else  {
   $('#'+tileId).text('O');
  }
  turn++;
  // onUpdateGame(id, val);
};
const onMove = function (event) {
  event.preventDefault();
  let id = $(event.target).attr("id");
  //console.log('id is' + id);

  setTileValue(id);
  let val = $(event.target).text();
  //console.log(val);
  addToArray(id, val);
  referee(boardValue);
  moveTaken(id, val);
  boardOff();
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
>>>>>>> ttttwopointtwo
};
//addToArray uses this return




//addToArray uses this return



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('.col-xs-4').on('click', onMove);
  $('.col-xs-4').on('click', onUpdateGame);
  $('#create-game').on('click', onCreateGame);
};
//
 const boardValue = ["", "", "", "",
"", "", "", "", ""];

// clearBoard = function () {
//   $('col-xs-4').empty();
// }


const addToArray = function (id, val) {
boardValue[id]=val;
console.log(boardValue);
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
        console.log("winner_x");
          winner = true;
          window.alert("X wins!");
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
           console.log("The winner is: o");
           window.alert("O wins!");
        } else if (boardValue.indexOf('') === -1) {
          window.alert("Cats' game");
        } else {


        }

        //
        //   }
        //}
//      console.log(gameBoard);
//    return winner;
};

const boardOff =  function () {
  let game = 'fun';
  if (winner){
  $('.col-xs-4').addClass('gameOver');
//   console.log($('.col-xs-4'));
// } else if ($('#0').hasClass('.gameOver')){
//    $('.gameOver').off('click');
//  } else {
//    let game = 'funn';
//  }
// };
module.exports = {
  addHandlers,
};
