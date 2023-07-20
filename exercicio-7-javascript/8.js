function removeItemDuplicado(array = []){
    return [...new Set(array)];
}

const arr = [1, 1, 'a', 'a'];

console.log(removeItemDuplicado(arr))