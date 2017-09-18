// Variables
const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};

// This counter is used to number the board names
let counter = 1;

// This are used to determine whether or not the board needs to be removed
let remove = false;

// These booleans are used in the moveCard function to determine if the
// board and the list exists.
let correctBoard = false;
let correctListA = false;
let correctListB = false;

// This function is used to list out all the boards.
function listBoards(array){
  console.log(`------------------`);
  for(let x in array) {
    console.log(`${counter}- ` + x);
    console.log(`------------------`);
    counter ++;
  }
  counter = 1;
}

// This function is used to create a board if the function is called, and a duplicate doesn't exist.
function createBoard(boardName){
  for(let x in hello){
    if(boardName === x){
      console.log(`Board ${boardName} already exist.`);
    }
    else{
      console.log(`Board ${boardName} was created.`);
      hello[boardName] = boardName;
    }
  }
}

// This function is used to remove a board if the function is called and a duplicate exist.
function removeBoard(boardName){
  for(let x in hello){
    if(boardName === x){
      delete(hello[boardName]);
      remove = true;
    }
  }
  if(remove === true){
    console.log(`Board ${boardName} was removed.`);
  }
  else{
    console.log(`Board ${boardName} doesn't exist.`);
  }
  remove = false;
}

// This function is used to display the items on a board.
function displayBoard(boardName){
  for(let x in hello){
    if(boardName === x){
      console.log(`|------------------`);

      for(let y in hello[x]){

        console.log(`| ` + y);
        console.log(`|------------------`);

        for(let z in hello[x][y]){
          console.log(`|> ` + hello[x][y][z]);
        }
        console.log(`|------------------`);
      }
    }

    else{
      display = false;
    }
  }
}

// This function is used to create a new list
function createList(boardName, listName){

  let boardExist = false;
  let listExist = false;

  for(let x in hello){
    if (boardName === x){
      for(let y in hello[x]){
        if(listName === y){
          listExist = true;
        }
        else{
          hello[x][listName] = '';
          listExist = false;

        }
      }
    }
  }
  if (listExist === true){
    console.log('List already exist');
  }
  else{
    console.log('New list created');
  }
}

// This function is used to create a new card
function createCard(boardName, listName, cardName){

  let boardExist = false;
  let listExist = false;

  for(let x in hello){
    if(boardName === x){
      for (let y in hello[x]){
        if(listName === y){
          hello[x][y].push(cardName);
          listExist = true;
        }
      }
      boardExist = true;
    }
  }

  if(boardExist === false){
    console.log("Board doesn't exist.");
  }

  if(listExist === false){
    console.log("List doesn't exist.");
  }
}

// This function is used to remove list inside a board
function removeList(boardName, listName){
  for(let x in hello){
    if(boardName === x){
      for(let y in hello[x]){
        if(listName === y){
          delete(hello[x][y]);
        }
      }
    }
  }
}

//This function is used to remove a card inside a specific list on the board
function removeCard(boardName, listName, cardIndex){
  for(let x in hello){
    if(boardName === x){
      for(let y in hello[x]){
        if(listName === y){
          for(let z = 0; z < hello[x][y].length; z++){
            if(cardIndex === z){
              hello[x][y].splice(z, 1);
            }
          }
        }
      }
    }
  }
}

// This function is used to move a card between separate lists.
function moveCard(boardName, fromList, toList, fromCardIndex, toCardIndex){
  for(let x in hello){
    if(boardName === x){
      correctBoard = true;
    }
    for(let y in hello[x]){
      if(fromList === y){
        correctListA = true;
      }
      if(toList === y){
        correctListB = true;
      }
    }
  }
  if(correctBoard && correctListA && correctListB){
    moved = hello[boardName][fromList][fromCardIndex];

    hello[boardName][fromList].splice(fromCardIndex, 1);
    hello[boardName][toList].splice(toCardIndex, 0, moved);
  }
}


//createBoard('Alpha')
//createList('Alpha', 'Dance');

// removeCard('Tester Board', 'Doing', 1);
// displayBoard('Tester Board')
// moveCard('Tester Board', 'To Do', 'Doing', 1, 1);
// displayBoard('Tester Board');

//removeBoard("Tester Boardz");
