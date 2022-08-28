const sqrs = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const time = document.querySelector('#time-left')
const score = document.querySelector('#score')

let res = 0

function randomSeq(){
    sqrs.forEach(sqr => {
        sqr.classList.remove('mole')
    })

    let randSeq = sqrs[Math.floor(Math.random()*9)]
    randSeq.classList.add('mole')
}


randomSeq()