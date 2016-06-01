'use strict';

const anyBoggle = (rank, tray, coords) =>
  coords.map(c => tray[c[0] * rank + c[1]]).join('');

const boggle = (tray, coords) =>
  anyBoggle(4, tray, coords);

const bigBoggle = (tray, coords) =>
  anyBoggle(5, tray, coords);

const superBigBoggle = (tray, coords) =>
  anyBoggle(6, tray, coords);

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
