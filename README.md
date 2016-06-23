![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## John Staley aka logicmyth's client project one!

#### What App This Is
This app is a single page aplication that features a tic-tac-toe game. In addition, it features sign-in, sign-out, password features, retrieval of game stats, and database storage of player moves and each individual game.

####Languages Used
This app implements javascript, html, and bootstrap css.

####Programming Challenges and Solutions
Programming this app had some problems forseen and unforseen. The slow pace of starting conflicted with time constraints, however this problem was overcome by references to coder bases both in class and online. That is, referring to another coder helped greatly and getting a new set of eyes on code made this app possible. Another issue came presented itself in the final stages of programming. This occured when testing the app and realizing that fixing one bug uncovered several new ones. The solution of said issue was that this programmer coded addHandlers in the new/restart game function(as a quick fix to the replayable board feature), which duplicated ajax calls and set turns to not go up by one after two games. After sitting with a colleague, I realized that I had to remove addHandlers and only call one particular function from the whole handlers group. This process of discovering issues proved challenging and taught me that being resourceful is an essential quality in a programmer.

####User Stories and Wireframes

User stories - As a user I want to play a game of tic-tac-toe and restart the game. As a user I want to sign-in and sign-out when I play tic tac toe. As a user I want to get the number of games that I played.

Wireframes - http://imgur.com/qmmRmCN

#### One Final Note
To start your first game, please click the Log/Start Game button in order to initialize game rules and to keep game stats.
To restart or play a new game, please click new game.
