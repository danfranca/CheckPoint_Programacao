//Aluno: Danilo Romano França
//Turma 3
//CheckPoint Programação Imperativa

//variaveis
let Pipoca = 10
let Macarrão = 8
let Carne = 15
let Feijão = 12
let Brigadeiro = 8

//linha de código
function microondas(comida, tempo) {
    switch (comida) {
        case ('Pipoca'):
            if (tempo < Pipoca) { console.log("tempo insuficiente"); console.log('Prato pronto, bom apetite!!!') }
            else if (tempo < Pipoca * 2 && tempo >= Pipoca) { console.log('Prato pronto, bom apetite!!!') }
            else if (tempo >= Pipoca * 2 && tempo < Pipoca * 3) { console.log('a comida queimou'); (console.log('Prato pronto, bom apetite!!!')) }
            else if (tempo >= Pipoca * 3) { console.log('kabumm'); (console.log('Prato pronto, bom apetite!!!')) }
            else;
            break;
        case ('Macarrão'):
            if (tempo < Macarrão) { console.log("tempo insuficiente"); console.log('Prato pronto, bom apetite!!!') }
            else if (tempo < Macarrão * 2 && tempo >= Macarrão) { console.log('Prato pronto, bom apetite!!!') }
            else if (tempo >= Macarrão * 2 && tempo < Macarrão * 3) { console.log('a comida queimou'); (console.log('Prato pronto, bom apetite!!!')) }
            else if (tempo >= Macarrão * 3) { console.log('kabumm'); (console.log('Prato pronto, bom apetite!!!')) }
            else;
            break;
        case ('Carne'):
            if (tempo < Carne) { console.log("tempo insuficiente"); console.log('Prato pronto, bom apetite!!!') }
            else if (tempo < Carne * 2 && tempo >= Carne) { console.log('Prato pronto, bom apetite!!!') }
            else if (tempo >= Carne * 2 && tempo < Carne * 3) { console.log('a comida queimou'); (console.log('Prato pronto, bom apetite!!!')) }
            else if (tempo >= Carne * 3) { console.log('kabumm'); (console.log('Prato pronto, bom apetite!!!')) }
            else;
            break;
        case ('Feijão'):
            if (tempo < Feijão) { console.log("tempo insuficiente"); console.log('Prato pronto, bom apetite!!!') }
            else if (tempo < Feijão * 2 && tempo >= Feijão) { console.log('Prato pronto, bom apetite!!!') }
            else if (tempo >= Feijão * 2 && tempo < Feijão * 3) { console.log('a comida queimou'); (console.log('Prato pronto, bom apetite!!!')) }
            else if (tempo >= Feijão * 3) { console.log('kabumm'); (console.log('Prato pronto, bom apetite!!!')) }
            else;
            break;
        case ('Brigadeiro'):
            if (tempo < Brigadeiro) { console.log("tempo insuficiente"); console.log('Prato pronto, bom apetite!!!') }
            else if (tempo < Brigadeiro * 2 && tempo >= Brigadeiro) { console.log('Prato pronto, bom apetite!!!') }
            else if (tempo >= Brigadeiro * 2 && tempo < Brigadeiro * 3) { console.log('a comida queimou'); (console.log('Prato pronto, bom apetite!!!')) }
            else if (tempo >= Brigadeiro * 3) { console.log('kabumm'); (console.log('Prato pronto, bom apetite!!!')) }
            else;
            break;
            default: console.log('Prato Inexistente')

    }
}

//testes
microondas('Pipoca', 5);
microondas('Macarrão', 12);
microondas('Carne', 30);
microondas('Feijão', 35);
microondas('Brigadeiro', 50);
microondas('Arroz', 8);  //prato inexistente