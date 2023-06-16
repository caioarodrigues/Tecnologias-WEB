<h2>
API de CRUD de usuários feita para disciplina de Tecnologias WEB, UFC Sobral 2023.1, Professor Fischer Ferreira.
</h2>

<hr>

<h3>Endereço padrão:</h3>
<p>http://localhost:3000/<p>

<hr>
<h3>ENDPOINTS</h3>
<hr>
    (GET) / -> lista todos os usuários <br>
    (POST) / -> cria novo usuário <br>
    (PUT) / -> edita usuário <br>
    (DELETE) / -> remove usuário <br>

<br>
<p>Ao enviar requisições POST E PUT, deve ser enviado no body da requisição estilo</p>

    usuario = { email, first_name, last_name, avatar }

<h4>
    na requisição PUT, deve ser incluído o ID.
</h4>