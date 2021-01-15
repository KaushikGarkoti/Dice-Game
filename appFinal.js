document.querySelector('.player-2 .roll-dice .ico').style.display ='none';
document.querySelector('.player-2 .hold .ico').style.display ='none';
let start;
let swap;
let cs = 0;
let player = 'player-1';
let total1 = document.querySelector(`.player-1 .wrapper .total h1`);
const newGame = document.querySelector('.container #text-box');
let total2 = document.querySelector(`.player-2 .wrapper .total h1`);

loadEventListeners(player);

function loadEventListeners(player) {
    start = document.querySelector(`.${player} .roll-dice .ico`);
    swap = document.querySelector(`.${player} .hold .ico`);
    newGame.addEventListener('click', startNewGame);

start.addEventListener('click',gameRunning);

}

function gameRunning(){
  if(player==='player-1'){
  rollDice('player-1');
 }
  else{
   rollDice('player-2');
  }
}

function rollDice(whichPlayer){
    
    const number = Math.floor(Math.random()*6)+1; 
    const img = document.createElement('img');
    img.className = 'image';
    img.src=`./images/dice-${number}.png`;
    img.alt="";
    let dice = document.querySelector(`.${whichPlayer} .dice`);
    dice.removeChild(dice.childNodes[0])
    dice.appendChild(img);
    updateCurrentScore(number,whichPlayer);
}

function updateCurrentScore(number,player_num){
 if(number === 1){
    cs = 0;
    saveAndSwapPlayer(player_num);
 }
 else{
 cs= cs+number;
 }

 document.querySelector(`.${player_num} .current .temp`).innerText = cs;
 swap.addEventListener('click',saveAndSwapPlayerHelper);
}

function saveAndSwapPlayerHelper(){
  saveAndSwapPlayer(player);
}



function updateTotal(player){
    let val;
    if(player === 'player-1'){
        val = parseInt(total1.innerText)+cs;
        total1.innerText = val;
    }
    else{
         val = parseInt(total2.innerText)+cs;
        total2.innerText = val;
    }

}



function saveAndSwapPlayer(player_){
    console.log('accessed');
    console.log(player_);
    updateTotal(player_);
    if(total1.innerText>=100 || total2.innerText>=100){
        if(parseInt(total1.innerText)>parseInt(total2.innerText)){
        const txt = document.createTextNode('Winner')
        total1.innerText = txt.nodeValue;
        }
        else{
            const txt = document.createTextNode('Winner')
            total2.innerText = txt.nodeValue;
        }
        Winner();
        return;
    }

    cs = 0;
    swapColors(player_);
    setDisplay(player_);

}



function swapColors(player){
    if(player === 'player-1'){
        document.querySelector(`.player-2`).style.background ='#002855';
        document.querySelector(`.player-1`).style.background ='#023e7d';
    }
    else{
        document.querySelector(`.player-2`).style.background = '#023e7d';
        document.querySelector(`.player-1`).style.background = '#002855';
    }
}



function Winner(){
  document.querySelector('.player-1 .roll-dice .ico').style.display ='none';
  document.querySelector('.player-1 .hold .ico').style.display ='none';
  document.querySelector('.player-2 .roll-dice .ico').style.display ='none';
  document.querySelector('.player-2 .hold .ico').style.display ='none';

}

function setDisplay(playerzz){

document.querySelector(`.${playerzz} .roll-dice .ico`).style.display ='none';
document.querySelector(`.${playerzz} .hold .ico`).style.display ='none';

if(player === 'player-1') {

    document.querySelector('.player-2 .roll-dice .ico').style.display ='block';
    document.querySelector('.player-2 .hold .ico').style.display ='block';
    player = 'player-2';
    loadEventListeners(player);
}
else{
        document.querySelector('.player-1 .roll-dice .ico').style.display ='block';
        document.querySelector('.player-1 .hold .ico').style.display ='block';
        player = 'player-1';
        loadEventListeners(player);
    }
}

function startNewGame(){
    saveAndSwapPlayer(player);
    document.querySelector('.player-2 .roll-dice .ico').style.display ='none';
    document.querySelector('.player-2 .hold .ico').style.display ='none';
    document.querySelector('.player-1 .roll-dice .ico').style.display ='block';
    document.querySelector('.player-1 .hold .ico').style.display ='block';
    total1.innerText = '0';
    total2.innerText = '0';
    cs = 0;
  player = 'player-1'; 
  loadEventListeners('player-1'); 
}


