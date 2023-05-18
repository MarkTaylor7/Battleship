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

//Functions for Hits and Misses

function onClick(thisSquare) {   
    if(allTreasures.includes(thisSquare))  {
       thisSquare.style.backgroundColor= "#911";
    }   else    {
        thisSquare.style.backgroundColor= "#0000FF";
    } 
}

a1.addEventListener("click", () => onClick(a1));
b1.addEventListener("click", () => onClick(b1));
c1.addEventListener("click", () => onClick(c1));
d1.addEventListener("click", () => onClick(d1));
e1.addEventListener("click", () => onClick(e1));
f1.addEventListener("click", () => onClick(f1));
g1.addEventListener("click", () => onClick(g1));
h1.addEventListener("click", () => onClick(h1));

a2.addEventListener("click", () => onClick(a2));
b2.addEventListener("click", () => onClick(b2));
c2.addEventListener("click", () => onClick(c2));
d2.addEventListener("click", () => onClick(d2));
e2.addEventListener("click", () => onClick(e2));
f2.addEventListener("click", () => onClick(f2));
g2.addEventListener("click", () => onClick(g2));
h2.addEventListener("click", () => onClick(h2));

a3.addEventListener("click", () => onClick(a3));
b3.addEventListener("click", () => onClick(b3));
c3.addEventListener("click", () => onClick(c3));
d3.addEventListener("click", () => onClick(d3));
e3.addEventListener("click", () => onClick(e3));
f3.addEventListener("click", () => onClick(f3));
g3.addEventListener("click", () => onClick(g3));
h3.addEventListener("click", () => onClick(h3));

a4.addEventListener("click", () => onClick(a4));
b4.addEventListener("click", () => onClick(b4));
c4.addEventListener("click", () => onClick(c4));
d4.addEventListener("click", () => onClick(d4));
e4.addEventListener("click", () => onClick(e4));
f4.addEventListener("click", () => onClick(f4));
g4.addEventListener("click", () => onClick(g4));
h4.addEventListener("click", () => onClick(h4));

a5.addEventListener("click", () => onClick(a5));
b5.addEventListener("click", () => onClick(b5));
c5.addEventListener("click", () => onClick(c5));
d5.addEventListener("click", () => onClick(d5));
e5.addEventListener("click", () => onClick(e5));
f5.addEventListener("click", () => onClick(f5));
g5.addEventListener("click", () => onClick(g5));
h5.addEventListener("click", () => onClick(h5));

a6.addEventListener("click", () => onClick(a6));
b6.addEventListener("click", () => onClick(b6));
c6.addEventListener("click", () => onClick(c6));
d6.addEventListener("click", () => onClick(d6));
e6.addEventListener("click", () => onClick(e6));
f6.addEventListener("click", () => onClick(f6));
g6.addEventListener("click", () => onClick(g6));
h6.addEventListener("click", () => onClick(h6));

a7.addEventListener("click", () => onClick(a7));
b7.addEventListener("click", () => onClick(b7));
c7.addEventListener("click", () => onClick(c7));
d7.addEventListener("click", () => onClick(d7));
e7.addEventListener("click", () => onClick(e7));
f7.addEventListener("click", () => onClick(f7));
g7.addEventListener("click", () => onClick(g7));
h7.addEventListener("click", () => onClick(h7));

a8.addEventListener("click", () => onClick(a8));
b8.addEventListener("click", () => onClick(b8));
c8.addEventListener("click", () => onClick(c8));
d8.addEventListener("click", () => onClick(d8));
e8.addEventListener("click", () => onClick(e8));
f8.addEventListener("click", () => onClick(f8));
g8.addEventListener("click", () => onClick(g8));
h8.addEventListener("click", () => onClick(h8));