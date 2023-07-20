function somaDoisArrays(arr1 = [], arr2 = []){
    if(arr1.length > arr2.length){
        return arr1.map((item, index) => {
            arr2[index] = arr2[index] ?? 0;

            return item + arr2[index];
        });
    }

    return arr2.map((item, index) => {
        arr1[index] = arr1[index] ?? 0;

        return item + arr1[index]
    });
}

const arr1 = [1, 2, 3, 10, -12];
const arr2 = [4, 4, 10];

console.log(somaDoisArrays(arr1, arr2))