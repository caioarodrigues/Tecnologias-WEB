const url = "https://reqres.in/api/users";

async function listaUsuarios(){
    const lista = document.querySelector('.lista-usuarios');
    const usuarios = await fetch(url)
        .then(res => res.json())
        .then(({ data }) => data);

    usuarios.forEach((usuario) => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        Object.entries(usuario).forEach(([chave, valor]) => {
            const span = document.createElement('span');

            span.innerText = `${chave}: ${valor} `;
            p.appendChild(span);
        });

        li.appendChild(p);
        lista.appendChild(li);
    });
}

async function criaUsuario(event){
    event.preventDefault();
    const spanResposta = document.querySelector(".span-resposta-post");
    const obj = {};
    const form = document.querySelector(".form-post-usuario");
    const submitter = document.querySelector(".post-submitter");
    const fd = new FormData(form, submitter);

    for(let [key, value] of fd){
        obj[key] = value;
    }

    obj['id'] = 99;

    spanResposta.innerText = '';
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
    .then(res => JSON.parse(res))
    .then(res => {
        spanResposta.innerText = res;
    })
    .catch(err => {
        spanResposta.innerText = err.message;
    });
}

async function editaUsuario(event){
    event.preventDefault();
    const spanResposta = document.querySelector(".span-resposta-put");
    const obj = {};
    const form = document.querySelector(".form-put-usuario");
    const submitter = document.querySelector(".put-submitter");
    const fd = new FormData(form, submitter);

    for(let [key, value] of fd){
        obj[key] = value;
    }

    spanResposta.innerText = '';
    await fetch(url, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"},
        mode: "cors"
    })
    .then(res => JSON.stringify(res))
    .then(res => {
        spanResposta.innerText = res;
    })
    .catch(err => {
        spanResposta.innerText = err.message;
    });
}