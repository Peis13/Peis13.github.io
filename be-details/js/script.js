// INPUT
var sideBar = document.getElementById('sidebar')
var homeLi = document.getElementById('home-li')
var modelsLi = document.getElementById('models-li')
var storeLi = document.getElementById('store-li')

// LISTA PROVINCE
var fcList = document.getElementById('fc-list')
var rnList = document.getElementById('rn-list')
var boList = document.getElementById('bo-list')
var moList = document.getElementById('mo-list')
var prList = document.getElementById('pr-list')
var raList = document.getElementById('ra-list')
var feList = document.getElementById('fe-list')
var puList = document.getElementById('pu-list')
var anList = document.getElementById('an-list')

// FRECCE PROVINCE
var arrowDownFC = document.getElementById('arrow-fc')
var arrowDownRN = document.getElementById('arrow-rn')
var arrowDownBO = document.getElementById('arrow-bo')
var arrowDownMO = document.getElementById('arrow-mo')
var arrowDownPR = document.getElementById('arrow-pr')
var arrowDownRA = document.getElementById('arrow-ra')
var arrowDownFE = document.getElementById('arrow-fe')
var arrowDownPU = document.getElementById('arrow-pu')
var arrowDownAN = document.getElementById('arrow-an')

// BOTTONI
var burger = document.getElementById('burger');


// BURGER MENU
// Al click, anima l'icona e apri e chiudi sidebar
burger.addEventListener('click',
  function() {
    animBurger(burger);
    openNav(sideBar);
  }
)
homeLi.addEventListener('click',
  function() {
    animBurger(burger);
    openNav(sideBar);
  }
)
modelsLi.addEventListener('click',
  function() {
    animBurger(burger);
    openNav(sideBar);
  }
)
storeLi.addEventListener('click',
  function() {
    animBurger(burger);
    openNav(sideBar);
  }
)

// PROVINCE
// FC
arrowDownFC.addEventListener('click',
  function() {
    openPr(fcList);
    rotateArrow(arrowDownFC)
  }
)

// RN
arrowDownRN.addEventListener('click',
  function() {
    openPr(rnList);
    rotateArrow(arrowDownRN)
  }
)
// BO
arrowDownBO.addEventListener('click',
  function() {
    openPr(boList);
    rotateArrow(arrowDownBO)
  }
)
// MO
arrowDownMO.addEventListener('click',
  function() {
    openPr(moList);
    rotateArrow(arrowDownMO)
  }
)
// PR
arrowDownPR.addEventListener('click',
  function() {
    openPr(prList);
    rotateArrow(arrowDownPR)
  }
)
// RA
arrowDownRA.addEventListener('click',
  function() {
    openPr(raList);
    rotateArrow(arrowDownRA)
  }
)
// FE
arrowDownFE.addEventListener('click',
  function() {
    openPr(feList);
    rotateArrow(arrowDownFE)
  }
)
// PU
arrowDownPU.addEventListener('click',
  function() {
    openPr(puList);
    rotateArrow(arrowDownPU)
  }
)
// AN
arrowDownAN.addEventListener('click',
  function() {
    openPr(anList);
    rotateArrow(arrowDownAN)
  }
)

//          FUNZIONI          //
// ANIMAZIONE MENU ICON
function animBurger(bottone) {
  bottone.classList.toggle("change");
}

// ANIMAZIONE SIDE-MENU
// Apertura
function openNav(nav) {
  nav.classList.toggle("openW");
}
//
// // Chiusura
// function closeNav(nav) {
//   nav.style.width = "0";
// }

// ANIMAZIONE PROVINCE-MENU
// Apertura
function openPr(province) {
  province.classList.toggle("openH");
}
//
// // Chiusura
// function closePr(province) {
//   province.style.height = "0";
// }
// Rotazione
function rotateArrow(arrow) {
  arrow.classList.toggle("rotate");
}
