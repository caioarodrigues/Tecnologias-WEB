const url = "https://api.github.com/users";
const btnConsulta = document.querySelector("#btn-consulta");
const tabela = document.querySelector(".table-resposta");
const [btnState, toggleState] = [{ toggle: false }, () => {
    const { toggle } = btnState;

    btnState.toggle = !toggle;
}] ;
const configuracao = {
    url,
    metodo: "GET",
    sucesso(resposta){
        const infos = JSON.parse(resposta);

        atualizaTabela(infos);
    },
    erro(e){
        const logErros = document.querySelector('.log-erros');
        const p = document.createElement('p');
        const msg = document
            .createTextNode(`Erro ao buscar este usuário: `);
        const logMsg = document
            .createTextNode(`"${e.codigo}: ${e.texto}"`);

        logErros.appendChild(msg);
        logErros.appendChild(p);
        logErros.appendChild(logMsg);
    }
}

function adicionaFoto(url){
    const img = document.createElement('img');
    const divFoto = document.querySelector(".foto");

    img.className = "rounded-full w-40 h-40 foto-usuario";
    img.src = url;
    divFoto.appendChild(img);
}

function addAncora(descritor, url){
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const a = document.createElement('a');
    const adicionais = document.querySelector('.adicionais');

    a.innerText = descritor;
    a.href = url;
    td.appendChild(a);
    tr.appendChild(td);
    adicionais.appendChild(tr);

    return a;
}

function atualizaTabela(infos){
    Object.entries(infos).forEach(([chave, valor]) => {
        const tr = document.createElement('tr');
        const tdChave = document.createElement('td');
        const tdValor = document.createElement('td');

        valor = (!valor || valor === '') ? 'none' : valor;

        if(chave.includes('_')){
            chave = chave.split('_').join(' ');
        }

        if(typeof valor === "string"){
            const isLink = valor.includes('https');
            const isFoto = valor.includes('avatar');

            if(isFoto){
                adicionaFoto(valor);
                
                return;
            }
            if(isLink){
                addAncora(chave, valor);
                
                return;
            }
        }

        tdChave.innerText = chave;
        tdValor.innerText = valor;
        tr.appendChild(tdChave);
        tr.appendChild(tdValor);
        tabela.appendChild(tr);
    });
}

function ajax(){
    const xhr = new XMLHttpRequest();
    const username = document.querySelector('#nome-usuario').value;
    const usrURL = url + `/${username}`;

    xhr.open(configuracao.metodo, usrURL, true);
    xhr.onload = e => {
        if(xhr.status === 200){
            configuracao.sucesso(xhr.response);
        }
        else if(xhr.status >= 400){
            const resObj = JSON.parse(xhr.responseText);
            const { message } = resObj;

            configuracao.erro({
                codigo: xhr.status,
                texto: message
            });
        }
    }
    xhr.send();
}

function carregaDados(){
    if(!btnState.toggle){
        ajax();
        toggleState();
    
        return;
    }
    
    const foto = document.querySelector('.foto-usuario');
    const tableResposta = document.querySelector('.table-resposta');
    const adicionais = document.querySelector('.adicionais');
    const logErros = document.querySelector('.log-erros');

    logErros.innerText = '';
    [...logErros.children].forEach(item => item.remove());
    [...tableResposta.children].forEach(item => item.remove());
    [...adicionais.children].forEach(item => item.remove());
    toggleState();
    foto && foto.remove();

    return carregaDados();
}

function liberaAlturaMain(){
    const main = document.querySelector('.main');
    
    main.classList.remove("h-screen");
}

btnConsulta.onclick = () => {
    carregaDados();
    liberaAlturaMain();
};