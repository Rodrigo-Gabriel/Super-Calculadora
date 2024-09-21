// ITENS PRINCIPAIS
const verificaConta = document.getElementById('verificaConta');
const limparResultado = document.getElementById('limparResultado');
const p = document.getElementById('p');

// FORMULA DO CUBO
verificaConta.addEventListener('click', () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    
    let valor1AoCubo = Number(valor1) ** 3;
    let valor2AoCubo = Number(valor2) ** 3;

    let resultado = Number(valor1AoCubo - valor2AoCubo);

    p.innerHTML = 'O volume é = ' + resultado.toFixed(1);
    return
})

limparResultado.addEventListener('click', () => {
    window.location.reload(false);
})

// FORMULA DO PARALELEPIPEDO
const verificaContaParalelepipedo = document.getElementById('verificaContaParalelepipedo');
const limparResultadoParalelepipedo = document.getElementById('limparResultadoParalelepipedo');
const pParalelepipedo = document.getElementById('pParalelepipedo');

verificaContaParalelepipedo.addEventListener('click', () => {
    let valorA = document.getElementById('valorA').value;
    let valorB = document.getElementById('valorB').value;
    let valorC = document.getElementById('valorC').value;

    let contaParalelepipedo = Number(valorA * valorB * valorC);

    pParalelepipedo.innerHTML = 'O volume é = ' + contaParalelepipedo.toFixed(1);
})

limparResultadoParalelepipedo.addEventListener('click', () => {
    window.location.reload(false);
})

// FORMULA DO CILINDRO
const verificaContaCilindro = document.getElementById('verificaContaCilindro');
const limparResultadoCilindro = document.getElementById('limparResultadoCilindro');
const pCilindro = document.getElementById('pCilindro');

verificaContaCilindro.addEventListener('click', () => {
    let valorRaio = document.getElementById('valorRaio').value;
    let valorAltura = document.getElementById('valorAltura').value;
    const pi = Number(3.14);

    let contaCilindro = Number(pi * (valorRaio ** 2) * valorAltura);

    pCilindro.innerHTML = 'O volume é = ' + contaCilindro.toFixed(1);
})

limparResultadoCilindro.addEventListener('click', () => {
    window.location.reload(false);
})

// FORMULA DO PRISMA !!! EM PROCESSO !!!
const verificaContaPrisma = document.getElementById('verificaContaPrisma');
const limparResultadoPrisma = document.getElementById('limparResultadoPrisma');
const pPrisma = document.getElementById('pPrisma');

verificaContaPrisma.addEventListener('click', () => {
    let valorPrismaAb = document.getElementById('valorPrismaAb').value;
    let valorPrismaH = document.getElementById('valorPrismaH').value;

    let contaPrisma = Number(valorPrismaAb * valorPrismaH);

    pPrisma.innerHTML = 'O volume é = ' + contaPrisma.toFixed(1);
})

limparResultadoPrisma.addEventListener('click', () => {
    window.location.reload(false);
})