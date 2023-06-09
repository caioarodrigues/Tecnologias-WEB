const unirEmString = (...array) => array.toString().split(',').join('');

const arr = [1, 2, 3, 4, 'usdaokdso', undefined, '123oko4', null];
const res = unirEmString(arr);

console.log(res)