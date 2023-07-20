function ultimoElementoArray(n, array){
    const limite = array.length;

    if(n < limite){
        const ordem = limite - n;
        const ultimosElementos = array.filter((elemento, index) => {
            return ordem <= index ? elemento : false; 
        });

        return ultimosElementos;
    }

    return array[n];
}

const arr = [1, 2, 3, 4, 5, 6];
const ultimoElemento = ultimoElementoArray(2, arr);

console.log(ultimoElemento)