const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
    },
    {
        name: 'mikshake',
        img: 'images/milkshake.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
    },
    {
        name: 'mikshake',
        img: 'images/milkshake.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random()) // Shortcut to shuffle a array randomly

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenIds = []
const cardsWon = []

function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/star.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenIds[0]
    const optionTwoId = cardsChoosenIds[1]
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/star.png')
        cards[optionTwoId].setAttribute('src', 'images/star.png')
        alert('You have clicked the same image!')
    }
    if (cardsChoosen[0] === cardsChoosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChoosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/star.png')
        cards[optionTwoId].setAttribute('src', 'images/star.png')
        alert('Sorry try again!')
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChoosen = []
    cardsChoosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you have found them all!'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)   
    if (cardsChoosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}