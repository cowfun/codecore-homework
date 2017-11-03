$(function (){

  const words = ['Smith', 'Johnson', 'Williams', 'Jones', 'Weston', ]
  let word = words[Math.floor(Math.random() * words.length)].toUpperCase();
  let mistake = 0;
  let maxMistake = 6;
  let arr = word.toUpperCase().split('')
  let newArr = [];

  for(let i = 65; i <= 90; i++){
    $('.alphabet').append($(`<div class = "individual">${String.fromCharCode(i)}</div>`));
  }

  for(let i = 0; i < arr.length; i++){
    $('.hidden-word').append($(`<div class = 'individual-boxes'> <div class = 'individual-words hidden'>${arr[i]}</div> </div>`))
  }

  $('.individual').on('mouseenter', event => {
    $(event.target).addClass('over')
  })

  $('.individual').on('mouseleave', event => {
    $(event.target).removeClass('over')
  })

  $('.individual').on('click', event => {
    const letter = event.target.innerHTML

    if($(event.target).hasClass('right') || $(event.target).hasClass('wrong')){
      console.log('Already Clicked Bitch')
    }

    else if (newArr.join() != arr.join()){
      if(arr.includes(letter)){
        $(event.target).addClass('right')
        for(let x = 0; x < arr.length; x++){
          if (arr[x] === letter){
            newArr[x] = letter
            $('.individual-words').each(function(index) {
              if($(this).text() === letter){
                $(this).removeClass('hidden')
              }
            })
            if(newArr.join() === arr.join()){
              $('.conclusion').append($(`<p> Congrats! You got the word! </p>`))
            }
          }
        }
      }

      else {
        $(event.target).addClass('wrong')
        mistake += 1;
        $('.picture').css('background-image',`url(assets/${mistake}.jpg)`);
        if(mistake === maxMistake){
          $('.conclusion').append($(`<p> You have failed! </p>`))
        }
      }
    }
  })

})
