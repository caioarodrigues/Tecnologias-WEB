function isArray(item){
    const isObj = typeof(item) === "object";

    if(isObj){
        const isNotNull = item !== null;

        if(isNotNull){
            const isNotObject = Array.isArray(item);

            return isNotObject;
        }

        return isNotNull;
    }

    return isObj;
}

const itens = ['asokdoa', 123, 23.45, undefined, null, { chave: "valor "}, [1, 2, 3, 4]]

itens.forEach(item => {
    typeof item === "object" ? item = JSON.stringify(item) : item;

    console.log(`${item} => ${isArray(item)}`);
});