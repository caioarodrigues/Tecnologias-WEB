const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

function trocaValores(){
    vetorAdiciona.forEach((item, i) => {
        vetorPilha[i] = item;

        console.log(`Vetor pilha: ${vetorPilha}`);
    });
}

console.log(`Vetor pilha original: ${vetorPilha}`);
trocaValores();