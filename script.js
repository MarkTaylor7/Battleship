//welcomeModal
const welcomeModal = document.getElementById("welcomeModal"); 
const welcomeModalSpan = document.getElementsByClassName("welcomeClose")[0];

function showWelcomeModal() {
    welcomeModal.style.display = "block";
}

welcomeModalSpan.onclick = function() {
    welcomeModal.style.display = "none";
}


//howToPlayModal
const howToPlayModal = document.getElementById("howToPlayModal");
const howToPlayModalBtn = document.getElementById("howToPlayModalBtn");
const howToPlayModalSpan = document.getElementsByClassName("howToPlayClose")[0];

howToPlayModalBtn.onclick = function() {
    howToPlayModal.style.display = "block";
}

howToPlayModalSpan.onclick = function() {
    howToPlayModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == howToPlayModal) {
        welcomeModal.style.display = "none",
        howToPlayModal.style.display = "none";
    }
}

//Squares
const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1")
const c1 = document.getElementById("c1")
const d1 = document.getElementById("d1")
const e1 = document.getElementById("e1")
const f1 = document.getElementById("f1")
const g1 = document.getElementById("g1")
const h1 = document.getElementById("h1")

const a2 = document.getElementById("a2")
const b2 = document.getElementById("b2")
const c2 = document.getElementById("c2")
const d2 = document.getElementById("d2")
const e2 = document.getElementById("e2")
const f2 = document.getElementById("f2")
const g2 = document.getElementById("g2")
const h2 = document.getElementById("h2")

const a3 = document.getElementById("a3")
const b3 = document.getElementById("b3")
const c3 = document.getElementById("c3")
const d3 = document.getElementById("d3")
const e3 = document.getElementById("e3")
const f3 = document.getElementById("f3")
const g3 = document.getElementById("g3")
const h3 = document.getElementById("h3")

const a4 = document.getElementById("a4")
const b4 = document.getElementById("b4")
const c4 = document.getElementById("c4")
const d4 = document.getElementById("d4")
const e4 = document.getElementById("e4")
const f4 = document.getElementById("f4")
const g4 = document.getElementById("g4")
const h4 = document.getElementById("h4")

const a5 = document.getElementById("a5")
const b5 = document.getElementById("b5")
const c5 = document.getElementById("c5")
const d5 = document.getElementById("d5")
const e5 = document.getElementById("e5")
const f5 = document.getElementById("f5")
const g5 = document.getElementById("g5")
const h5 = document.getElementById("h5")

const a6 = document.getElementById("a6")
const b6 = document.getElementById("b6")
const c6 = document.getElementById("c6")
const d6 = document.getElementById("d6")
const e6 = document.getElementById("e6")
const f6 = document.getElementById("f6")
const g6 = document.getElementById("g6")
const h6 = document.getElementById("h6")

const a7 = document.getElementById("a7")
const b7 = document.getElementById("b7")
const c7 = document.getElementById("c7")
const d7 = document.getElementById("d7")
const e7 = document.getElementById("e7")
const f7 = document.getElementById("f7")
const g7 = document.getElementById("g7")
const h7 = document.getElementById("h7")

const a8 = document.getElementById("a8")
const b8 = document.getElementById("b8")
const c8 = document.getElementById("c8")
const d8 = document.getElementById("d8")
const e8 = document.getElementById("e8")
const f8 = document.getElementById("f8")
const g8 = document.getElementById("g8")
const h8 = document.getElementById("h8")

//Treasures
const smallTreasure = [a1, a2];
const mediumTreasure = [b1, b2, b3];
const largeTreasure = [c1, c2, c3, c4];
const allTreasures = [...smallTreasure, ...mediumTreasure, ...largeTreasure]

let win = false;


let turnCount = 0;
let hitCount = 0;
let smallTreasureHits = 0;
let mediumTreasureHits = 0;
let largeTreasureHits = 0;

let smallTreasurePic = document.getElementById("picitem1")
let mediumTreasurePic = document.getElementById("picitem2")
let largeTreasurePic = document.getElementById("picitem3")

function foundSmallTreasure()   {
    smallTreasurePic.src = "images/greenSquares2.png";
};

function foundMediumTreasure()   {
    mediumTreasurePic.src = "images/greenSquares3.png";
};

function foundLargeTreasure()   {
    largeTreasurePic.src = "images/greenSquares4.png";
};

function revealLocations()  {
    allTreasures.style.backgroundColor ="#911";
}


function onClick(thisSquare) {
    if(allTreasures.includes(thisSquare))  {
       thisSquare.style.backgroundColor= "#911";
       turnCount = turnCount+1;
       if(turnCount == 24)  {
        alert("Game Over");
       }
       hitCount = hitCount+1;
       if(hitCount == 9)    {
        alert("Congrats, you won!");
       }
    }   else    {
        thisSquare.style.backgroundColor= "#0000FF";
        turnCount = turnCount+1;
        if(turnCount == 24)  {
            alert("Game Over");
        }
    }
    if(smallTreasure.includes(thisSquare))  {
        smallTreasureHits = smallTreasureHits+1;
        if(smallTreasureHits == 2)  {
            alert("You found the small treasure!");
            foundSmallTreasure();
        }
    }
    if(mediumTreasure.includes(thisSquare))  {
        mediumTreasureHits = mediumTreasureHits+1;
        if(mediumTreasureHits == 3)  {
            alert("You found the medium treasure!");
            foundMediumTreasure();
        }
    }
    if(largeTreasure.includes(thisSquare))  {
        largeTreasureHits = largeTreasureHits+1;
        if(largeTreasureHits == 4)  {
            alert("You found the large treasure!");
            foundLargeTreasure();
        }
    }
}

a1.addEventListener("click", () => onClick(a1), {once : true});
b1.addEventListener("click", () => onClick(b1), {once : true});
c1.addEventListener("click", () => onClick(c1), {once : true});
d1.addEventListener("click", () => onClick(d1), {once : true});
e1.addEventListener("click", () => onClick(e1), {once : true});
f1.addEventListener("click", () => onClick(f1), {once : true});
g1.addEventListener("click", () => onClick(g1), {once : true});
h1.addEventListener("click", () => onClick(h1), {once : true});

a2.addEventListener("click", () => onClick(a2), {once : true});
b2.addEventListener("click", () => onClick(b2), {once : true});
c2.addEventListener("click", () => onClick(c2), {once : true});
d2.addEventListener("click", () => onClick(d2), {once : true});
e2.addEventListener("click", () => onClick(e2), {once : true});
f2.addEventListener("click", () => onClick(f2), {once : true});
g2.addEventListener("click", () => onClick(g2), {once : true});
h2.addEventListener("click", () => onClick(h2), {once : true});

a3.addEventListener("click", () => onClick(a3), {once : true});
b3.addEventListener("click", () => onClick(b3), {once : true});
c3.addEventListener("click", () => onClick(c3), {once : true});
d3.addEventListener("click", () => onClick(d3), {once : true});
e3.addEventListener("click", () => onClick(e3), {once : true});
f3.addEventListener("click", () => onClick(f3), {once : true});
g3.addEventListener("click", () => onClick(g3), {once : true});
h3.addEventListener("click", () => onClick(h3), {once : true});

a4.addEventListener("click", () => onClick(a4), {once : true});
b4.addEventListener("click", () => onClick(b4), {once : true});
c4.addEventListener("click", () => onClick(c4), {once : true});
d4.addEventListener("click", () => onClick(d4), {once : true});
e4.addEventListener("click", () => onClick(e4), {once : true});
f4.addEventListener("click", () => onClick(f4), {once : true});
g4.addEventListener("click", () => onClick(g4), {once : true});
h4.addEventListener("click", () => onClick(h4), {once : true});

a5.addEventListener("click", () => onClick(a5), {once : true});
b5.addEventListener("click", () => onClick(b5), {once : true});
c5.addEventListener("click", () => onClick(c5), {once : true});
d5.addEventListener("click", () => onClick(d5), {once : true});
e5.addEventListener("click", () => onClick(e5), {once : true});
f5.addEventListener("click", () => onClick(f5), {once : true});
g5.addEventListener("click", () => onClick(g5), {once : true});
h5.addEventListener("click", () => onClick(h5), {once : true});

a6.addEventListener("click", () => onClick(a6), {once : true});
b6.addEventListener("click", () => onClick(b6), {once : true});
c6.addEventListener("click", () => onClick(c6), {once : true});
d6.addEventListener("click", () => onClick(d6), {once : true});
e6.addEventListener("click", () => onClick(e6), {once : true});
f6.addEventListener("click", () => onClick(f6), {once : true});
g6.addEventListener("click", () => onClick(g6), {once : true});
h6.addEventListener("click", () => onClick(h6), {once : true});

a7.addEventListener("click", () => onClick(a7), {once : true});
b7.addEventListener("click", () => onClick(b7), {once : true});
c7.addEventListener("click", () => onClick(c7), {once : true});
d7.addEventListener("click", () => onClick(d7), {once : true});
e7.addEventListener("click", () => onClick(e7), {once : true});
f7.addEventListener("click", () => onClick(f7), {once : true});
g7.addEventListener("click", () => onClick(g7), {once : true});
h7.addEventListener("click", () => onClick(h7), {once : true});

a8.addEventListener("click", () => onClick(a8), {once : true});
b8.addEventListener("click", () => onClick(b8), {once : true});
c8.addEventListener("click", () => onClick(c8), {once : true});
d8.addEventListener("click", () => onClick(d8), {once : true});
e8.addEventListener("click", () => onClick(e8), {once : true});
f8.addEventListener("click", () => onClick(f8), {once : true});
g8.addEventListener("click", () => onClick(g8), {once : true});
h8.addEventListener("click", () => onClick(h8), {once : true});