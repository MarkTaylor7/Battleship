//Counters for turns, total hits, and specific treasure hits
let turnCount = 0;
let hitCount = 0;
let smallTreasureHits = 0;
let mediumTreasureHits = 0;
let largeTreasureHits = 0;

//Counter for remaining turns
let remainingTurns = document.getElementById("turnCounter")
let remainingTurnsCount = 24;

//Images of hidden treasures, indicating size and shape of object
let smallTreasurePic = document.getElementById("picitem1")
let mediumTreasurePic = document.getElementById("picitem2")
let largeTreasurePic = document.getElementById("picitem3")

//welcomeModal
const easyModeBtn = document.getElementById("easyModeBtn");
const normalModeBtn = document.getElementById("normalModeBtn");
const hardModeBtn = document.getElementById("hardModeBtn");
const howToPlayBtn = document.getElementById("welcomeHowToPlayBtn")

const modals = document.getElementsByClassName("modal");

function showWelcomeModal() {
    modals[0].style.display = "block";
}

function hideWelcomeModal() {
    modals[0].style.display = "none";
}

easyModeBtn.onclick = function() {
    modals[0].style.display = "none";
    document.getElementById("turnCounter").innerHTML = "30";
    remainingTurnsCount = 30;
    turnCount = -6;
}

normalModeBtn.onclick = function() {
    modals[0].style.display = "none";
    document.getElementById("turnCounter").innerHTML = "24";
    remainingTurnsCount = 24;
}

hardModeBtn.onclick = function() {
    modals[0].style.display = "none";
    document.getElementById("turnCounter").innerHTML = "19";
    remainingTurnsCount = 19;
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

function showWinGameModal() {
    modals[2].style.display = "block";
}

function showGameOverModal() {
    modals[3].style.display = "block";
}

function showGameOverMineModal() {
    modals[4].style.display = "block";
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

let allMineCounts = [a1.mineCount, b1.mineCount, c1.mineCount, d1.mineCount, e1.mineCount, f1.mineCount, g1.mineCount, h1.mineCount,
    a2.mineCount, b2.mineCount, c2.mineCount, d2.mineCount, e2.mineCount, f2.mineCount, g2.mineCount, h2.mineCount,
    a3.mineCount, b3.mineCount, c3.mineCount, d3.mineCount, e3.mineCount, f3.mineCount, g3.mineCount, h3.mineCount,
    a4.mineCount, b4.mineCount, c4.mineCount, d4.mineCount, e4.mineCount, f4.mineCount, g4.mineCount, h4.mineCount,
    a5.mineCount, b5.mineCount, c5.mineCount, d5.mineCount, e5.mineCount, f5.mineCount, g5.mineCount, h5.mineCount,
    a6.mineCount, b6.mineCount, c6.mineCount, d6.mineCount, e6.mineCount, f6.mineCount, g6.mineCount, h6.mineCount,
    a7.mineCount, b7.mineCount, c7.mineCount, d7.mineCount, e7.mineCount, f7.mineCount, g7.mineCount, h7.mineCount,
    a8.mineCount, b8.mineCount, c8.mineCount, d8.mineCount, e8.mineCount, f8.mineCount, g8.mineCount, h8.mineCount
];

const row1 = [a1, b1, c1, d1, e1, f1, g1, h1]
const row2 = [a2, b2, c2, d2, e2, f2, g2, h2]
const row3 = [a3, b3, c3, d3, e3, f3, g3, h3]
const row4 = [a4, b4, c4, d4, e4, f4, g4, h4]
const row5 = [a5, b5, c5, d5, e5, f5, g5, h5]
const row6 = [a6, b6, c6, d6, e6, f6, g6, h6]
const row7 = [a7, b7, c7, d7, e7, f7, g7, h7]
const row8 = [a8, b8, c8, d8, e8, f8, g8, h8]
const gridRows = [row1, row2, row3, row4, row5, row6, row7, row8]

const column1 = [a1, a2, a3, a4, a5, a6, a7, a8]
const column2 = [b1, b2, b3, b4, b5, b6, b7, b8]
const column3 = [c1, c2, c3, c4, c5, c6, c7, c8]
const column4 = [d1, d2, d3, d4, d5, d6, d7, d8]
const column5 = [e1, e2, e3, e4, e5, e6, e7, e8]
const column6 = [f1, f2, f3, f4, f5, f6, f7, f8]
const column7 = [g1, g2, g3, g4, g5, g6, g7, g8]
const column8 = [h1, h2, h3, h4, h5, h6, h7, h8]
const gridColumns = [column1, column2, column3, column4, column5, column6, column7, column8]



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

//For each treasure in the Treasure class, call the addTreasurePiece function
treasures.forEach(Treasure => addTreasurePiece(Treasure));


//Places Mines, which will result in "Game Over" if user clicks on one
const enableMines = document.getElementById("mineToggle");
let validMineLocations = allSquares.filter(x => !takenSquares.includes(x));

const shuffledMineLocations = validMineLocations.sort(() => 0.5 - Math.random());
let mineLocations = shuffledMineLocations.slice(0, 4);



let closeToMine1 = [a1, a2];
let closeToMine2 = [b4, b5, c7, d8];
let closeToMine3 = [a1, a2];
let closeToMine4 = [a1];
let closeToAnyMine = [closeToMine1, closeToMine2, closeToMine3, closeToMine4];

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
console.log(umbrella.location)
console.log(surfboard.location)
console.log(mineLocations)
console.log(a1.mineCount)
console.log(a2.mineCount)
console.log(allMineCounts)


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
//and sub-functions for confirming the same criteria with a specific treasure or a mine
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
            thisSquare.style.backgroundColor= "#DF2C14";
            umbrella.location[0].style.backgroundColor="#FC6600";
            umbrella.location[1].style.backgroundColor="#FC6600";
            umbrella.location[2].style.backgroundColor="#FC6600";
            //setTimeout(function() { alert("my message"); }, 100);
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

    if(turnCount == 24 && hitCount < 9) {
        chest.location[0].style.backgroundColor="#FFFF00";
        chest.location[1].style.backgroundColor="#FFFF00";
        umbrella.location[0].style.backgroundColor="#FC6600";
        umbrella.location[1].style.backgroundColor="#FC6600";
        umbrella.location[2].style.backgroundColor="#FC6600";
        surfboard.location[0].style.backgroundColor="#03AC13";
        surfboard.location[1].style.backgroundColor="#03AC13";
        surfboard.location[2].style.backgroundColor="#03AC13";
        surfboard.location[3].style.backgroundColor="#03AC13";
        //Set a timer on game over modal to appear after showing
        //treasure locations, OR have game over modal appear above/below
        //game board
        showGameOverModal()
    }
    
    if(enableMines.checked == true && mineLocations.includes(thisSquare)) {
            thisSquare.style.backgroundColor="#A020F0";
            showGameOverMineModal();
    }

    //if(closeToMine1.includes(thisSquare)) {
    //    thisSquareMineCount = thisSquareMineCount+1;
    //}


    //if(enableMines.checked == true && closeToMine.includes(thisSquare)) {
      //  alert("mine is close by!");
    //}

    if(hitCount == 9) {
        showWinGameModal();
        document.getElementById("winningTurnCounter").innerHTML = (remainingTurnsCount - 1); 
    }
}


//First EL activates main function for confirming if treasure is present
//Second EL reduces the remaining turns counter by increment of 1
//Each EL can only fire one time
a1.addEventListener("click", () => onClick(a1), {once : true});
a1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    a1.mineCount;
    a1.innerHTML = a1.mineCount}, {once : true});
b1.addEventListener("click", () => onClick(b1), {once : true});
b1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    b1.mineCount;
    b1.innerHTML = b1.mineCount}, {once : true});
c1.addEventListener("click", () => onClick(c1), {once : true});
c1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    c1.mineCount;
    c1.innerHTML = c1.mineCount}, {once : true});
d1.addEventListener("click", () => onClick(d1), {once : true});
d1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    d1.mineCount;
    d1.innerHTML = d1.mineCount}, {once : true});
e1.addEventListener("click", () => onClick(e1), {once : true});
e1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    e1.mineCount;
    e1.innerHTML = e1.mineCount}, {once : true});
f1.addEventListener("click", () => onClick(f1), {once : true});
f1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    f1.mineCount;
    f1.innerHTML = f1.mineCount}, {once : true});
g1.addEventListener("click", () => onClick(g1), {once : true});
g1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    g1.mineCount;
    g1.innerHTML = g1.mineCount}, {once : true});
h1.addEventListener("click", () => onClick(h1), {once : true});
h1.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    h1.mineCount;
    h1.innerHTML = h1.mineCount}, {once : true});

a2.addEventListener("click", () => onClick(a2), {once : true});
a2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    a2.mineCount;
    a2.innerHTML = a2.mineCount}, {once : true});
b2.addEventListener("click", () => onClick(b2), {once : true});
b2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    b2.mineCount;
    b2.innerHTML = b2.mineCount}, {once : true});
c2.addEventListener("click", () => onClick(c2), {once : true});
c2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    c2.mineCount;
    c2.innerHTML = c2.mineCount}, {once : true});
d2.addEventListener("click", () => onClick(d2), {once : true});
d2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    d2.mineCount;
    d2.innerHTML = d2.mineCount}, {once : true});
e2.addEventListener("click", () => onClick(e2), {once : true});
e2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    e2.mineCount;
    e2.innerHTML = e2.mineCount}, {once : true});
f2.addEventListener("click", () => onClick(f2), {once : true});
f2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    f2.mineCount;
    f2.innerHTML = f2.mineCount}, {once : true});
g2.addEventListener("click", () => onClick(g2), {once : true});
g2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    g2.mineCount;
    g2.innerHTML = g2.mineCount}, {once : true});
h2.addEventListener("click", () => onClick(h2), {once : true});
h2.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    h2.mineCount;
    h2.innerHTML = h2.mineCount}, {once : true});

a3.addEventListener("click", () => onClick(a3), {once : true});
a3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    a3.mineCount;
    a3.innerHTML = a3.mineCount}, {once : true});
b3.addEventListener("click", () => onClick(b3), {once : true});
b3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    b3.mineCount;
    b3.innerHTML = b3.mineCount}, {once : true});
c3.addEventListener("click", () => onClick(c3), {once : true});
c3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    c3.mineCount;
    c3.innerHTML = c3.mineCount}, {once : true});
d3.addEventListener("click", () => onClick(d3), {once : true});
d3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    d3.mineCount;
    d3.innerHTML = d3.mineCount}, {once : true});
e3.addEventListener("click", () => onClick(e3), {once : true});
e3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    e3.mineCount;
    e3.innerHTML = e3.mineCount}, {once : true});
f3.addEventListener("click", () => onClick(f3), {once : true});
f3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    f3.mineCount;
    f3.innerHTML = f3.mineCount}, {once : true});
g3.addEventListener("click", () => onClick(g3), {once : true});
g3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    g3.mineCount;
    g3.innerHTML = g3.mineCount}, {once : true});
h3.addEventListener("click", () => onClick(h3), {once : true});
h3.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    h3.mineCount;
    h3.innerHTML = h3.mineCount}, {once : true});

a4.addEventListener("click", () => onClick(a4), {once : true});
a4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    a4.mineCount;
    a4.innerHTML = a4.mineCount}, {once : true});
b4.addEventListener("click", () => onClick(b4), {once : true});
b4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    b4.mineCount;
    b4.innerHTML = b4.mineCount}, {once : true});
c4.addEventListener("click", () => onClick(c4), {once : true});
c4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    c4.mineCount;
    c4.innerHTML = c4.mineCount}, {once : true});
d4.addEventListener("click", () => onClick(d4), {once : true});
d4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    d4.mineCount;
    d4.innerHTML = d4.mineCount}, {once : true});
e4.addEventListener("click", () => onClick(e4), {once : true});
e4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    e4.mineCount;
    e4.innerHTML = e4.mineCount}, {once : true});
f4.addEventListener("click", () => onClick(f4), {once : true});
f4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    f4.mineCount;
    f4.innerHTML = f4.mineCount}, {once : true});
g4.addEventListener("click", () => onClick(g4), {once : true});
g4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    g4.mineCount;
    g4.innerHTML = g4.mineCount}, {once : true});
h4.addEventListener("click", () => onClick(h4), {once : true});
h4.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    h4.mineCount;
    h4.innerHTML = h4.mineCount}, {once : true});

a5.addEventListener("click", () => onClick(a5), {once : true});
a5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    a5.mineCount;
    a5.innerHTML = a5.mineCount}, {once : true});
b5.addEventListener("click", () => onClick(b5), {once : true});
b5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    b5.mineCount;
    b5.innerHTML = b5.mineCount}, {once : true});
c5.addEventListener("click", () => onClick(c5), {once : true});
c5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    c5.mineCount;
    c5.innerHTML = c5.mineCount}, {once : true});
d5.addEventListener("click", () => onClick(d5), {once : true});
d5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    d5.mineCount;
    d5.innerHTML = d5.mineCount}, {once : true});
e5.addEventListener("click", () => onClick(e5), {once : true});
e5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    e5.mineCount;
    e5.innerHTML = e5.mineCount}, {once : true});
f5.addEventListener("click", () => onClick(f5), {once : true});
f5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    f5.mineCount;
    f5.innerHTML = f5.mineCount}, {once : true});
g5.addEventListener("click", () => onClick(g5), {once : true});
g5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    g5.mineCount;
    g5.innerHTML = g5.mineCount}, {once : true});
h5.addEventListener("click", () => onClick(h5), {once : true});
h5.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    h5.mineCount;
    h5.innerHTML = h5.mineCount}, {once : true});

a6.addEventListener("click", () => onClick(a6), {once : true});
a6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    a6.mineCount;
    a6.innerHTML = a6.mineCount}, {once : true});
b6.addEventListener("click", () => onClick(b6), {once : true});
b6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    b6.mineCount;
    b6.innerHTML = b6.mineCount}, {once : true});
c6.addEventListener("click", () => onClick(c6), {once : true});
c6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    c6.mineCount;
    c6.innerHTML = c6.mineCount}, {once : true});
d6.addEventListener("click", () => onClick(d6), {once : true});
d6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    d6.mineCount;
    d6.innerHTML = d6.mineCount}, {once : true});
e6.addEventListener("click", () => onClick(e6), {once : true});
e6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    e6.mineCount;
    e6.innerHTML = e6.mineCount}, {once : true});
f6.addEventListener("click", () => onClick(f6), {once : true});
f6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    f6.mineCount;
    f6.innerHTML = f6.mineCount}, {once : true});
g6.addEventListener("click", () => onClick(g6), {once : true});
g6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    g6.mineCount;
    g6.innerHTML = g6.mineCount}, {once : true});
h6.addEventListener("click", () => onClick(h6), {once : true});
h6.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    h6.mineCount;
    h6.innerHTML = h6.mineCount}, {once : true});

a7.addEventListener("click", () => onClick(a7), {once : true});
a7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    a7.mineCount;
    a7.innerHTML = a7.mineCount}, {once : true});
b7.addEventListener("click", () => onClick(b7), {once : true});
b7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    b7.mineCount;
    b7.innerHTML = b7.mineCount}, {once : true});
c7.addEventListener("click", () => onClick(c7), {once : true});
c7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    c7.mineCount;
    c7.innerHTML = c7.mineCount}, {once : true});
d7.addEventListener("click", () => onClick(d7), {once : true});
d7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    d7.mineCount;
    d7.innerHTML = d7.mineCount}, {once : true});
e7.addEventListener("click", () => onClick(e7), {once : true});
e7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    e7.mineCount;
    e7.innerHTML = e7.mineCount}, {once : true});
f7.addEventListener("click", () => onClick(f7), {once : true});
f7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount
    f7.mineCount;
    f7.innerHTML = f7.mineCount}, {once : true});
g7.addEventListener("click", () => onClick(g7), {once : true});
g7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    g7.mineCount;
    g7.innerHTML = g7.mineCount}, {once : true});
h7.addEventListener("click", () => onClick(h7), {once : true});
h7.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    h7.mineCount;
    h7.innerHTML = h7.mineCount}, {once : true});

a8.addEventListener("click", () => onClick(a8), {once : true});
a8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    a8.mineCount;
    a8.innerHTML = a8.mineCount}, {once : true});
b8.addEventListener("click", () => onClick(b8), {once : true});
b8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    b8.mineCount;
    b8.innerHTML = b8.mineCount}, {once : true});
c8.addEventListener("click", () => onClick(c8), {once : true});
c8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    c8.mineCount;
    c8.innerHTML = c8.mineCount}, {once : true});
d8.addEventListener("click", () => onClick(d8), {once : true});
d8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    d8.mineCount;
    d8.innerHTML = d8.mineCount}, {once : true});
e8.addEventListener("click", () => onClick(e8), {once : true});
e8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    e8.mineCount;
    e8.innerHTML = e8.mineCount}, {once : true});
f8.addEventListener("click", () => onClick(f8), {once : true});
f8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    f8.mineCount;
    f8.innerHTML = f8.mineCount}, {once : true});
g8.addEventListener("click", () => onClick(g8), {once : true});
g8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    g8.mineCount;
    g8.innerHTML = g8.mineCount}, {once : true});
h8.addEventListener("click", () => onClick(h8), {once : true});
h8.addEventListener("click", () => {
    remainingTurnsCount --;
    remainingTurns.innerHTML = remainingTurnsCount;
    h8.mineCount;
    h8.innerHTML = h8.mineCount}, {once : true})