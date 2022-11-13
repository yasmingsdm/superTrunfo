//Cards:

const harry ={
    name: 'Harry Potter',
    imagem: './harry.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: 10,
        courage: Math.floor(Math.random()*9)
    }
}

const bellatrix ={
    name: 'Bellatrix Lestrange',
    imagem: './belatriz.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: 10
    }
}

const dobby ={
    name: 'Dobby',
    imagem: './doby.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: 10,
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const draco ={
    name: 'Draco Malfoy',
    imagem: './draco.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: 10,
    }
}

const dumbledore ={
    name: 'Albus Dumbledore',
    imagem: './dumbledore.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: 10,
        courage: Math.floor(Math.random()*9),
    }
}

const hagrid ={
    name: 'Rubeus Hagrid',
    imagem: './hagrid.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: 10,
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const hermione ={
    name: 'Hermione Granger',
    imagem: './hermione.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: 10,
        courage: Math.floor(Math.random()*9),
    }
}

const neville ={
    name: 'Neville Longbottom',
    imagem: './neville.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: 10,
    }
}

const rony ={
    name: 'Rony Weasley',
    imagem: './rony.png',
    atributos:{
        magic: Math.floor(Math.random()*9),
        friendship: 10,
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const sirius ={
    name: 'Sirius Black',
    imagem: './sirius.png',
    atributos:{
        magic: 10,
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const snape ={
    name: 'Severus Snape',
    imagem: './snape.png',
    atributos:{
        magic: 10,
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const voldemort ={
    name: 'He-Who-Must-Not-Be-Named',
    imagem: './voldemort.png',
    atributos:{
        magic: 10,
        friendship: Math.floor(Math.random()*9),
        intelligence: Math.floor(Math.random()*9),
        courage: Math.floor(Math.random()*9),
    }
}

const cartas = [harry, bellatrix, dobby, draco, dumbledore, hagrid, hermione, neville, rony, sirius, snape, voldemort]

//Play:

const seeYourCard = ()=>{
    let numCardPc = Math.floor(Math.random()*cartas.length)
    let cardPc = cartas[numCardPc]
    cartas.slice(numCardPc, 1)

    let numCardPlayer = Math.floor(Math.random()*cartas.length)
    let cardPlayer = cartas[numCardPlayer]
    cartas.slice(numCardPlayer, 1)
    //console.log(cardPlayer)

    document.getElementById(myCardImg).src = cardPlayer[imagem] //NOT WORKING
    document.getElementById(myCardName) = cardPlayer[name] //NOT WORKING
    document.getElementById(myCardAttrib) = cardPlayer[atributos] //NOT WORKING

    document.getElementById('seeYourCard').disabled = true
}