function primeiroElementoArray(array, n = 1){
    const elementos = array.filter((elemento, index) => {
        return index < n ? elemento : false;
    });

    return elementos;
}

const arr = [1, 2, 3, 4];

const lista1 = primeiroElementoArray(arr);
const lista2 = primeiroElementoArray(arr, 3);

console.log(lista1, lista2);