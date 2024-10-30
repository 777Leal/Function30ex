//--------------- S  P  A  C  E  Ex1 ----------------//

let nickname = "Macho Alpha"

    let LetraMaiuscula = nickname.toUpperCase();
    let LetraMinuscula = nickname.toLowerCase();

    console.log(LetraMaiuscula, LetraMinuscula);

//--------------- S  P  A  C  E   Ex2 ----------------//
let fruta = "Berinjela"

function temLetraA(fruta){
    fruta.toLowerCase();

    if(fruta.includes("a")){
        console.log(`A letra "a" da palavra ${fruta}, está na posição ${fruta.indexOf("a") + 1}.`);

    } else{
        console.log("Não tem a");
    }
}
temLetraA(fruta);

//--------------- S  P  A  C  E   Ex3 ----------------//

const notícia = `Neste ano de 2024, o grande jogador "pelé" (já falecido) acabou sendo reconhecido como uma forma de elogio dentre as pessoas. `

let começo = notícia.slice(0, 43);
let final = notícia.slice(43, 150);

console.log(`Início: ${começo}, final: ${final}`);

//--------------- S  P  A  C  E   Ex4 ----------------//

const frase = "Claudião"

console.log(frase.concat(" doPneu"));

//--------------- S  P  A  C  E   Ex5 ----------------//

const frase2 = `Eu não sei andar em uma cadeira de rodas motorizada`;
console.log(frase2.replace(`Não sei, sei`))

//--------------- S  P  A  C  E   Ex6 ----------------//