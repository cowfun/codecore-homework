function splitUp (arr, n){
  shuffle(arr)
  let results = [];
  let amount = arr.length;
  let newArr = arr;
  while(amount > 0){
    results.push(newArr.splice(0, n))
    amount -= n;
  }
  return results
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function splitUp(arr, n){
  shuffle(arr)
  let results = [];
  let newArr = arr;
}
