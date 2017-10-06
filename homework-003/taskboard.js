class Task {
  constructor(task, name){
    this.task = task;
    this.name = name;
  }

  render(){
    if(this.name){
      return `${this.task} • ${this.name}`;
    }
    else {
      return `${this.task}`;
    }
  }
}

class List {
  constructor(list){
    this.list = list;
    this.arr = [];
  }

  addTask(task){
    this.arr.push(task);
    return this;
  }

  removeTask(job){
    for(let i = 0; i < this.arr.length; i++){
      if(this.arr[i].task === job){
        return this.arr.splice(i, 1)[0];
      }
    }
  }

  render(){
    let listing = [];
    listing.push(`|--------------\n| ${this.list}\n|--------------`)
    for(const items of this.arr){
      listing.push(`| ${this.arr.indexOf(items)}> ${items.render()}`)
    }
    return listing.join('\n')
  }
}

class Board{
  constructor(board){
    this.board = board;
    this.boardArr = [];
  }

  addList(list){
    this.boardArr.push(list);
    return this;
  }

  removeList(listName){
    for(let i = 0; i < this.boardArr.length; i++){
      if(this.boardArr[i].list === listName){
        return this.boardArr.splice(i,1)[0];
      }
    }
  }

  render(){
    let listing = [];
    listing.push(`************\n* ${this.board} *\n************`)
    for(const lists of this.boardArr){
      listing.push(lists.render())
    }
    return listing.join('\n');
  }

  moveTaskTo(task, fromListName, toListName){

    let fromList;
    let toList;
    let mover;

    for(const lists of this.boardArr){
      if(lists.list === fromListName){
        fromList = lists;
      } else if (lists.list === toListName){
        toList = lists;
      }
    }

    if(!fromList || !toList){
      console.log('Task does not exist')
    } else {
      toList.addTask(fromList.removeTask(task))
    }
    // SYNTAX SUGAR
    // return !fromList || !toList? 'task does not exist' :
    //   toList.addTask(fromList.removeTask(task))

  }
}

const toDoList = new List('To Do')
  .addTask(new Task('Laundry', 'You'))
  .addTask(new Task('Buy Apples'))
  .addTask(new Task('Pay Phone Bill', 'Me'));

const doingList = new List('Doing')
  .addTask(new Task('Laundry'))
  .addTask(new Task('Study JavaScript', 'Jill'))
  .addTask(new Task('Study HTML', 'Jill'))
  .addTask(new Task('Study Ruby', 'Me'));

const doneList = new List('Done')
  .addTask(new Task('Laundry'))
  .addTask(new Task('Ruby Exercises Homework'));

const myBoard = new Board('My Board')
  .addList(toDoList)
  .addList(doingList)
  .addList(doneList);

myBoard.moveTaskTo('Buy Apples', 'To Do', 'Doing')
console.log(myBoard.render())
