//Cards:

const harry ={
    name: 'Harry Potter',
    imagem: './images/harry.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: 10,
        courage: Math.floor(Math.random()*9)
    }
}

const bellatrix ={
    name: 'Bellatrix Lestrange',
    imagem: './images/belatriz.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: 9
    }
}

const dobby ={
    name: 'Dobby',
    imagem: './images/doby.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: 9,
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const draco ={
    name: 'Draco Malfoy',
    imagem: './images/draco.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: 8,
    }
}

const dumbledore ={
    name: 'Albus Dumbledore',
    imagem: './images/dumbledore.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: 9,
        courage: Math.floor(Math.random()*9),
    }
}

const hagrid ={
    name: 'Rubeus Hagrid',
    imagem: './images/hagrid.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: 9,
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const hermione ={
    name: 'Hermione Granger',
    imagem: './images/hermione.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: 9,
        courage: Math.floor(Math.random()*9),
    }
}

const neville ={
    name: 'Neville Longbottom',
    imagem: './images/neville.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: 8,
    }
}

const rony ={
    name: 'Rony Weasley',
    imagem: './images/rony.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: 8,
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const sirius ={
    name: 'Sirius Black',
    imagem: './images/sirius.png',
    atributos:{
        magic: 8,
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const snape ={
    name: 'Severus Snape',
    imagem: './images/snape.png',
    atributos:{
        magic: 8,
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const voldemort ={
    name: 'He-Who-Must-Not-Be-Named',
    imagem: './images/voldemort.png',
    atributos:{
        magic: 10,
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

let cartas = [harry, bellatrix, dobby, draco, dumbledore, hagrid, hermione, neville, rony, sirius, snape, voldemort]

let pontosPc = 0
let pontosPlayer = 0

let cardPlayer 
let cardPc

const seeYourCard = ()=>{
    // Sortear cartas:
    let numCardPc = Math.floor(Math.random()*cartas.length)
    cardPc = cartas[numCardPc]
    cartas.splice(numCardPc,1)

    let numCardPlayer = Math.floor(Math.random()*cartas.length)
    cardPlayer = cartas[numCardPlayer]
    cartas.splice(numCardPlayer, 1)

    document.getElementById('playerCard').style.display='block'
    document.getElementById('myCardImg').src = cardPlayer.imagem 
    document.getElementById('myCardName').innerHTML = cardPlayer.name 
    document.getElementById('myCardAttrib').innerHTML = 'Magic: ' + cardPlayer.atributos.magic + '<br>Friendship: '+ cardPlayer.atributos.friendship + '<br>Intelligence: ' + cardPlayer.atributos.intelligence + '<br>Courage: ' + cardPlayer.atributos.courage

    document.getElementById('seeYourCard').disabled = true
}

const play = ()=>{

// Choose an attribute:
let atributoEscolhido = ''

if (document.getElementById('magic').checked == true){
    atributoEscolhido = 'magic'
} else if (document.getElementById('friendship').checked == true){
    atributoEscolhido = 'friendship'
} else if (document.getElementById('intelligence').checked == true){
    atributoEscolhido = 'intelligence'
} else if (document.getElementById('courage').checked == true){
    atributoEscolhido = 'courage'
} else { alert('Choose an attribute')}

//Compare cards and see who wins:

if (atributoEscolhido == 'magic'){
    if (cardPlayer.atributos.magic > cardPc.atributos.magic){
        pontosPlayer++
    } else if (cardPc.atributos.magic > cardPlayer.atributos.magic){
        pontosPc++
    }
} else if (atributoEscolhido == 'friendship'){
    if (cardPlayer.atributos.friendship > cardPc.atributos.friendship){
        pontosPlayer++
    } else if (cardPc.atributos.friendship > cardPlayer.atributos.friendship){
        pontosPc++
    }
}else if (atributoEscolhido == 'intelligence'){
    if (cardPlayer.atributos.intelligence > cardPc.atributos.intelligence){
        pontosPlayer++
    } else if (cardPc.atributos.intelligence > cardPlayer.atributos.intelligence){
        pontosPc++
    }
}else if (atributoEscolhido == 'courage'){
    if (cardPlayer.atributos.courage > cardPc.atributos.courage){
        pontosPlayer++
    } else if (cardPc.atributos.courage > cardPlayer.atributos.courage){
        pontosPc++
     }
 }

//Show Pc Card:

document.getElementById('pc-card').style.display='block'
document.getElementById('pcCardImg').src = cardPc.imagem 
document.getElementById('pcCardName').innerHTML = cardPc.name 
document.getElementById('pcCardAttrib').innerHTML = 'Magic: ' + cardPc.atributos.magic + '<br>Friendship: '+ cardPc.atributos.friendship + '<br>Intelligence: ' + cardPc.atributos.intelligence + '<br>Courage: ' + cardPc.atributos.courage

//Scoreboard:

document.getElementById('scoreboard').innerHTML = 'You: ' + pontosPlayer + '  /  Pc: ' + pontosPc

// Disable when there is no more cards:

if (cartas.length < 2 ){
    document.getElementById('nextTurn').disabled = true
} 
}

//Next Turn:

const nextTurn = ()=>{
    document.getElementById('pc-card').style.display='none'
    document.getElementById('playerCard').style.display='none'
    document.getElementById('seeYourCard').disabled = false 
}
// Play Again:

document.getElementById('playAgain').onclick = ()=>{
    location.reload()
}