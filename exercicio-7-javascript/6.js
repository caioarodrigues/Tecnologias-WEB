function adicionaTraco(numero){
    const string = numero.toString().split('');
    const [statePar, setState] = [{ value: false }, ({ toggle = false }) => {
        if(toggle)
            statePar.value = !statePar.value;
    }];
    
    return string.map(char => {
        if(char % 2 === 0){
            if(statePar.value)
                return ['-', char].join('');

            setState({ toggle: true });  
            return char;
        }

        setState({ toggle: true });
        return char;
    }).join('');
}

const res = adicionaTraco(025468);

console.log(res);