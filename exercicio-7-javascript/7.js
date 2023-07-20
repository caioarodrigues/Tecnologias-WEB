function itemMaisFrequente(array){
    let maisFrequente;

    const frequencia = array.map(item => {
        let cont = 0;

        array.forEach(el => {
            el === item ? cont++ : el ;
        });
 
        return ({ item, cont });
    });

    for(let i = 0; i < frequencia.length; i++){
        const { cont } = frequencia[i];

        if(i === 0) {
            maisFrequente = frequencia[i];
            
            continue;
        };

        if(cont > maisFrequente.cont){
            maisFrequente = frequencia[i];
        }
    }

    return maisFrequente;
}
const arr = [1, 2, 3, 'oskdaodk', 3, 1, 3]

const resultado = itemMaisFrequente(arr);
console.log(resultado)