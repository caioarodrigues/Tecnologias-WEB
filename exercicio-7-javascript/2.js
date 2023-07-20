function clonaArray(array){
    const novoArray = [ ...array ];

    return novoArray;
}

const arr = [1, 2, 3, 4];
const arr2 = clonaArray(arr);

console.log(arr, arr2);