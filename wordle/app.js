const keyboard = document.querySelector('.key-container')
const tileDisplay = document.querySelector('.tile-container')

const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER',
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

let wordle = "CLASS"
let currentRow = 0
let currentTile = 0


keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => clickHandler(key))
    keyboard.append(buttonElement)
})

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



const clickHandler = (key) => {
    if (key === "ENTER") {
        if (currentTile === 5) {
            let myGuess = guessRows[currentRow].join("")

            if (wordle === myGuess) {
                console.log("correct")
            }
        }
    }
    else if (key === "«") {
        if (currentTile > 0) {
            currentTile--
            let tileLetter = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
            tileLetter.textContent = ''
            guessRows[currentRow][currentTile] = ''
            tileLetter.setAttribute("data", "")
        }
    } else {
        addLetter(key)
    }

}

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        let tileLetter = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tileLetter.textContent = letter
        tileLetter.setAttribute('data', letter)
        guessRows[currentRow][currentTile] = letter
        currentTile++
    } else {
        currentTile = 0
        currentRow++
    }
}
