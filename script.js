//welcomeModal
const welcomeModal = document.getElementById("welcomeModal");
const startGameBtn = document.getElementById("startGameBtn"); 
const howToPlayBtn = document.getElementById("welcomeHowToPlayBtn")

function showWelcomeModal() {
    welcomeModal.style.display = "block";
}

startGameBtn.onclick = function() {
    welcomeModal.style.display = "none";
}

//howToPlayModal
const howToPlayModal = document.getElementById("howToPlayModal");
const howToPlayModalBtn = document.getElementById("howToPlayModalBtn");
const howToPlayModalSpan = document.getElementsByClassName("howToPlayClose")[0];

howToPlayBtn.onclick = function() {
    howToPlayModal.style.display = "block";
}

howToPlayModalBtn.onclick = function() {
    howToPlayModal.style.display = "block";
}

howToPlayModalSpan.onclick = function() {
    howToPlayModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == howToPlayModal) {
        howToPlayModal.style.display = "none";
    }
}

//winGame Modal
const winGameModal = document.getElementById("winGameModal");

function showWinGameModal() {
    winGameModal.style.display = "block";
}

//Width of grid
const gridWidth = 8;

//Grid Squares
const a1 = document.getElementById(1)
const b1 = document.getElementById(2)
const c1 = document.getElementById(3)
const d1 = document.getElementById(4)
const e1 = document.getElementById(5)
const f1 = document.getElementById(6)
const g1 = document.getElementById(7)
const h1 = document.getElementById(8)

const a2 = document.getElementById(9)
const b2 = document.getElementById(10)
const c2 = document.getElementById(11)
const d2 = document.getElementById(12)
const e2 = document.getElementById(13)
const f2 = document.getElementById(14)
const g2 = document.getElementById(15)
const h2 = document.getElementById(16)

const a3 = document.getElementById(17)
const b3 = document.getElementById(18)
const c3 = document.getElementById(19)
const d3 = document.getElementById(20)
const e3 = document.getElementById(21)
const f3 = document.getElementById(22)
const g3 = document.getElementById(23)
const h3 = document.getElementById(24)

const a4 = document.getElementById(25)
const b4 = document.getElementById(26)
const c4 = document.getElementById(27)
const d4 = document.getElementById(28)
const e4 = document.getElementById(29)
const f4 = document.getElementById(30)
const g4 = document.getElementById(31)
const h4 = document.getElementById(32)

const a5 = document.getElementById(33)
const b5 = document.getElementById(34)
const c5 = document.getElementById(35)
const d5 = document.getElementById(36)
const e5 = document.getElementById(37)
const f5 = document.getElementById(38)
const g5 = document.getElementById(39)
const h5 = document.getElementById(40)

const a6 = document.getElementById(41)
const b6 = document.getElementById(42)
const c6 = document.getElementById(43)
const d6 = document.getElementById(44)
const e6 = document.getElementById(45)
const f6 = document.getElementById(46)
const g6 = document.getElementById(47)
const h6 = document.getElementById(48)

const a7 = document.getElementById(49)
const b7 = document.getElementById(50)
const c7 = document.getElementById(51)
const d7 = document.getElementById(52)
const e7 = document.getElementById(53)
const f7 = document.getElementById(54)
const g7 = document.getElementById(55)
const h7 = document.getElementById(56)

const a8 = document.getElementById(57)
const b8 = document.getElementById(58)
const c8 = document.getElementById(59)
const d8 = document.getElementById(60)
const e8 = document.getElementById(61)
const f8 = document.getElementById(62)
const g8 = document.getElementById(63)
const h8 = document.getElementById(64)

const allSquares = [a1, b1, c1, d1, e1, f1, g1, h1, a2, b2, c2, d2, e2, f2, g2, h2,
    a3, b3, c3, d3, e3, f3, g3, h3, a4, b4, c4, d4, e4, f4, g4, h4,
    a5, b5, c5, d5, e5, f5, g5, h5, a6, b6, c6, d6, e6, f6, g6, h6,
    a7, b7, c7, d7, e7, f7, g7, h7, a8, b8, c8, d8, e8, f8, g8, h8 
];

//Treasures
class Treasure {
    constructor (name, length, location) {
        this.name = name
        this.length = length
        this.location = location
    }
}

const chest = new Treasure("chest", 2, [])
const umbrella = new Treasure("umbrella", 3, [])
const surfboard = new Treasure("surfboard", 4, [])

const treasures = [chest, umbrella, surfboard]

//Squares that are randomly selected and considered valid are added to this array so they are no longer in play
let takenSquares = []
    
//Gets a random square from the allSquares array 
function getRandomSquare(allSquares) {
    //get random index value from allSquares
    const randomIndex = Math.floor(Math.random() * allSquares.length);
    //get random square, based on the random index value
    const randomSquare = allSquares[randomIndex];
    return randomSquare
}

//Selects the starting square, and subsequent square(s) of each treasure
function addTreasurePiece(Treasure) {
    allSquares
    //Sets a 50% chance of the treasure being horizontally arranged
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = randomBoolean
    //The randomly selected starting square
    let randomStart = getRandomSquare(allSquares)
    //The index value of the randomly selected starting square
    let randomStartIndex = allSquares.indexOf(randomStart)
    
    //Determines if the starting square is valid, based on the amount of available room on the grid for the length of the treasure, and orientation.
        //If the treasure is horizontal, and the starting square is less than/equal to the number of squares in the grid minus the length of the treasure, return the starting square
        //otherwise, make the starting square the number of squares in the grid minus the ship length. (I.E. If the random starting square is 99 and the treasure is the surfboard, make the starting square 97.) 
            //If the treasure is vertical, and the starting square is less than/equal to the number of squares on the grid, minus the grid width multiplied by the length of the treasure, return the starting square,
            //otherwise, make the starting square the random start index minus the treasure length, multiplied by the width of the grid plus the width of the grid (last available square)
    let validStart = isHorizontal ? (randomStartIndex <= gridWidth * gridWidth - Treasure.length ? randomStartIndex :
        gridWidth * gridWidth - Treasure.length) :
        randomStartIndex <= gridWidth * gridWidth - gridWidth * Treasure.length ? randomStartIndex :
            randomStartIndex - Treasure.length * gridWidth + gridWidth
    
    
    let treasureSquares = []

    //If the treasure is horizontal, push it to the treasureSquares array, and repeat this function for the next square on the grid, until the length of the treasure is complete.
    //If the treasure is vertical, push it to the treasureSquares array, and repeat this function for the next square on the grid, plus one row, until the length of the treasure is complete.
    for (let i = 0; i < Treasure.length; i++) {
        if (isHorizontal) {
            treasureSquares.push(allSquares[Number(validStart) + i])
        } else {
            treasureSquares.push(allSquares[Number(validStart) + i * gridWidth])
        }
    }

    
    //Valid means that the selected starting square of a horizontally-oriented treasure fulfills the following requirements:
        //the modulus of the square ID and the grid width cannot be 0 (an object cannot start at the end of a row),
        //AND the modulus of the square ID and the grid width must be less than OR equal to the grid width minus (the length of the treasure minus (the square's index + 1))
        //(there must be enough room in a row for the treasure to fit)
    let valid
    if (isHorizontal) {
        treasureSquares.every((_treasureSquare, index) => 
        valid = treasureSquares[0].id % gridWidth !== 0 && treasureSquares[0].id % gridWidth <= gridWidth - (treasureSquares.length - (index + 1)))       
    //A vertically-oriented treasure cannot start on the last row.
    } else {
        treasureSquares.every((_treasureSquare, index) =>
            valid = treasureSquares[0].id < 56 + (gridWidth * index + 1)
        )
    }

    //A treasure square is available (not taken) if it is not included in the takenSquares array
    const notTaken = treasureSquares.every(treasureSquare => !takenSquares.includes(treasureSquare))

    //If the starting square is valid and not taken, push it to the Treasure object's location array, and the takenSquares array.
    //Otherwise, call the addTreasurePiece function
    if (valid && notTaken) {
        treasureSquares.forEach(treasureSquare => {
            Treasure.location.push(treasureSquare)
            takenSquares.push(treasureSquare)
        })
    } else {
        addTreasurePiece(Treasure)
    }  

}

//For each treasure in the Treasure class, cmplete the addTreasurePiece function
treasures.forEach(Treasure => addTreasurePiece(Treasure));

console.log(chest.location)
console.log(umbrella.location)
console.log(surfboard.location)

//Counters for turns, total hits, and specific treasure hits
let turnCount = 0;
let hitCount = 0;
let smallTreasureHits = 0;
let mediumTreasureHits = 0;
let largeTreasureHits = 0;

//Counter for remaining turns
let remainingTurns = document.getElementById("turnCounter")
let remainingTurnsCount = 24;

(function() {
    
}

)

//Images of hidden treasures, indicating size and shape of object
let smallTreasurePic = document.getElementById("picitem1")
let mediumTreasurePic = document.getElementById("picitem2")
let largeTreasurePic = document.getElementById("picitem3")

//Functions which change hidden treasure images to images of actual treasure 
//(currently using green squares as placeholder)
function foundSmallTreasure()   {
    smallTreasurePic.src = "images/greenSquares2.png";
};

function foundMediumTreasure()   {
    mediumTreasurePic.src = "images/greenSquares3.png";
};

function foundLargeTreasure()   {
    largeTreasurePic.src = "images/greenSquares4.png";
};


//Main function for confirming if a clicked square contains treasure, 
//and sub-functions for confirming the same criteria with a specific treasure.
function onClick(thisSquare) {
    if(takenSquares.includes(thisSquare))   {
       thisSquare.style.backgroundColor= "#DF2C14";
       turnCount = turnCount+1;
       hitCount = hitCount+1;    
    }   else    {
        thisSquare.style.backgroundColor= "#3CDFFF";
        turnCount = turnCount+1;
    }

    if(chest.location.includes(thisSquare))  {
        smallTreasureHits = smallTreasureHits+1;
        if(smallTreasureHits == 2)  {
            chest.location[0].style.backgroundColor="#FFFF00";
            chest.location[1].style.backgroundColor="#FFFF00";
            alert("You found the small treasure!");
            foundSmallTreasure();
        }
    }
    if(umbrella.location.includes(thisSquare))  {
        mediumTreasureHits = mediumTreasureHits+1;
        if(mediumTreasureHits == 3)  {
            umbrella.location[0].style.backgroundColor="#FC6600";
            umbrella.location[1].style.backgroundColor="#FC6600";
            umbrella.location[2].style.backgroundColor="#FC6600";
            alert("You found the medium treasure!");
            foundMediumTreasure();
        }
    }
    if(surfboard.location.includes(thisSquare))  {
        largeTreasureHits = largeTreasureHits+1;
        if(largeTreasureHits == 4)  {
            surfboard.location[0].style.backgroundColor="#03AC13";
            surfboard.location[1].style.backgroundColor="#03AC13";
            surfboard.location[2].style.backgroundColor="#03AC13";
            surfboard.location[3].style.backgroundColor="#03AC13";
            alert("You found the large treasure!");
            foundLargeTreasure();
        }
    }

    if(hitCount == 9) {
        showWinGameModal();
    }

    if(turnCount == 24 && hitCount < 9) {
        alert("Game Over");
        chest.location[0].style.backgroundColor="#FFFF00";
            chest.location[1].style.backgroundColor="#FFFF00";
            umbrella.location[0].style.backgroundColor="#FC6600";
            umbrella.location[1].style.backgroundColor="#FC6600";
            umbrella.location[2].style.backgroundColor="#FC6600";
            surfboard.location[0].style.backgroundColor="#03AC13";
            surfboard.location[1].style.backgroundColor="#03AC13";
            surfboard.location[2].style.backgroundColor="#03AC13";
            surfboard.location[3].style.backgroundColor="#03AC13";
    }
    
}

//First EL activates main function for confirming if treasure is present
//Second EL reduces the remaining turns counter by increment of 1
//Each EL can only fire one time
a1.addEventListener("click", () => onClick(a1), {once : true});
a1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
b1.addEventListener("click", () => onClick(b1), {once : true});
b1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
c1.addEventListener("click", () => onClick(c1), {once : true});
c1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
d1.addEventListener("click", () => onClick(d1), {once : true});
d1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
e1.addEventListener("click", () => onClick(e1), {once : true});
e1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
f1.addEventListener("click", () => onClick(f1), {once : true});
f1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
g1.addEventListener("click", () => onClick(g1), {once : true});
g1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
h1.addEventListener("click", () => onClick(h1), {once : true});
h1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});

a2.addEventListener("click", () => onClick(a2), {once : true});
a2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
b2.addEventListener("click", () => onClick(b2), {once : true});
b2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
c2.addEventListener("click", () => onClick(c2), {once : true});
c2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
d2.addEventListener("click", () => onClick(d2), {once : true});
d2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
e2.addEventListener("click", () => onClick(e2), {once : true});
e2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
f2.addEventListener("click", () => onClick(f2), {once : true});
f2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
g2.addEventListener("click", () => onClick(g2), {once : true});
g2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
h2.addEventListener("click", () => onClick(h2), {once : true});
h2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});

a3.addEventListener("click", () => onClick(a3), {once : true});
a3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
b3.addEventListener("click", () => onClick(b3), {once : true});
b3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
c3.addEventListener("click", () => onClick(c3), {once : true});
c3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
d3.addEventListener("click", () => onClick(d3), {once : true});
d3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
e3.addEventListener("click", () => onClick(e3), {once : true});
e3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
f3.addEventListener("click", () => onClick(f3), {once : true});
f3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
g3.addEventListener("click", () => onClick(g3), {once : true});
g3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
h3.addEventListener("click", () => onClick(h3), {once : true});
h3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});

a4.addEventListener("click", () => onClick(a4), {once : true});
a4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
b4.addEventListener("click", () => onClick(b4), {once : true});
b4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
c4.addEventListener("click", () => onClick(c4), {once : true});
c4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
d4.addEventListener("click", () => onClick(d4), {once : true});
d4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
e4.addEventListener("click", () => onClick(e4), {once : true});
e4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
f4.addEventListener("click", () => onClick(f4), {once : true});
f4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
g4.addEventListener("click", () => onClick(g4), {once : true});
g4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
h4.addEventListener("click", () => onClick(h4), {once : true});
h4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});

a5.addEventListener("click", () => onClick(a5), {once : true});
a5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
b5.addEventListener("click", () => onClick(b5), {once : true});
b5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
c5.addEventListener("click", () => onClick(c5), {once : true});
c5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
d5.addEventListener("click", () => onClick(d5), {once : true});
d5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
e5.addEventListener("click", () => onClick(e5), {once : true});
e5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
f5.addEventListener("click", () => onClick(f5), {once : true});
f5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
g5.addEventListener("click", () => onClick(g5), {once : true});
g5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
h5.addEventListener("click", () => onClick(h5), {once : true});
h5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});

a6.addEventListener("click", () => onClick(a6), {once : true});
a6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
b6.addEventListener("click", () => onClick(b6), {once : true});
b6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
c6.addEventListener("click", () => onClick(c6), {once : true});
c6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
d6.addEventListener("click", () => onClick(d6), {once : true});
d6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
e6.addEventListener("click", () => onClick(e6), {once : true});
e6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
f6.addEventListener("click", () => onClick(f6), {once : true});
f6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
g6.addEventListener("click", () => onClick(g6), {once : true});
g6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
h6.addEventListener("click", () => onClick(h6), {once : true});
h6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});

a7.addEventListener("click", () => onClick(a7), {once : true});
a7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
b7.addEventListener("click", () => onClick(b7), {once : true});
b7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
c7.addEventListener("click", () => onClick(c7), {once : true});
c7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
d7.addEventListener("click", () => onClick(d7), {once : true});
d7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
e7.addEventListener("click", () => onClick(e7), {once : true});
e7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
f7.addEventListener("click", () => onClick(f7), {once : true});
f7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount}, {once : true});
g7.addEventListener("click", () => onClick(g7), {once : true});
g7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
h7.addEventListener("click", () => onClick(h7), {once : true});
h7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});

a8.addEventListener("click", () => onClick(a8), {once : true});
a8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
b8.addEventListener("click", () => onClick(b8), {once : true});
b8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
c8.addEventListener("click", () => onClick(c8), {once : true});
c8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
d8.addEventListener("click", () => onClick(d8), {once : true});
d8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
e8.addEventListener("click", () => onClick(e8), {once : true});
e8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
f8.addEventListener("click", () => onClick(f8), {once : true});
f8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
g8.addEventListener("click", () => onClick(g8), {once : true});
g8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});
h8.addEventListener("click", () => onClick(h8), {once : true});
h8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;}, {once : true});