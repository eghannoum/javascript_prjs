const keyboard = document.querySelector('.key-container')
const tileDisplay = document.querySelector('.tile-container')

const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
    'A','S','D','F','G','H','J','K','L','ENTER',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', '«',
]
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]


let currentRow = 0
let currentTile = 0




keys.forEach(key => {
   const buttonElement =  document.createElement('button')
   buttonElement.textContent = key
   buttonElement.setAttribute('id', key)
   buttonElement.addEventListener('click', () => clickHandler(key))
   keyboard.append(buttonElement)
})


const clickHandler = (key) => {
    console.log(key)
    addLetter(key)
}

const addLetter = (letter) => {
    let tileLetter = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tileLetter.textContent = letter
    tileLetter.setAttribute('data', letter)
    guessRows[currentRow][currentTile] = letter
    currentTile++
}


guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((_guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})