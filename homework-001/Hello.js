// **************************************************************************

// Calvin Hui | Assignment One

// **************************************************************************

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

// These booleans are used throughout the code in order to determine if the items exist.
let boardExist = false;
let listExist = false;
let cardExist = false;

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

  boardExist = false;

  for(let x in hello){
    if(boardName === x){
      boardExist = true;
    }
    else{
      hello[boardName] = boardName;
    }
  }
  if(boardExist){
    console.log(`Board ${boardName} already exist.`);
  }
  else{
    console.log(`Board ${boardName} was created.`);
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
  let display = false;
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
      display = true;
    }
  }
  if(display === false){
    console.log(`Sorry the board ${boardName} does not exist.`)
  }
}

// This function is used to create a new list
function createList(boardName, listName){

  boardExist = false;
  listExist = false;

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
      boardExist = true;
    }
  }
  if (boardExist && listExist){
    console.log('List already exist');
  }
  else if (boardExist){
    console.log('New list created');
  }
  else{
    console.log("Board does not exist.")
  }
}

// This function is used to create a new card
function createCard(boardName, listName, cardName){

  boardExist = false;
  listExist = false;

  for(let x in hello){
    if(boardName === x){
      for (let y in hello[x]){
        if(listName === y){

          hello[x][y].push(cardName);
          console.log(`Card '${cardName}' was created in this list, ${listName} in the board of ${boardName}.`);
          listExist = true;
        }
      }
      boardExist = true;
    }
  }

  if(boardExist === false){
    console.log("Board doesn't exist.");
  }

  else if(listExist === false){
    console.log("List doesn't exist.");
  }
}

// **************************************************************************
// The following codes are for the stretch goals component

// This function is used to remove list inside a board
function removeList(boardName, listName){

  boardExist = false;
  listExist = false;

  for(let x in hello){
    if(boardName === x){
      boardExist = true;
      for(let y in hello[x]){
        if(listName === y){
          listExist = true;
          delete(hello[x][y]);
        }
      }
    }
  }
  if(boardExist && listExist){
    console.log("List was removed.")
  }

  else if (boardExist){
    console.log("List doesn't exist.")
  }

  else {
    console.log("Board doesn't exist.")
  }
}

//This function is used to remove a card inside a specific list on the board
function removeCard(boardName, listName, cardIndex){

  boardExist = false;
  listExist = false;
  cardExist = false;

  for(let x in hello){
    if(boardName === x){
      boardExist = true;
      for(let y in hello[x]){
        if(listName === y){
          listExist = true;
          for(let z = 0; z < hello[x][y].length; z++){
            if(cardIndex === z){
              cardExist = true;
              hello[x][y].splice(z, 1);
            }
          }
        }
      }
    }
  }

  if(boardExist && listExist && cardExist){
    console.log("Card was successfully removed.")
  }
  else if(boardExist && listExist && cardExist === false){
    console.log("Card does not exist")
  }
  else if(boardExist && listExist === false){
    console.log("List does not exist")
  }
  else if(boardExist === false){
    console.log("Board does not exist")
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

// **************************************************************************
// The following are used to test the code
// listBoards(hello) // Run this to test if the listBoards function works.

// createBoard("Dodo") // Run this one to test creating a new board.
// createBoard("Tester Board") // Run this one to test what happens with an existing board.

// removeBoard("Tester Board") // Run this one to remove an existing board.
// removeBoard("Tester Boardz") // Run this one to test removing a board that doesn't exist.

// displayBoard('Tester Board') // Run this one to see an existing board get displayed.
// displayBoard('Weekend') // Run this one to see the error code as board cannot be found.

// createList('Tester Board', 'Weekend') // Run this one for a working function.
// createList('Tester Board', 'Done') // Run this one for an error due to existing list.
// createList('Tester Boardz', 'Weekend') // Run this one for an error due to non-existing board.

// createCard('Tester Board', 'Done', 'Weekend Plans') // Run this one for it to work correctly.
// createCard('Tester Board', 'Dones', 'Weekend Plans') // Run this one for a list which does not exist.
// createCard('Tester Boardz', 'Done', 'Weekend Plans') // Run this one for a board which does not exist.

// **************************************************************************
// The following are for the stretch components.
// removeList('Tester Board', 'Done') // Run this one to delete a list.
// removeList('Tester Board', 'Dones') // Run this one to for an error due to list not existing
// removeList('Tester Boardz', 'Dones') // Run this one to for an error due to board not existing

// removeCard('Tester Board', 'Done', 0) // Run this one to remove a card
// removeCard('Tester Board', 'Done', 1) // Run this one for an error due to card index not existing
// removeCard('Tester Board', 'Dones', 0) // Run this one for an error due to list not existing
// removeCard('Tester Boardz', 'Done', 0) // Run this one for an error due to board not existing

//moveCard('Tester Board', 'Doing', 'Done', 1, 1) // Run this one to move a card from one list to another.

// End of Page
