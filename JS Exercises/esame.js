//Esercizio 1

const pets = ['dog', 'cat', 'hamster', 'redfish']

for(i=0;i<pets.length;i++){
    console.log(pets[i])
}

//Esercizio 2 
// Questo è stato l'ultimo esercizio fatto e l'ho cercato. 
// Ricordo che in settimana ne abbiamo fatto uno dove bisognava ordinare, 
// non ricordo se abbiamo fatto questo sort (nel caso me lo son perso) 
// o magari un altro metodo che non ricordo. Forse switch case di confronti tra le prime lettere(?)
// Se avrò tempo dopo il mockup ci ritornerò

pets.sort()

console.log(pets)

//Esercizio 3   
//Qui ho dovuto un po' cercare perchè contnuavano a partirmi undefined infiniti in console. 
//Probabilmente devo entrare più nella logica degli esercizi che non partono dalla solita condizione i=0

for(i=pets.length-1; i>=0; i--){
}

//Esercizio 4

const eliminato = pets.shift()
pets.splice(pets.length, 0, eliminato) //Effettivamente bastava un push, damn
console.log(pets)

//Esercizio 5 

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for(i=0; i<cars.length;i++){
    cars[i].licensePlate='targa'
}

console.log(cars)

//Esercizio 6

cars.push({
    brand: 'Fiat',
    model: 'Panda',
    color: 'yellow',
    trims: ['city', 'sport', 'focosa'],
})

for(i=0;i<cars.length;i++){              
    console.log(cars[i].trims.length)  //Conto della lunghezza dei trims pre esercizio
}

for(i=0;i<cars.length;i++){
    cars[i].trims.pop()
    console.log(cars[i].trims.length)
}

//Esercizio 7

justTrims= []

for(i=0;i<cars.length;i++){
    justTrims.push(cars[i].trims[0])
}

console.log(justTrims)

//Esercizio 8

for(i=0;i<cars.length;i++){
    if(cars[i].color.slice(0,1)==='b'){
        console.log('Fizz')
    } else {
        console.log('Buzz')
    }
}

//Esercizio 9

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

i=0

while(i<numericArray.length && numericArray[i]!==32){
    console.log(numericArray[i])
    i++
}

//Esercizio 10  

// Probabilmente non è stata la cosa più intuitiva da fare. 
// Anzi, pensavo che costruita la funzione avrei potuto buttare l'array nella funzione,
// invece c'era comunque l'altro array da pushare, quindi probabilemnte avrei potuto fare tutto in unico passaggio (?) 
// Ora che ci penso forse si potrebbe fare anche mettendo l'alfabeto in unica stringa e far ciclare il valore in base alla posizione della lettera nella stringa, ma non credo poi preveda l'utilizzo dello switch 

const charactersArray = ['g', 'n', 'u', 'z', 'd']

const positionArray = []

function convertitore(lettera) {
  switch(lettera){
    case 'a':
        return 1
    case 'b':
        return 2
    case 'c':
        return 3
    case 'd':
        return 4
    case 'e':
        return 5
    case 'f':
        return 6
    case 'g':
        return 7
    case 'h':
        return 8
    case 'i':
        return 9
    case 'l':
        return 10
    case 'm':
        return 11
    case 'n':
        return 12
    case 'o':
        return 13
    case 'p':
        return 14
    case 'q':
        return 15
    case 'r':
        return 16
    case 's':
        return 17
    case 't':
        return 18
    case 'u':
        return 19
    case 'v':
        return 20
    case 'z':
        return 21
  }
}

for(i=0; i<charactersArray.length; i++){
    positionArray.push(convertitore(charactersArray[i]))
}

console.log(positionArray)

