const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector("#grid")

let choosenCards = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        grid.append(card)
    }
}

createBoard()

function checkMatch(){

    if(choosenCards[0] !== choosenCards[1]){
        
       return true
    }
    
}

function flipCard() {
    let cardId = this.getAttribute("data-id")
    choosenCards.push(cardArray[cardId].name)
    this.setAttribute("src", cardArray[cardId].img)
    console.log(choosenCards.length)
    if(choosenCards.length === 2){
        setTimeout(checkMatch, 500)
        if( checkMatch()){
            card = document.FindByAttributeValue("data-id", cardId);
            console.log('hello') 
            this.setAttribute("src","images/blank.png")
        }

        choosenCards = []
    }

}