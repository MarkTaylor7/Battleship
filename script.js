//When the user clicks the first square, this turns to true. Used to prevent user from clicking on a mine at start of game.
let gameStart = false;
let mineExploded = false;

//Counters for turns, total hits, and specific treasure hits
let turnCount = 0;
let hitCount = 0;
let allTreasuresFound = false;
let smallTreasureHits = 0;
let mediumTreasureHits = 0;
let largeTreasureHits = 0;

//Counter for remaining turns
let remainingTurns = document.getElementById("turnCounter")
let remainingTurnsCount = 25;

//Images of hidden treasures, hinting at lengths of treasures
let smallTreasurePic = document.getElementById("picitem1")
let mediumTreasurePic = document.getElementById("picitem2")
let largeTreasurePic = document.getElementById("picitem3")

//welcomeModal
const easyModeBtn = document.getElementById("easyModeBtn");
const normalModeBtn = document.getElementById("normalModeBtn");
const hardModeBtn = document.getElementById("hardModeBtn");
const minesSwitch = document.getElementById("minesSwitch");
const howToPlayBtn = document.getElementById("welcomeHowToPlayBtn");

const modals = document.getElementsByClassName("modal");

const activateMinesSound = document.getElementById("activateMinesSound");
minesSwitch.addEventListener("click", function(){activateMinesSound.play();});

const findTreasure1Sound = document.getElementById("findTreasure1Sound");
const findTreasure2Sound = document.getElementById("findTreasure2Sound");
const findTreasure3Sound = document.getElementById("findTreasure3Sound");
const digHole1Sound = document.getElementById("digHole1Sound");
const digHole2Sound = document.getElementById("digHole2Sound");
const digHole3Sound = document.getElementById("digHole3Sound");
const digHole4Sound = document.getElementById("digHole4Sound");
const digHoleSounds = [digHole1Sound, digHole2Sound, digHole3Sound, digHole4Sound];
let randomDigSound = digHoleSounds[Math.floor(Math.random() * digHoleSounds.length)];

function showWelcomeModal() {
    modals[0].style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
}

function hideWelcomeModal() {
    modals[0].style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
}

easyModeBtn.onclick = function() {
    hideWelcomeModal();
    document.getElementById("turnCounter").innerHTML = "30";
    remainingTurnsCount = 30;
    turnCount = -5;
}

normalModeBtn.onclick = function() {
    hideWelcomeModal();
    document.getElementById("turnCounter").innerHTML = "25";
    remainingTurnsCount = 25;
}

hardModeBtn.onclick = function() {
    hideWelcomeModal();
    document.getElementById("turnCounter").innerHTML = "20";
    remainingTurnsCount = 20;
    turnCount = 5;
}



//howToPlayModal
const howToPlayModalBtn = document.getElementById("howToPlayModalBtn");
const howToPlayModalSpan = document.getElementsByClassName("howToPlayClose")[0];

howToPlayBtn.onclick = function() {
    modals[1].style.display = "block";
}

howToPlayModalBtn.onclick = function() {
    modals[1].style.display = "block";
}

howToPlayModalSpan.onclick = function() {
    modals[1].style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modals[1]) {
        modals[1].style.display = "none";
    }
}

let timeout;

function winGameTimeout() {
    timeout = setTimeout(showWinGameModal, 1000);
}

function showWinGameModal() {
    modals[2].style.display = "block";
}

function revealTreasuresAndMinesTimeout() {
    timeout = setTimeout(revealTreasuresAndMines, 1500);
}

function revealTreasuresAndMines() {
    chest.location[0].style.background = "url('images/closedTreasureChest.png') no-repeat";
    chest.location[0].style.backgroundSize = "cover";
    chest.location[0].style.backgroundPosition = "center";
    chest.location[0].style.color="transparent";
    chest.location[1].style.background = "url('images/closedTreasureChest.png') no-repeat";
    chest.location[1].style.backgroundSize = "cover";
    chest.location[1].style.backgroundPosition = "center";
    chest.location[1].style.color="transparent";
    golfClubs.location[0].style.background = "url('images/closedTreasureChest.png') no-repeat";
    golfClubs.location[0].style.backgroundSize = "cover";
    golfClubs.location[0].style.backgroundPosition = "center";
    golfClubs.location[0].style.color="transparent";
    golfClubs.location[1].style.background = "url('images/closedTreasureChest.png') no-repeat";
    golfClubs.location[1].style.backgroundSize = "cover";
    golfClubs.location[1].style.backgroundPosition = "center";
    golfClubs.location[1].style.color="transparent";
    golfClubs.location[2].style.background = "url('images/closedTreasureChest.png') no-repeat";
    golfClubs.location[2].style.backgroundSize = "cover";
    golfClubs.location[2].style.backgroundPosition = "center";
    golfClubs.location[2].style.color="transparent";
    surfboard.location[0].style.background = "url('images/closedTreasureChest.png') no-repeat";
    surfboard.location[0].style.backgroundSize = "cover";
    surfboard.location[0].style.backgroundPosition = "center";
    surfboard.location[0].style.color="transparent";
    surfboard.location[1].style.background = "url('images/closedTreasureChest.png') no-repeat";
    surfboard.location[1].style.backgroundSize = "cover";
    surfboard.location[1].style.backgroundPosition = "center";
    surfboard.location[1].style.color="transparent";
    surfboard.location[2].style.background = "url('images/closedTreasureChest.png') no-repeat";
    surfboard.location[2].style.backgroundSize = "cover";
    surfboard.location[2].style.backgroundPosition = "center";
    surfboard.location[2].style.color="transparent";
    surfboard.location[3].style.background = "url('images/closedTreasureChest.png') no-repeat";
    surfboard.location[3].style.backgroundSize = "cover";
    surfboard.location[3].style.backgroundPosition = "center";
    surfboard.location[3].style.color="transparent";
    
        if (enableMines.checked == true) {
            mineLocations[0].style.background = "url('images/mine2.png') no-repeat";
            mineLocations[0].style.backgroundSize = "cover";
            mineLocations[0].style.backgroundPosition = "center";
            mineLocations[0].style.color = "transparent";
            mineLocations[1].style.background = "url('images/mine2.png') no-repeat";
            mineLocations[1].style.backgroundSize = "cover";
            mineLocations[1].style.backgroundPosition = "center";
            mineLocations[1].style.color = "transparent";
            mineLocations[2].style.background = "url('images/mine2.png') no-repeat";
            mineLocations[2].style.backgroundSize = "cover";
            mineLocations[2].style.backgroundPosition = "center";
            mineLocations[2].style.color = "transparent";
            mineLocations[3].style.background = "url('images/mine2.png') no-repeat";
            mineLocations[3].style.backgroundSize = "cover";
            mineLocations[3].style.backgroundPosition = "center";
            mineLocations[3].style.color = "transparent";
        }
}

function gameOverTimeout() {
    timeout = setTimeout(showGameOverModal, 1000);
}

function showGameOverModal() {
    modals[3].style.display = "block";
    
}

function gameOverMineTimeout() {
    timeout = setTimeout(showGameOverMineModal, 1000);
}

function showGameOverMineModal() {
    modals[4].style.display = "block";
    
}

function playAgainPromptTimeout() {
    timeout = setTimeout(playAgainPrompt, 3000);
}

function playAgainPrompt() {
    // Get the snackbar DIV
    var x = document.getElementById("playAgainPopUp");
    // Add the "show" class to DIV
    x.className = "show";
}

const winPlayAgainBtn = document.getElementById("winPlayAgain");
winPlayAgainBtn.onclick = function resetGame() {
    location.replace(location.href);
}
const losePlayAgainBtn = document.getElementById("losePlayAgain");
losePlayAgainBtn.onclick = function resetGame() {
    location.replace(location.href);  
}

const losePlayAgainMineBtn = document.getElementById("losePlayAgainMine");
losePlayAgainMineBtn.onclick = function resetGame() {
    location.replace(location.href);  
}

const showSolutionBtnAfterWin = document.getElementById("revealObjectsAfterWin");
showSolutionBtnAfterWin.onclick = function () {
    modals[2].style.display = "none";
    revealTreasuresAndMinesTimeout();
    playAgainPromptTimeout();
    }

const showSolutionBtn = document.getElementById("revealObjects");
showSolutionBtn.onclick = function () {
    modals[3].style.display = "none";
    revealTreasuresAndMinesTimeout();
    playAgainPromptTimeout();
    }

const showSolutionBtnMine = document.getElementById("revealObjectsMine");
showSolutionBtnMine.onclick = function () {
    modals[4].style.display = "none";
    revealTreasuresAndMinesTimeout();
    playAgainPromptTimeout();
    }

const popupPlayAgainBtn = document.getElementById("popupPlayAgainBtn");
popupPlayAgainBtn.onclick = function resetGame() {
    location.replace(location.href);  
}

//Width of grid
const gridWidth = 8;

//Grid Squares
const a1 = document.getElementById(1)
a1["mineCount"] = 0
const b1 = document.getElementById(2)
b1["mineCount"] = 0
const c1 = document.getElementById(3)
c1["mineCount"] = 0
const d1 = document.getElementById(4)
d1["mineCount"] = 0
const e1 = document.getElementById(5)
e1["mineCount"] = 0
const f1 = document.getElementById(6)
f1["mineCount"] = 0
const g1 = document.getElementById(7)
g1["mineCount"] = 0
const h1 = document.getElementById(8)
h1["mineCount"] = 0

const a2 = document.getElementById(9)
a2["mineCount"] = 0
const b2 = document.getElementById(10)
b2["mineCount"] = 0
const c2 = document.getElementById(11)
c2["mineCount"] = 0
const d2 = document.getElementById(12)
d2["mineCount"] = 0
const e2 = document.getElementById(13)
e2["mineCount"] = 0
const f2 = document.getElementById(14)
f2["mineCount"] = 0
const g2 = document.getElementById(15)
g2["mineCount"] = 0
const h2 = document.getElementById(16)
h2["mineCount"] = 0

const a3 = document.getElementById(17)
a3["mineCount"] = 0
const b3 = document.getElementById(18)
b3["mineCount"] = 0
const c3 = document.getElementById(19)
c3["mineCount"] = 0
const d3 = document.getElementById(20)
d3["mineCount"] = 0
const e3 = document.getElementById(21)
e3["mineCount"] = 0
const f3 = document.getElementById(22)
f3["mineCount"] = 0
const g3 = document.getElementById(23)
g3["mineCount"] = 0
const h3 = document.getElementById(24)
h3["mineCount"] = 0

const a4 = document.getElementById(25)
a4["mineCount"] = 0
const b4 = document.getElementById(26)
b4["mineCount"] = 0
const c4 = document.getElementById(27)
c4["mineCount"] = 0
const d4 = document.getElementById(28)
d4["mineCount"] = 0
const e4 = document.getElementById(29)
e4["mineCount"] = 0
const f4 = document.getElementById(30)
f4["mineCount"] = 0
const g4 = document.getElementById(31)
g4["mineCount"] = 0
const h4 = document.getElementById(32)
h4["mineCount"] = 0

const a5 = document.getElementById(33)
a5["mineCount"] = 0
const b5 = document.getElementById(34)
b5["mineCount"] = 0
const c5 = document.getElementById(35)
c5["mineCount"] = 0
const d5 = document.getElementById(36)
d5["mineCount"] = 0
const e5 = document.getElementById(37)
e5["mineCount"] = 0
const f5 = document.getElementById(38)
f5["mineCount"] = 0
const g5 = document.getElementById(39)
g5["mineCount"] = 0
const h5 = document.getElementById(40)
h5["mineCount"] = 0

const a6 = document.getElementById(41)
a6["mineCount"] = 0
const b6 = document.getElementById(42)
b6["mineCount"] = 0
const c6 = document.getElementById(43)
c6["mineCount"] = 0
const d6 = document.getElementById(44)
d6["mineCount"] = 0
const e6 = document.getElementById(45)
e6["mineCount"] = 0
const f6 = document.getElementById(46)
f6["mineCount"] = 0
const g6 = document.getElementById(47)
g6["mineCount"] = 0
const h6 = document.getElementById(48)
h6["mineCount"] = 0

const a7 = document.getElementById(49)
a7["mineCount"] = 0
const b7 = document.getElementById(50)
b7["mineCount"] = 0
const c7 = document.getElementById(51)
c7["mineCount"] = 0
const d7 = document.getElementById(52)
d7["mineCount"] = 0
const e7 = document.getElementById(53)
e7["mineCount"] = 0
const f7 = document.getElementById(54)
f7["mineCount"] = 0
const g7 = document.getElementById(55)
g7["mineCount"] = 0
const h7 = document.getElementById(56)
h7["mineCount"] = 0

const a8 = document.getElementById(57)
a8["mineCount"] = 0
const b8 = document.getElementById(58)
b8["mineCount"] = 0
const c8 = document.getElementById(59)
c8["mineCount"] = 0
const d8 = document.getElementById(60)
d8["mineCount"] = 0
const e8 = document.getElementById(61)
e8["mineCount"] = 0
const f8 = document.getElementById(62)
f8["mineCount"] = 0
const g8 = document.getElementById(63)
g8["mineCount"] = 0
const h8 = document.getElementById(64)
h8["mineCount"] = 0

const allSquares = [a1, b1, c1, d1, e1, f1, g1, h1, a2, b2, c2, d2, e2, f2, g2, h2,
    a3, b3, c3, d3, e3, f3, g3, h3, a4, b4, c4, d4, e4, f4, g4, h4,
    a5, b5, c5, d5, e5, f5, g5, h5, a6, b6, c6, d6, e6, f6, g6, h6,
    a7, b7, c7, d7, e7, f7, g7, h7, a8, b8, c8, d8, e8, f8, g8, h8 
];

const column1 = [a1, a2, a3, a4, a5, a6, a7, a8]
const column8 = [h1, h2, h3, h4, h5, h6, h7, h8]

//Treasures
class Treasure {
    constructor (name, length, location) {
        this.name = name
        this.length = length
        this.location = location
    }
}

const chest = new Treasure("chest", 2, [])
const golfClubs = new Treasure("golfClubs", 3, [])
const surfboard = new Treasure("surfboard", 4, [])

const treasures = [chest, golfClubs, surfboard]


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

//For each treasure in the Treasure class, call the addTreasurePiece function
treasures.forEach(Treasure => addTreasurePiece(Treasure));


//Mines
//If a square is near a mine, it will appear in a closeToMine array:
let closeToMine1 = [];
let closeToMine2 = [];
let closeToMine3 = [];
let closeToMine4 = [];

let firstSquareSelected = [];

//Places Mines in random locations, which will result in "Game Over" if user clicks on one
const enableMines = document.getElementById("mineToggle");
let validMineLocations = allSquares.filter(x => !takenSquares.includes(x), x => !firstSquareSelected.includes(x));

const shuffledMineLocations = validMineLocations.sort(() => 0.5 - Math.random());
let mineLocations = shuffledMineLocations.slice(0, 4);


//Determines if a Square is near a mine
rightOfMine1 = allSquares.find(element => Number(element.id) > Number(mineLocations[0].id));
    if (!column1.includes(rightOfMine1)) {
        closeToMine1.push(rightOfMine1)
    }

rightOfMine2 = allSquares.find(element => Number(element.id) > Number(mineLocations[1].id));
    if (!column1.includes(rightOfMine2)) {
        closeToMine2.push(rightOfMine2)
    }

rightOfMine3 = allSquares.find(element => Number(element.id) > Number(mineLocations[2].id));
    if (!column1.includes(rightOfMine3)) {
        closeToMine3.push(rightOfMine3)
    }

rightOfMine4 = allSquares.find(element => Number(element.id) > Number(mineLocations[3].id));
    if (!column1.includes(rightOfMine4)) {
        closeToMine4.push(rightOfMine4)
    }
 
leftOfMine1 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[0].id));
    if (!column8.includes(leftOfMine1)) {
        closeToMine1.push(leftOfMine1)
    }

leftOfMine2 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[1].id));
    if (!column8.includes(leftOfMine2)) {
        closeToMine2.push(leftOfMine2)
    }

leftOfMine3 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[2].id));
    if (!column8.includes(leftOfMine3)) {
        closeToMine3.push(leftOfMine3)
    }

leftOfMine4 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[3].id));
    if (!column8.includes(leftOfMine4)) {
        closeToMine4.push(leftOfMine4)
    }

aboveMine1 = allSquares.find(element => Number(element.id) + gridWidth == Number(mineLocations[0].id));
    closeToMine1.push(aboveMine1);

aboveMine2 = allSquares.find(element => Number(element.id) + gridWidth == Number(mineLocations[1].id));
    closeToMine2.push(aboveMine2);

aboveMine3 = allSquares.find(element => Number(element.id) + gridWidth == Number(mineLocations[2].id));
    closeToMine3.push(aboveMine3);

aboveMine4 = allSquares.find(element => Number(element.id) + gridWidth == Number(mineLocations[3].id));
    closeToMine4.push(aboveMine4);

belowMine1 = allSquares.find(element => Number(element.id) - gridWidth == Number(mineLocations[0].id));
    closeToMine1.push(belowMine1);

belowMine2 = allSquares.find(element => Number(element.id) - gridWidth == Number(mineLocations[1].id));
    closeToMine2.push(belowMine2);

belowMine3 = allSquares.find(element => Number(element.id) - gridWidth == Number(mineLocations[2].id));
    closeToMine3.push(belowMine3);

belowMine4 = allSquares.find(element => Number(element.id) - gridWidth == Number(mineLocations[3].id));
    closeToMine4.push(belowMine4);

upperRightMine1 = allSquares.find(element => Number(element.id) > Number(mineLocations[0].id) - gridWidth);
    if(!column1.includes(upperRightMine1)) {
        closeToMine1.push(upperRightMine1)
    }

upperRightMine2 = allSquares.find(element => Number(element.id) > Number(mineLocations[1].id) - gridWidth);
    if(!column1.includes(upperRightMine2)) {
        closeToMine2.push(upperRightMine2)
    }

upperRightMine3 = allSquares.find(element => Number(element.id) > Number(mineLocations[2].id) - gridWidth);
    if(!column1.includes(upperRightMine3)) {
        closeToMine3.push(upperRightMine3)
    }

upperRightMine4 = allSquares.find(element => Number(element.id) > Number(mineLocations[3].id) - gridWidth);
    if(!column1.includes(upperRightMine4)) {
        closeToMine4.push(upperRightMine4)
    }

lowerRightMine1 = allSquares.find(element => Number(element.id) > Number(mineLocations[0].id) + gridWidth);
    if(!column1.includes(lowerRightMine1)) {
        closeToMine1.push(lowerRightMine1)
    }

lowerRightMine2 = allSquares.find(element => Number(element.id) > Number(mineLocations[1].id) + gridWidth);
    if(!column1.includes(lowerRightMine2)) {
        closeToMine2.push(lowerRightMine2)
    }

lowerRightMine3 = allSquares.find(element => Number(element.id) > Number(mineLocations[2].id) + gridWidth);
    if(!column1.includes(lowerRightMine3)) {
        closeToMine3.push(lowerRightMine3)
    }

lowerRightMine4 = allSquares.find(element => Number(element.id) > Number(mineLocations[3].id) + gridWidth);
    if(!column1.includes(lowerRightMine4)) {
        closeToMine4.push(lowerRightMine4)
    }

upperLeftMine1 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[0].id) - gridWidth);
if (!column8.includes(upperLeftMine1)) {
    closeToMine1.push(upperLeftMine1)
    }

upperLeftMine2 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[1].id) - gridWidth);
if (!column8.includes(upperLeftMine2)) {
    closeToMine2.push(upperLeftMine2)
    }

upperLeftMine3 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[2].id) - gridWidth);
if (!column8.includes(upperLeftMine3)) {
    closeToMine3.push(upperLeftMine3)
    }

upperLeftMine4 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[3].id) - gridWidth);
if (!column8.includes(upperLeftMine4)) {
    closeToMine4.push(upperLeftMine4)
    }

lowerLeftMine1 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[0].id) + gridWidth);
if (!column8.includes(lowerLeftMine1)) {
    closeToMine1.push(lowerLeftMine1)
    }

lowerLeftMine2 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[1].id) + gridWidth);
if (!column8.includes(lowerLeftMine2)) {
    closeToMine2.push(lowerLeftMine2)
    }

lowerLeftMine3 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[2].id) + gridWidth);
if (!column8.includes(lowerLeftMine3)) {
    closeToMine3.push(lowerLeftMine3)
    }

lowerLeftMine4 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[3].id) + gridWidth);
if (!column8.includes(lowerLeftMine4)) {
    closeToMine4.push(lowerLeftMine4)
    }

//Each square is checked to see if it is in one of the closeToMine arrays. If so, its mineCount value is increased by 1.
for (let i = 0; i < allSquares.length; i++)
    if (closeToMine1.includes(allSquares[i])) {
        allSquares[i].mineCount = allSquares[i].mineCount+1
    }

for (let i = 0; i < allSquares.length; i++)
    if (closeToMine2.includes(allSquares[i])) {
        allSquares[i].mineCount = allSquares[i].mineCount+1
    }

for (let i = 0; i < allSquares.length; i++)
    if (closeToMine3.includes(allSquares[i])) {
        allSquares[i].mineCount = allSquares[i].mineCount+1
    }

for (let i = 0; i < allSquares.length; i++)
    if (closeToMine4.includes(allSquares[i])) {
        allSquares[i].mineCount = allSquares[i].mineCount+1
    }

console.log(chest.location)
console.log(golfClubs.location)
console.log(surfboard.location)
console.log(mineLocations)

//Functions which change hidden treasure images to images of actual treasure 
//(currently using green squares as placeholder)
function foundSmallTreasure()   {
    smallTreasurePic.src = "images/greenSquares2.png";
}

function foundMediumTreasure()   {
    mediumTreasurePic.src = "images/greenSquares3.png";
}

function foundLargeTreasure()   {
    largeTreasurePic.src = "images/greenSquares4.png";
}

function disableGridClick() {
    const collection = document.getElementsByClassName("column");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.cursor = "not-allowed";
    }
}

function chestFoundAlert() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbarChest");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
}

function golfClubsFoundAlert() {
    var x = document.getElementById("snackbarGolfClubs");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
}

function surfboardFoundAlert() {
    var x = document.getElementById("snackbarSurfboard");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
}


const treasureChestImage = document.getElementById("chestImage");
const golfClubsImage = document.getElementById("golfClubsImage");
const surfboardImage = document.getElementById("surfboardImage");

function showTreasureImage(treasurePic) {
    let img = treasurePic;
    img.style.visibility = "visible";
}

//Main function for confirming if a clicked square contains treasure, 
//and sub-functions for confirming the same criteria with a specific treasure or a mine
function onClick(thisSquare) {

    if(remainingTurnsCount > 0 && mineExploded == false && hitCount < 9) {
        if(takenSquares.includes(thisSquare))   {
            thisSquare.style.cursor = "auto";
            thisSquare.style.background = "url('images/dugHoleTreasure.png') no-repeat";
            thisSquare.style.backgroundSize = "cover";
            thisSquare.style.backgroundPosition = "center";
            thisSquare.style.color= "#fff661";
            turnCount = turnCount+1;
            hitCount = hitCount+1;
        }   else    {
                thisSquare.style.cursor = "auto";
                let randomDigSound = digHoleSounds[Math.floor(Math.random() * digHoleSounds.length)];
                randomDigSound.play();
                thisSquare.style.background = "url('images/dugHole.png') no-repeat";
                thisSquare.style.backgroundSize = "cover";
                thisSquare.style.backgroundPosition = "center";
                thisSquare.style.color= "#513c21";
                turnCount = turnCount+1;
            }

        if(chest.location.includes(thisSquare))  {
            thisSquare.style.cursor = "auto";
            smallTreasureHits = smallTreasureHits+1;
            if(smallTreasureHits == 2)  {
                chest.location[0].style.background = "url('images/foundTreasure.png') no-repeat";
                chest.location[0].style.backgroundSize = "cover";
                chest.location[0].style.backgroundPosition = "center";
                chest.location[1].style.background = "url('images/foundTreasure.png') no-repeat";
                chest.location[1].style.backgroundSize = "cover";
                chest.location[1].style.backgroundPosition = "center";
                findTreasure1Sound.play();
                showTreasureImage(treasureChestImage); 
                chestFoundAlert();
                foundSmallTreasure();
            }
        }
        if(golfClubs.location.includes(thisSquare))  {
            thisSquare.style.cursor = "auto";
            mediumTreasureHits = mediumTreasureHits+1;
            if(mediumTreasureHits == 3)  {
                golfClubs.location[0].style.background = "url('images/foundTreasure.png') no-repeat";
                golfClubs.location[0].style.backgroundSize = "cover";
                golfClubs.location[0].style.backgroundPosition = "center";
                golfClubs.location[1].style.background = "url('images/foundTreasure.png') no-repeat";
                golfClubs.location[1].style.backgroundSize = "cover";
                golfClubs.location[1].style.backgroundPosition = "center";
                golfClubs.location[2].style.background = "url('images/foundTreasure.png') no-repeat";
                golfClubs.location[2].style.backgroundSize = "cover";
                golfClubs.location[2].style.backgroundPosition = "center";
                findTreasure2Sound.play();
                showTreasureImage(golfClubsImage);
                golfClubsFoundAlert();
                foundMediumTreasure();
            }
        }
        if(surfboard.location.includes(thisSquare))  {
            thisSquare.style.cursor = "auto";
            largeTreasureHits = largeTreasureHits+1;
            if(largeTreasureHits == 4)  {
                surfboard.location[0].style.background = "url('images/foundTreasure.png') no-repeat";
                surfboard.location[0].style.backgroundSize = "cover";
                surfboard.location[0].style.backgroundPosition = "center";
                surfboard.location[1].style.background = "url('images/foundTreasure.png') no-repeat";
                surfboard.location[1].style.backgroundSize = "cover";
                surfboard.location[1].style.backgroundPosition = "center";
                surfboard.location[2].style.background = "url('images/foundTreasure.png') no-repeat";
                surfboard.location[2].style.backgroundSize = "cover";
                surfboard.location[2].style.backgroundPosition = "center";
                surfboard.location[3].style.background = "url('images/foundTreasure.png') no-repeat";
                surfboard.location[3].style.backgroundSize = "cover";
                surfboard.location[3].style.backgroundPosition = "center";
                findTreasure3Sound.play();
                showTreasureImage(surfboardImage);
                surfboardFoundAlert();
                foundLargeTreasure();
            }
        }

        if(turnCount == 25 && hitCount < 9) {
            disableGridClick()
            gameOverTimeout();
        }
        
        if(enableMines.checked == true) {
            if(takenSquares.includes(thisSquare)){
            thisSquare.style.color="#000000";
            } else {
                thisSquare.style.color="#ffffff";
            }
        }

        if(gameStart == false) {
            if(enableMines.checked == true && mineLocations.includes(thisSquare)) {
                thisSquare.style.cursor = "auto";
                const mineOnFirstSquare = thisSquare;
                const foundIndex = mineLocations.findIndex(y => y == mineOnFirstSquare);
                firstSquareSelected.push(mineOnFirstSquare);
                mineLocations.splice(foundIndex, 1);
                mineLocations.push(mineOnFirstSquare);
                mineLocations.pop(mineOnFirstSquare);
                for (let i = 0; i < allSquares.length; i++)
                    if (closeToMine1.includes(allSquares[i])) {
                        allSquares[i].mineCount = allSquares[i].mineCount-1
                    }

                for (let i = 0; i < allSquares.length; i++)
                    if (closeToMine2.includes(allSquares[i])) {
                        allSquares[i].mineCount = allSquares[i].mineCount-1
                    }

                for (let i = 0; i < allSquares.length; i++)
                    if (closeToMine3.includes(allSquares[i])) {
                        allSquares[i].mineCount = allSquares[i].mineCount-1
                    }

                for (let i = 0; i < allSquares.length; i++)
                    if (closeToMine4.includes(allSquares[i])) {
                        allSquares[i].mineCount = allSquares[i].mineCount-1
                    }
                closeToMine1 = [];
                closeToMine2 = [];
                closeToMine3 = [];
                closeToMine4 = [];
                mineLocations.push(shuffledMineLocations[4]);
                console.log(mineLocations);
                    rightOfMine1 = allSquares.find(element => Number(element.id) > Number(mineLocations[0].id));
                        if (!column1.includes(rightOfMine1)) {
                            closeToMine1.push(rightOfMine1)
                        }
                    rightOfMine2 = allSquares.find(element => Number(element.id) > Number(mineLocations[1].id));
                        if (!column1.includes(rightOfMine2)) {
                            closeToMine2.push(rightOfMine2)
                        }

                    rightOfMine3 = allSquares.find(element => Number(element.id) > Number(mineLocations[2].id));
                        if (!column1.includes(rightOfMine3)) {
                            closeToMine3.push(rightOfMine3)
                        }

                    rightOfMine4 = allSquares.find(element => Number(element.id) > Number(mineLocations[3].id));
                        if (!column1.includes(rightOfMine4)) {
                            closeToMine4.push(rightOfMine4)
                        }
                    
                    leftOfMine1 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[0].id));
                        if (!column8.includes(leftOfMine1)) {
                            closeToMine1.push(leftOfMine1)
                        }

                    leftOfMine2 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[1].id));
                        if (!column8.includes(leftOfMine2)) {
                            closeToMine2.push(leftOfMine2)
                        }

                    leftOfMine3 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[2].id));
                        if (!column8.includes(leftOfMine3)) {
                            closeToMine3.push(leftOfMine3)
                        }

                    leftOfMine4 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[3].id));
                        if (!column8.includes(leftOfMine4)) {
                            closeToMine4.push(leftOfMine4)
                        }

                    aboveMine1 = allSquares.find(element => Number(element.id) + gridWidth == Number(mineLocations[0].id));
                        closeToMine1.push(aboveMine1);

                    aboveMine2 = allSquares.find(element => Number(element.id) + gridWidth == Number(mineLocations[1].id));
                        closeToMine2.push(aboveMine2);

                    aboveMine3 = allSquares.find(element => Number(element.id) + gridWidth == Number(mineLocations[2].id));
                        closeToMine3.push(aboveMine3);

                    aboveMine4 = allSquares.find(element => Number(element.id) + gridWidth == Number(mineLocations[3].id));
                        closeToMine4.push(aboveMine4);

                    belowMine1 = allSquares.find(element => Number(element.id) - gridWidth == Number(mineLocations[0].id));
                        closeToMine1.push(belowMine1);

                    belowMine2 = allSquares.find(element => Number(element.id) - gridWidth == Number(mineLocations[1].id));
                        closeToMine2.push(belowMine2);

                    belowMine3 = allSquares.find(element => Number(element.id) - gridWidth == Number(mineLocations[2].id));
                        closeToMine3.push(belowMine3);

                    belowMine4 = allSquares.find(element => Number(element.id) - gridWidth == Number(mineLocations[3].id));
                        closeToMine4.push(belowMine4);

                    upperRightMine1 = allSquares.find(element => Number(element.id) > Number(mineLocations[0].id) - gridWidth);
                        if(!column1.includes(upperRightMine1)) {
                            closeToMine1.push(upperRightMine1)
                        }

                    upperRightMine2 = allSquares.find(element => Number(element.id) > Number(mineLocations[1].id) - gridWidth);
                        if(!column1.includes(upperRightMine2)) {
                            closeToMine2.push(upperRightMine2)
                        }

                    upperRightMine3 = allSquares.find(element => Number(element.id) > Number(mineLocations[2].id) - gridWidth);
                        if(!column1.includes(upperRightMine3)) {
                            closeToMine3.push(upperRightMine3)
                        }

                    upperRightMine4 = allSquares.find(element => Number(element.id) > Number(mineLocations[3].id) - gridWidth);
                        if(!column1.includes(upperRightMine4)) {
                            closeToMine4.push(upperRightMine4)
                        }

                    lowerRightMine1 = allSquares.find(element => Number(element.id) > Number(mineLocations[0].id) + gridWidth);
                        if(!column1.includes(lowerRightMine1)) {
                            closeToMine1.push(lowerRightMine1)
                        }

                    lowerRightMine2 = allSquares.find(element => Number(element.id) > Number(mineLocations[1].id) + gridWidth);
                        if(!column1.includes(lowerRightMine2)) {
                            closeToMine2.push(lowerRightMine2)
                        }

                    lowerRightMine3 = allSquares.find(element => Number(element.id) > Number(mineLocations[2].id) + gridWidth);
                        if(!column1.includes(lowerRightMine3)) {
                            closeToMine3.push(lowerRightMine3)
                        }

                    lowerRightMine4 = allSquares.find(element => Number(element.id) > Number(mineLocations[3].id) + gridWidth);
                        if(!column1.includes(lowerRightMine4)) {
                            closeToMine4.push(lowerRightMine4)
                        }

                    upperLeftMine1 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[0].id) - gridWidth);
                        if (!column8.includes(upperLeftMine1)) {
                        closeToMine1.push(upperLeftMine1)
                        }

                    upperLeftMine2 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[1].id) - gridWidth);
                        if (!column8.includes(upperLeftMine2)) {
                        closeToMine2.push(upperLeftMine2)
                        }

                    upperLeftMine3 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[2].id) - gridWidth);
                        if (!column8.includes(upperLeftMine3)) {
                        closeToMine3.push(upperLeftMine3)
                        }

                    upperLeftMine4 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[3].id) - gridWidth);
                        if (!column8.includes(upperLeftMine4)) {
                        closeToMine4.push(upperLeftMine4)
                        }

                    lowerLeftMine1 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[0].id) + gridWidth);
                        if (!column8.includes(lowerLeftMine1)) {
                        closeToMine1.push(lowerLeftMine1)
                        }

                    lowerLeftMine2 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[1].id) + gridWidth);
                        if (!column8.includes(lowerLeftMine2)) {
                        closeToMine2.push(lowerLeftMine2)
                        }

                    lowerLeftMine3 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[2].id) + gridWidth);
                        if (!column8.includes(lowerLeftMine3)) {
                        closeToMine3.push(lowerLeftMine3)
                        }

                    lowerLeftMine4 = allSquares.findLast(element => Number(element.id) < Number(mineLocations[3].id) + gridWidth);
                        if (!column8.includes(lowerLeftMine4)) {
                        closeToMine4.push(lowerLeftMine4)
                        }
                    
                    for (let i = 0; i < allSquares.length; i++)
                        if (closeToMine1.includes(allSquares[i])) {
                            allSquares[i].mineCount = allSquares[i].mineCount+1
                        }

                    for (let i = 0; i < allSquares.length; i++)
                        if (closeToMine2.includes(allSquares[i])) {
                            allSquares[i].mineCount = allSquares[i].mineCount+1
                        }

                    for (let i = 0; i < allSquares.length; i++)
                        if (closeToMine3.includes(allSquares[i])) {
                            allSquares[i].mineCount = allSquares[i].mineCount+1
                        }

                    for (let i = 0; i < allSquares.length; i++)
                        if (closeToMine4.includes(allSquares[i])) {
                            allSquares[i].mineCount = allSquares[i].mineCount+1
                        }
            }        
        } 
        
        if(gameStart == true) {
            if(enableMines.checked == true && mineLocations.includes(thisSquare)) {
                const endOfGameMine = thisSquare;
                const endOfGameMineIndex = mineLocations.findIndex(y => y == endOfGameMine);
                firstSquareSelected.push(endOfGameMine);
                mineLocations.splice(endOfGameMineIndex, 1);
                mineLocations.push(endOfGameMine);
                mineLocations.pop(endOfGameMine);
                thisSquare.style.background = "url('images/explosion.png') no-repeat";
                thisSquare.style.backgroundSize = "cover";
                thisSquare.style.backgroundPosition = "center";
                thisSquare.style.backgroundColor="#ffff00";
                thisSquare.style.color="transparent";
                remainingTurnsCount --;
                mineExploded = true;
                console.log(mineLocations);
                disableGridClick();
                gameOverMineTimeout();      
                }  
            }

        if(hitCount === 9) {
            if (enableMines.checked == true) {
                mineLocations[0].style.background = "url('images/mine2.png') no-repeat";
                mineLocations[0].style.backgroundSize = "cover";
                mineLocations[0].style.backgroundPosition = "center";
                mineLocations[0].style.color = "transparent";
                mineLocations[1].style.background = "url('images/mine2.png') no-repeat";
                mineLocations[1].style.backgroundSize = "cover";
                mineLocations[1].style.backgroundPosition = "center";
                mineLocations[1].style.color = "transparent";
                mineLocations[2].style.background = "url('images/mine2.png') no-repeat";
                mineLocations[2].style.backgroundSize = "cover";
                mineLocations[2].style.backgroundPosition = "center";
                mineLocations[2].style.color = "transparent";
                mineLocations[3].style.background = "url('images/mine2.png') no-repeat";
                mineLocations[3].style.backgroundSize = "cover";
                mineLocations[3].style.backgroundPosition = "center";
                mineLocations[3].style.color = "transparent";
            }

            disableGridClick();
            remainingTurnsCount --;
            allTreasuresFound = true;
            winGameTimeout();
            document.getElementById("winningTurnCounter").innerHTML = (remainingTurnsCount); 
        }

        gameStart = true;
    }
}

//First EL activates main function for confirming if treasure is present
//Second EL reduces the remaining turns counter by increment of 1
//Each EL can only fire one time


a1.addEventListener("click", () => onClick(a1), {once : true});
a1.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    a1.mineCount;
    if(enableMines.checked == true) a1.innerHTML = a1.mineCount}, {once : true});
b1.addEventListener("click", () => onClick(b1), {once : true});
b1.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    b1.mineCount;
    if(enableMines.checked == true) b1.innerHTML = b1.mineCount}, {once : true});
c1.addEventListener("click", () => onClick(c1), {once : true});
c1.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    c1.mineCount;
    if(enableMines.checked == true) c1.innerHTML = c1.mineCount}, {once : true});
d1.addEventListener("click", () => onClick(d1), {once : true});
d1.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    d1.mineCount;
    if(enableMines.checked == true) d1.innerHTML = d1.mineCount}, {once : true});
e1.addEventListener("click", () => onClick(e1), {once : true});
e1.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    e1.mineCount;
    if(enableMines.checked == true) e1.innerHTML = e1.mineCount}, {once : true});
f1.addEventListener("click", () => onClick(f1), {once : true});
f1.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    f1.mineCount;
    if(enableMines.checked == true) f1.innerHTML = f1.mineCount}, {once : true});
g1.addEventListener("click", () => onClick(g1), {once : true});
g1.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    g1.mineCount;
    if(enableMines.checked == true) g1.innerHTML = g1.mineCount}, {once : true});
h1.addEventListener("click", () => onClick(h1), {once : true});
h1.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    h1.mineCount;
    if(enableMines.checked == true) h1.innerHTML = h1.mineCount}, {once : true});

a2.addEventListener("click", () => onClick(a2), {once : true});
a2.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    a2.mineCount;
    if(enableMines.checked == true) a2.innerHTML = a2.mineCount}, {once : true});
b2.addEventListener("click", () => onClick(b2), {once : true});
b2.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    b2.mineCount;
    if(enableMines.checked == true) b2.innerHTML = b2.mineCount}, {once : true});
c2.addEventListener("click", () => onClick(c2), {once : true});
c2.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    c2.mineCount;
    if(enableMines.checked == true) c2.innerHTML = c2.mineCount}, {once : true});
d2.addEventListener("click", () => onClick(d2), {once : true});
d2.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    d2.mineCount;
    if(enableMines.checked == true) d2.innerHTML = d2.mineCount}, {once : true});
e2.addEventListener("click", () => onClick(e2), {once : true});
e2.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    e2.mineCount;
    if(enableMines.checked == true) e2.innerHTML = e2.mineCount}, {once : true});
f2.addEventListener("click", () => onClick(f2), {once : true});
f2.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    f2.mineCount;
    if(enableMines.checked == true) f2.innerHTML = f2.mineCount}, {once : true});
g2.addEventListener("click", () => onClick(g2), {once : true});
g2.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    g2.mineCount;
    if(enableMines.checked == true) g2.innerHTML = g2.mineCount}, {once : true});
h2.addEventListener("click", () => onClick(h2), {once : true});
h2.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    h2.mineCount;
    if(enableMines.checked == true) h2.innerHTML = h2.mineCount}, {once : true});

a3.addEventListener("click", () => onClick(a3), {once : true});
a3.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    a3.mineCount;
    if(enableMines.checked == true) a3.innerHTML = a3.mineCount}, {once : true});
b3.addEventListener("click", () => onClick(b3), {once : true});
b3.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    b3.mineCount;
    if(enableMines.checked == true) b3.innerHTML = b3.mineCount}, {once : true});
c3.addEventListener("click", () => onClick(c3), {once : true});
c3.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    c3.mineCount;
    if(enableMines.checked == true) c3.innerHTML = c3.mineCount}, {once : true});
d3.addEventListener("click", () => onClick(d3), {once : true});
d3.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    d3.mineCount;
    if(enableMines.checked == true) d3.innerHTML = d3.mineCount}, {once : true});
e3.addEventListener("click", () => onClick(e3), {once : true});
e3.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    e3.mineCount;
    if(enableMines.checked == true) e3.innerHTML = e3.mineCount}, {once : true});
f3.addEventListener("click", () => onClick(f3), {once : true});
f3.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    f3.mineCount;
    if(enableMines.checked == true) f3.innerHTML = f3.mineCount}, {once : true});
g3.addEventListener("click", () => onClick(g3), {once : true});
g3.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    g3.mineCount;
    if(enableMines.checked == true) g3.innerHTML = g3.mineCount}, {once : true});
h3.addEventListener("click", () => onClick(h3), {once : true});
h3.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    h3.mineCount;
    if(enableMines.checked == true) h3.innerHTML = h3.mineCount}, {once : true});

a4.addEventListener("click", () => onClick(a4), {once : true});
a4.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    a4.mineCount;
    if(enableMines.checked == true) a4.innerHTML = a4.mineCount}, {once : true});
b4.addEventListener("click", () => onClick(b4), {once : true});
b4.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    b4.mineCount;
    if(enableMines.checked == true) b4.innerHTML = b4.mineCount}, {once : true});
c4.addEventListener("click", () => onClick(c4), {once : true});
c4.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    c4.mineCount;
    if(enableMines.checked == true) c4.innerHTML = c4.mineCount}, {once : true});
d4.addEventListener("click", () => onClick(d4), {once : true});
d4.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    d4.mineCount;
    if(enableMines.checked == true) d4.innerHTML = d4.mineCount}, {once : true});
e4.addEventListener("click", () => onClick(e4), {once : true});
e4.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    e4.mineCount;
    if(enableMines.checked == true) e4.innerHTML = e4.mineCount}, {once : true});
f4.addEventListener("click", () => onClick(f4), {once : true});
f4.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    f4.mineCount;
    if(enableMines.checked == true) f4.innerHTML = f4.mineCount}, {once : true});
g4.addEventListener("click", () => onClick(g4), {once : true});
g4.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    g4.mineCount;
    if(enableMines.checked == true) g4.innerHTML = g4.mineCount}, {once : true});
h4.addEventListener("click", () => onClick(h4), {once : true});
h4.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    h4.mineCount;
    if(enableMines.checked == true) h4.innerHTML = h4.mineCount}, {once : true});

a5.addEventListener("click", () => onClick(a5), {once : true});
a5.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    a5.mineCount;
    if(enableMines.checked == true) a5.innerHTML = a5.mineCount}, {once : true});
b5.addEventListener("click", () => onClick(b5), {once : true});
b5.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    b5.mineCount;
    if(enableMines.checked == true) b5.innerHTML = b5.mineCount}, {once : true});
c5.addEventListener("click", () => onClick(c5), {once : true});
c5.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    c5.mineCount;
    if(enableMines.checked == true) c5.innerHTML = c5.mineCount}, {once : true});
d5.addEventListener("click", () => onClick(d5), {once : true});
d5.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    d5.mineCount;
    if(enableMines.checked == true) d5.innerHTML = d5.mineCount}, {once : true});
e5.addEventListener("click", () => onClick(e5), {once : true});
e5.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    e5.mineCount;
    if(enableMines.checked == true) e5.innerHTML = e5.mineCount}, {once : true});
f5.addEventListener("click", () => onClick(f5), {once : true});
f5.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    f5.mineCount;
    if(enableMines.checked == true) f5.innerHTML = f5.mineCount}, {once : true});
g5.addEventListener("click", () => onClick(g5), {once : true});
g5.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    g5.mineCount;
    if(enableMines.checked == true) g5.innerHTML = g5.mineCount}, {once : true});
h5.addEventListener("click", () => onClick(h5), {once : true});
h5.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    h5.mineCount;
    if(enableMines.checked == true) h5.innerHTML = h5.mineCount}, {once : true});

a6.addEventListener("click", () => onClick(a6), {once : true});
a6.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    a6.mineCount;
    if(enableMines.checked == true) a6.innerHTML = a6.mineCount}, {once : true});
b6.addEventListener("click", () => onClick(b6), {once : true});
b6.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    b6.mineCount;
    if(enableMines.checked == true) b6.innerHTML = b6.mineCount}, {once : true});
c6.addEventListener("click", () => onClick(c6), {once : true});
c6.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    c6.mineCount;
    if(enableMines.checked == true) c6.innerHTML = c6.mineCount}, {once : true});
d6.addEventListener("click", () => onClick(d6), {once : true});
d6.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    d6.mineCount;
    if(enableMines.checked == true) d6.innerHTML = d6.mineCount}, {once : true});
e6.addEventListener("click", () => onClick(e6), {once : true});
e6.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    e6.mineCount;
    if(enableMines.checked == true) e6.innerHTML = e6.mineCount}, {once : true});
f6.addEventListener("click", () => onClick(f6), {once : true});
f6.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    f6.mineCount;
    if(enableMines.checked == true) f6.innerHTML = f6.mineCount}, {once : true});
g6.addEventListener("click", () => onClick(g6), {once : true});
g6.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    g6.mineCount;
    if(enableMines.checked == true) g6.innerHTML = g6.mineCount}, {once : true});
h6.addEventListener("click", () => onClick(h6), {once : true});
h6.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    h6.mineCount;
    if(enableMines.checked == true) h6.innerHTML = h6.mineCount}, {once : true});

a7.addEventListener("click", () => onClick(a7), {once : true});
a7.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    a7.mineCount;
    if(enableMines.checked == true) a7.innerHTML = a7.mineCount}, {once : true});
b7.addEventListener("click", () => onClick(b7), {once : true});
b7.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    b7.mineCount;
    if(enableMines.checked == true) b7.innerHTML = b7.mineCount}, {once : true});
c7.addEventListener("click", () => onClick(c7), {once : true});
c7.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    c7.mineCount;
    if(enableMines.checked == true) c7.innerHTML = c7.mineCount}, {once : true});
d7.addEventListener("click", () => onClick(d7), {once : true});
d7.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    d7.mineCount;
    if(enableMines.checked == true) d7.innerHTML = d7.mineCount}, {once : true});
e7.addEventListener("click", () => onClick(e7), {once : true});
e7.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    e7.mineCount;
    if(enableMines.checked == true) e7.innerHTML = e7.mineCount}, {once : true});
f7.addEventListener("click", () => onClick(f7), {once : true});
f7.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount
    f7.mineCount;
    if(enableMines.checked == true) f7.innerHTML = f7.mineCount}, {once : true});
g7.addEventListener("click", () => onClick(g7), {once : true});
g7.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    g7.mineCount;
    if(enableMines.checked == true) g7.innerHTML = g7.mineCount}, {once : true});
h7.addEventListener("click", () => onClick(h7), {once : true});
h7.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    h7.mineCount;
    if(enableMines.checked == true) h7.innerHTML = h7.mineCount}, {once : true});

a8.addEventListener("click", () => onClick(a8), {once : true});
a8.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    a8.mineCount;
    if(enableMines.checked == true) a8.innerHTML = a8.mineCount}, {once : true});
b8.addEventListener("click", () => onClick(b8), {once : true});
b8.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    b8.mineCount;
    if(enableMines.checked == true) b8.innerHTML = b8.mineCount}, {once : true});
c8.addEventListener("click", () => onClick(c8), {once : true});
c8.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    c8.mineCount;
    if(enableMines.checked == true) c8.innerHTML = c8.mineCount}, {once : true});
d8.addEventListener("click", () => onClick(d8), {once : true});
d8.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    d8.mineCount;
    if(enableMines.checked == true) d8.innerHTML = d8.mineCount}, {once : true});
e8.addEventListener("click", () => onClick(e8), {once : true});
e8.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    e8.mineCount;
    if(enableMines.checked == true) e8.innerHTML = e8.mineCount}, {once : true});
f8.addEventListener("click", () => onClick(f8), {once : true});
f8.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    f8.mineCount;
    if(enableMines.checked == true) f8.innerHTML = f8.mineCount}, {once : true});
g8.addEventListener("click", () => onClick(g8), {once : true});
g8.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    g8.mineCount;
    if(enableMines.checked == true) g8.innerHTML = g8.mineCount}, {once : true});
h8.addEventListener("click", () => onClick(h8), {once : true});
h8.addEventListener("click", () => {
    if(remainingTurnsCount > 0 && mineExploded == false && allTreasuresFound == false) {
    remainingTurnsCount --};
    remainingTurns.innerHTML = remainingTurnsCount;
    h8.mineCount;
    if(enableMines.checked == true) h8.innerHTML = h8.mineCount}, {once : true});

