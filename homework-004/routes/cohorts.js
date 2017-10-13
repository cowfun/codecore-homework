const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const kx = require('../db/connection');

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')})

router.get('/', function (request, response) {
  kx
    .select()
    .from("teams")
    .then((teams)=>{
      response.render('cohorts/index',{teams})
    });
})

router.post('/', upload.single('photo'), function (request, response) {
  const {body} = request;
  const {title} = request.body;
  const {members} = request.body;
  const {filename} = request.file;
  kx
    .insert({title, members, photo_path: `/uploads/${filename}`})
    .into("teams")
    .then((teams)=>{
      console.log(teams)
      response.redirect('/cohorts')
  });
});

router.get('/new', function (request, response) {
  response.render('cohorts/new')
});

router.get('/:id', (request, response) => {
  const {id} = request.params
  const split = request.query;
  console.log(split.teamsplitter);
  console.log(split.amount);

  kx
    .first()
    .from('teams')
    .where({id}) // <- syntax sugar for {id: id}
    .then(teams => {
      if(split.teamsplitter === 'option1'){
        const group = (splitUp((teams.members).split(','), split.amount))
        console.log(group)
        response.render('cohorts/show', {teams, group})
      }
      else if(split.teamsplitter === 'option2'){
        const group = (splitPer((teams.members).split(','), split.amount))
        console.log(group)
        response.render('cohorts/show', {teams, group})
      } else {
        const group = null
        console.log(group)
        response.render('cohorts/show', {teams, group})
      }
    })
})

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function splitUp(arr, n) {
	shuffle(arr)
    let rest = arr.length % n,
        restUsed = rest,
        partLength = Math.floor(arr.length / n),
        result = [];

    for(let i = 0; i < arr.length; i += partLength) {
        let end = partLength + i,
            add = false;

        if(rest !== 0 && restUsed) {
            end++;
            restUsed--;
            add = true;
        }

        result.push(arr.slice(i, end));

        if(add) {
            i++;
        }
      }
      return result;
    }

function splitPer (arr, n){
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

module.exports = router;
