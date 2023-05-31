//welcomeModal
const welcomeModal = document.getElementById("welcomeModal");
const startGameBtn = document.getElementById("startGameBtn"); 
const howToPlayBtn = document.getElementById("welcomeHowToPlayBtn")

function showWelcomeModal() {
    welcomeModal.style.display = "block";
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


//This function shuffles the order of the allSquares array when the user clicks "Start Game"
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}



//Width of grid
width = 8;

//Treasures, including their properties of name and length
class treasure {
    constructor(name, length) { 
        this.name = name
        this.length = length
    }
}

const chest = new treasure("chest", 2)
const umbrella = new treasure("umbrella", 3)
const surfboard = new treasure ("surfboard", 4)

const allTreasures = [chest, umbrella, surfboard]

function addTreasurePiece(treasure) {
    allSquares
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = randomBoolean
    let randomStartIndex = Math.floor(Math.random() * width * width)

    let validStart = isHorizontal ? randomStartIndex <= width * width - treasure.length ? randomStartIndex :
        width * width - treasure.length : 
        randomStartIndex <= width * width - width * treasure.length ? randomStartIndex :
            randomStartIndex - treasure.length * width + width



    let treasureSquares = []

    for (let i = 0; i < treasure.length; i++) {
        if (isHorizontal) {
           treasureSquares.push(allSquares[Number(validStart) + i])
        } else {
            treasureSquares.push(allSquares[Number(validStart) + i * width])
        }
    }

    let valid
    //Prevents first treasure piece from being placed without enough room on grid for whole treasure (i.e surfboard on G9)
    if (isHorizontal) {
        treasureSquares.every((_treasureSquare, index) => 
            valid = treasureSquares[0].id % width !== width - (treasureSquares.length - (index + 1)))
    } else {
        treasureSquares.every((_treasureSquare, index) => 
            
            valid = treasureSquares[0].id < 56 + (width * index + 1)
        )
    }

    const notTaken = treasureSquares.every(treasureSquare => !treasureSquare.classList.contains("taken"))

    if (valid && notTaken) {
        treasureSquares.forEach(treasureSquare => {
            treasureSquare.classList.add(treasure.name)
            treasureSquare.classList.add("taken")
        })
    } else {
        addTreasurePiece(treasure)
    }

console.log(treasureSquares)

}

startGameBtn.onclick = function() {
    allTreasures.forEach(treasure => addTreasurePiece(treasure));
    welcomeModal.style.display = "none";
}

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
    if(allTreasures.includes(thisSquare))   {
       thisSquare.style.backgroundColor= "#DF2C14";
       turnCount = turnCount+1;
       if(turnCount == 24)  {
        alert("Game Over");
       }
       hitCount = hitCount+1;
       if(hitCount == 9)    {
        alert("Congrats, you won!");
       }
    }   else    {
        thisSquare.style.backgroundColor= "#3CDFFF";
        turnCount = turnCount+1;
        if(turnCount == 24)  {
            alert("Game Over");
            smallTreasure[0].style.backgroundColor="#FFFF00";
            smallTreasure[1].style.backgroundColor="#FFFF00";
            mediumTreasure[0].style.backgroundColor="#FC6600";
            mediumTreasure[1].style.backgroundColor="#FC6600";
            mediumTreasure[2].style.backgroundColor="#FC6600";
            largeTreasure[0].style.backgroundColor="#03AC13";
            largeTreasure[1].style.backgroundColor="#03AC13";
            largeTreasure[2].style.backgroundColor="#03AC13";
            largeTreasure[3].style.backgroundColor="#03AC13";
        }
    }
    if(treasure.chest = thisSquare)  {
        smallTreasureHits = smallTreasureHits+1;
        if(smallTreasureHits == 2)  {
            alert("You found the small treasure!");
            foundSmallTreasure();
        }
    }
    if(treasure.umbrella = thisSquare)  {
        mediumTreasureHits = mediumTreasureHits+1;
        if(mediumTreasureHits == 3)  {
            alert("You found the medium treasure!");
            foundMediumTreasure();
        }
    }
    if(treasure.surfboard = thisSquare)  {
        largeTreasureHits = largeTreasureHits+1;
        if(largeTreasureHits == 4)  {
            alert("You found the large treasure!");
            foundLargeTreasure();
        }
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