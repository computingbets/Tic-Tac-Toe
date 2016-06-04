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
  referee(boardValue);
  moveTaken(id, val);
  //api.updateGame(val);
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
 const boardValue = ["", "", "", "",
"", "", "", "", ""];



const addToArray = function (id, val) {
boardValue[id]=val;
console.log(boardValue);
};
let winner = false;


const referee = function (boardValue) {
//  event.preventDefault();
//  console.log('Gameboard' + boardValue);
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
      //    $(document).text("<div>Player O won the game!</div>");
          //div in HTML with this junk and then hide on document load and then show when win/loss/tie occurs
           console.log("The winner is: o");
           window.alert("O wins!");
          // console.log("Winner value " + winner);
        } else if (boardValue.indexOf('') === -1) {
          window.alert("Cats' game");
          // console.log ("The game continues");
          // console.log("Winner value " + winner);
        } else {

          // console.log("Winner value " + winner);
        }
        // for (let i = 0; i < gameBoard.length; i++) {
        //   if (gameBoard[i] !== '') {
        //
        //   }
        //}
//      console.log(gameBoard);
//    return winner;
};




module.exports = {
  addHandlers,
};
