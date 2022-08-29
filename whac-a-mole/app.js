const sqrs = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const time = document.querySelector('#time-left')
const score = document.querySelector('#score')

let res = 0
let courentTime = 60
let selectedPos
function randomSeq(){
    sqrs.forEach(sqr => {
        sqr.classList.remove('mole')
    })

    let randSeq = sqrs[Math.floor(Math.random()*9)]
    randSeq.classList.add('mole')

    selectedPos = randSeq.id
}

sqrs.forEach(seq => {

    seq.addEventListener('mousedown', () => {
        if (seq.id == selectedPos){
            res++
            score.innerHTML = res
        }
        selectedPos = null
        randomSeq()
    })
})


function countDown(){
    courentTime--
    time.innerHTML = courentTime
    if(courentTime == 0){
        clearInterval(countDownTimer)
        sqrs.forEach(seq => {
            seq.removeEventListener('mousedown')
        })

    }
}

let countDownTimer = setInterval(countDown, 1000)