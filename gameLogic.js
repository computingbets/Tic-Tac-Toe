'use strict';

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
  setTileValue,
  addToArray,
};
